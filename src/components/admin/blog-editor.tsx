"use client";

import { useState, useMemo, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { createBlogPost, updateBlogPost } from "@/app/admin/blog/actions";
import { getCategories } from "@/app/admin/blog/categories/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Plus, Upload, Loader2, CheckCircle, AlertCircle, Eye, Share2, Search, BrainCircuit, Trash2, Settings, Target, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export function BlogEditor({ initialData, postId }: { initialData?: any, postId?: string }) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || "",
    tags: initialData?.tags?.join(", ") || "",
    cover_image: initialData?.cover_image || initialData?.og_image || "",
    cover_image_alt: initialData?.cover_image_alt || "",
    cover_image_caption: initialData?.cover_image_caption || "",
    author_name: initialData?.author_name || "",
    focusKeyword: initialData?.seo_keywords || "",
    seo_title: initialData?.seo_title || "",
    seo_description: initialData?.seo_description || "",
    canonical_url: initialData?.canonical_url || "",
    indexing: initialData?.indexing || "index",
    follow: initialData?.follow || "follow",
    og_title: initialData?.og_title || "",
    og_description: initialData?.og_description || "",
    og_image: initialData?.og_image || "",
    schema_type: initialData?.schema_type || "BlogPosting",
    toc_enabled: initialData?.toc_enabled ?? true,
    cta_type: initialData?.cta_type || "none",
    published: initialData?.published || false,
    faq: Array.isArray(initialData?.faq) ? initialData.faq : [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value: string) => {
    setFormData({ ...formData, content: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    getCategories()
      .then(data => setCategories(data || []))
      .catch(() => {});
  }, []);

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const addFaq = () => {
    setFormData({ ...formData, faq: [...formData.faq, { question: "", answer: "" }] });
  };

  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    const newFaq = [...formData.faq];
    newFaq[index][field] = value;
    setFormData({ ...formData, faq: newFaq });
  };

  const removeFaq = (index: number) => {
    const newFaq = [...formData.faq];
    newFaq.splice(index, 1);
    setFormData({ ...formData, faq: newFaq });
  };

  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });
      const data = await res.json();
      if (data.success) {
        setFormData({ ...formData, cover_image: data.url });
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setIsUploading(false);
      // Reset input
      if (e.target) e.target.value = "";
    }
  };

  const handleSave = (publish: boolean) => {
    let finalSlug = formData.slug.trim();
    if (!finalSlug && formData.title) {
      finalSlug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    if (!formData.title) {
      alert("Post Title is required.");
      return;
    }
    if (!finalSlug) {
      alert("URL Slug is required.");
      return;
    }

    const wordCount = formData.content.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200) || 1;

    const submissionData = {
      ...formData,
      slug: finalSlug,
      published: publish,
      tags: formData.tags.split(",").map((t: string) => t.trim()).filter(Boolean),
      reading_time: readingTime,
    };

    startTransition(async () => {
      let result;
      if (postId) {
        result = await updateBlogPost(postId, submissionData);
      } else {
        result = await createBlogPost(submissionData);
      }
      
      if (result.success) {
        alert(postId ? "Blog post updated successfully!" : "Blog post saved successfully!");
        router.push("/admin/blog");
        router.refresh();
      } else {
        alert("Error saving blog post: " + result.error);
      }
    });
  };

  // Metrics
  const wordCount = formData.content.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200) || 1;

  // --- Real-time SEO & AEO Analysis ---
  const seoAnalysis = useMemo(() => {
    let score = 0;
    let checks = [];
    const keyword = formData.focusKeyword.toLowerCase();
    
    // Keyword checks
    if (keyword) {
      if ((formData.seo_title || formData.title).toLowerCase().includes(keyword)) { score += 25; checks.push({ pass: true, msg: "Keyword in SEO Title" }); }
      else { checks.push({ pass: false, msg: "Keyword in SEO Title" }); }
      
      if (formData.seo_description.toLowerCase().includes(keyword)) { score += 25; checks.push({ pass: true, msg: "Keyword in Meta Description" }); }
      else { checks.push({ pass: false, msg: "Keyword in Meta Description" }); }

      if (formData.slug.toLowerCase().includes(keyword.replace(/\s+/g, '-'))) { score += 20; checks.push({ pass: true, msg: "Keyword in URL Slug" }); }
      else { checks.push({ pass: false, msg: "Keyword in URL Slug" }); }
    } else {
      checks.push({ pass: false, msg: "No focus keyword set" });
    }

    // Length checks
    const titleLen = (formData.seo_title || formData.title).length;
    if (titleLen >= 40 && titleLen <= 60) { score += 15; checks.push({ pass: true, msg: `Title Length (${titleLen} chars)` }); }
    else { checks.push({ pass: false, msg: `Title Length (${titleLen} chars)` }); }

    const descLen = formData.seo_description.length;
    if (descLen >= 120 && descLen <= 160) { score += 15; checks.push({ pass: true, msg: `Meta Description Length (${descLen} chars)` }); }
    else { checks.push({ pass: false, msg: `Meta Description Length (${descLen} chars)` }); }

    return { score, checks };
  }, [formData]);

  const aeoAnalysis = useMemo(() => {
     let checks = [];
     
     if (formData.excerpt.length > 50) { checks.push({ pass: true, msg: "Key Takeaways (Excerpt) present" }); }
     else { checks.push({ pass: false, msg: "Missing Key Takeaways (Excerpt)" }); }

     if (formData.content.includes("<ul>") || formData.content.includes("<ol>")) { checks.push({ pass: true, msg: "Uses Lists (HTML ul/ol)" }); }
     else { checks.push({ pass: false, msg: "No lists found (bad for snippets)" }); }

     const hasQuestionHeading = /<(h2|h3)[^>]*>.*(how|what|why|\?).*<\/(h2|h3)>/i.test(formData.content);
     if (hasQuestionHeading) { checks.push({ pass: true, msg: "Conversational Headings (H2/H3 with What/How/Why)" }); }
     else { checks.push({ pass: false, msg: "No conversational headings found" }); }

     if (formData.faq.length > 0) { checks.push({ pass: true, msg: `Structured FAQ Data (${formData.faq.length} items)` }); }
     else { checks.push({ pass: false, msg: "No Structured FAQ Data" }); }

     return { checks };
  }, [formData.content, formData.excerpt, formData.faq]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-muted/20 font-inter -mx-4 sm:-mx-6 lg:-mx-8 -my-6">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-10 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog" className="flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Exit Editor
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" /> Auto-saving enabled
          </span>
          <Button variant="outline" className="font-semibold" onClick={() => handleSave(false)} disabled={isPending}>Save Draft</Button>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/20 font-bold" onClick={() => handleSave(true)} disabled={isPending}>
            Publish Now
          </Button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Column (Main Content) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 border-r border-border/50">
          <div className="max-w-4xl mx-auto space-y-10 pb-32">
            
            {/* Title Section */}
            <div className="space-y-4">
              <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Post Title *</Label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a power-title for your post..."
                className="w-full text-4xl sm:text-5xl font-extrabold bg-transparent border-none outline-none placeholder:text-muted-foreground/30 text-foreground"
              />
              <div className="flex gap-4 text-xs font-semibold text-muted-foreground border-b border-border/50 pb-6">
                <span className="bg-muted px-3 py-1.5 rounded-md">{readingTime} min read</span>
                <span className="bg-muted px-3 py-1.5 rounded-md">Words: {wordCount}</span>
              </div>
            </div>

            {/* Content Editor */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Main Content *</Label>
                <div className="flex bg-muted rounded-lg p-1 border">
                  <Button variant="secondary" size="sm" className="h-7 text-xs shadow-sm font-bold">Edit Content</Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs font-semibold">Live Preview</Button>
                </div>
              </div>
              <div className="bg-background rounded-xl border shadow-sm overflow-hidden prose-editor prose prose-lg dark:prose-invert max-w-none prose-p:font-serif">
                <JoditEditor
                  value={formData.content}
                  config={{
                    theme: theme === 'dark' ? 'dark' : 'default',
                    minHeight: 600,
                    placeholder: 'Start writing something extraordinary...',
                    buttons: [
                      'source', '|',
                      'bold', 'strikethrough', 'underline', 'italic', '|',
                      'ul', 'ol', '|',
                      'outdent', 'indent', '|',
                      'font', 'fontsize', 'brush', 'paragraph', '|',
                      'image', 'video', 'table', 'link', '|',
                      'align', 'undo', 'redo', '|',
                      'hr', 'eraser', 'copyformat', '|',
                      'symbol', 'fullsize', 'print', 'about'
                    ]
                  }}
                  onBlur={handleContentChange}
                />
              </div>
            </div>

            {/* Content Elements Card */}
            <Card className="border-border/50 shadow-sm rounded-xl overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4 border-b">
                <CardTitle className="text-sm font-bold flex items-center gap-2 text-foreground">
                  <Settings className="w-4 h-4 text-amber-500" /> Content Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-bold text-sm">Table of Contents</Label>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">Auto-generate from H2/H3 headings</p>
                    </div>
                    <Switch checked={formData.toc_enabled} onCheckedChange={(c) => handleSwitchChange("toc_enabled", c)} />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-sm">End-of-Post CTA</Label>
                    <Select value={formData.cta_type} onValueChange={(v) => handleSelectChange("cta_type", v)}>
                      <SelectTrigger className="font-medium">
                        <SelectValue placeholder="Select CTA Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="newsletter">Newsletter Signup</SelectItem>
                        <SelectItem value="games">Play Games</SelectItem>
                        <SelectItem value="contact">Contact Us</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rich Snippets (FAQ) */}
            <Card className="border-border/50 shadow-sm rounded-xl overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4 border-b flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-bold flex items-center gap-2 text-foreground">
                  <BrainCircuit className="w-4 h-4 text-emerald-500" /> Rich Snippets & Structured Data
                </CardTitle>
                <Badge variant="outline" className="bg-background font-semibold">Blog Posting</Badge>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="font-bold text-sm">FAQ Items ({formData.faq.length})</Label>
                  <Button variant="outline" size="sm" onClick={addFaq} className="h-8 gap-1 font-bold">
                    <Plus className="w-3 h-3" /> Add FAQ
                  </Button>
                </div>
                {formData.faq.length === 0 ? (
                  <div className="text-center py-8 border border-dashed rounded-xl text-sm font-medium text-muted-foreground">
                    No FAQs added yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {formData.faq.map((item: { question: string; answer: string }, i: number) => (
                      <div key={i} className="flex gap-4 p-5 border rounded-xl bg-muted/10 relative group hover:border-primary/50 transition-colors">
                        <div className="flex-1 space-y-3">
                          <Input placeholder="Question" value={item.question} onChange={(e) => updateFaq(i, "question", e.target.value)} className="font-semibold bg-background" />
                          <Textarea placeholder="Answer" value={item.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} className="h-20 text-sm bg-background font-medium" />
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeFaq(i)} className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 top-2 text-destructive hover:bg-destructive/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Right Column (SEO Sidebar) */}
        <div className="w-full lg:w-[450px] bg-muted/10 overflow-y-auto shrink-0 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.05)] z-20">
          
          {/* Focus Keyword Section */}
          <div className="p-6 border-b bg-background shadow-sm relative z-10">
            <Label className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider mb-3 block">Focus Keyword</Label>
            <Input 
              name="focusKeyword" 
              value={formData.focusKeyword} 
              onChange={handleChange} 
              placeholder="Enter target search keyword..." 
              className="bg-muted/50 border-border/50 shadow-inner font-semibold"
            />
          </div>

          {/* Analysis Tabs */}
          <Tabs defaultValue="seo" className="w-full">
            <TabsList className="w-full justify-between border-b rounded-none h-auto p-0 bg-background px-4 pt-2 shadow-sm relative z-0">
              <TabsTrigger value="seo" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-wider">SEO</TabsTrigger>
              <TabsTrigger value="aeo" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-wider">AEO</TabsTrigger>
              <TabsTrigger value="preview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-wider">Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="seo" className="p-6 m-0 space-y-6 bg-background border-b shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">Google/Bing SEO Grade</h4>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">Basic metadata missing, check recommendations.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                   <div className={`text-3xl font-black tracking-tighter ${seoAnalysis.score >= 80 ? 'text-emerald-500' : seoAnalysis.score >= 50 ? 'text-amber-500' : 'text-destructive'}`}>
                     {seoAnalysis.score}%
                   </div>
                   <span className={`text-[10px] uppercase font-black tracking-wider ${seoAnalysis.score >= 80 ? 'text-emerald-500' : seoAnalysis.score >= 50 ? 'text-amber-500' : 'text-destructive'}`}>Score</span>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                {seoAnalysis.checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border bg-muted/20">
                    {check.pass ? <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> : <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />}
                    <span className={`text-sm font-semibold ${check.pass ? 'text-foreground' : 'text-muted-foreground'}`}>{check.msg}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aeo" className="p-6 m-0 space-y-6 bg-background border-b shadow-sm">
              <div className="space-y-3 mb-8">
                <Label htmlFor="excerpt" className="font-extrabold text-sm text-foreground">Key Takeaways (AEO Block)</Label>
                <p className="text-xs text-muted-foreground font-medium mb-2">A 2-3 sentence summary designed specifically for AI models (ChatGPT, Gemini) and featured snippets.</p>
                <Textarea 
                  id="excerpt" 
                  name="excerpt" 
                  value={formData.excerpt} 
                  onChange={handleChange} 
                  placeholder="Summarize the core value of this post..." 
                  className="h-28 text-sm font-medium bg-muted/20" 
                />
              </div>
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm mb-3 text-foreground">AI Search Readiness</h4>
                {aeoAnalysis.checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border bg-muted/20">
                    {check.pass ? <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> : <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />}
                    <span className={`text-sm font-semibold ${check.pass ? 'text-foreground' : 'text-muted-foreground'}`}>{check.msg}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="preview" className="p-6 m-0 space-y-6 bg-background border-b shadow-sm">
              <div className="space-y-3">
                <Label className="font-extrabold text-sm text-foreground">Google Search Preview</Label>
                <div className="p-5 border rounded-xl bg-white dark:bg-[#202124] shadow-md">
                  <div className="text-xs text-[#202124] dark:text-[#bdc1c6] mb-1.5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-[10px]">Cp</span>
                    <div className="flex flex-col">
                      <span className="font-medium">CpsSpeedTest</span>
                      <span className="block truncate opacity-80 mt-0.5">https://www.cpsspeedtest.com › blog › {formData.slug || 'slug'}</span>
                    </div>
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.3] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer truncate mt-2">
                    {formData.seo_title || formData.title || 'Your SEO Title Appears Here'}
                  </h3>
                  <p className="text-[14px] mt-1.5 text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2 leading-[1.58]">
                    {formData.seo_description || formData.excerpt || 'Provide a meta description to see how it will appear in search results.'}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Accordion Settings */}
          <div className="p-5 space-y-4 pb-20">
            <Accordion type="multiple" defaultValue={["publishing"]} className="space-y-4">
              
              <AccordionItem value="publishing" className="border border-border/50 rounded-xl bg-background shadow-sm px-5 overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-foreground">
                    <Target className="w-4 h-4 text-amber-500" /> Publishing Settings
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 pt-2 pb-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">URL Slug *</Label>
                    <Input name="slug" value={formData.slug} onChange={handleChange} className="h-10 text-sm font-mono font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</Label>
                    <Select value={formData.category} onValueChange={(v) => handleSelectChange("category", v)}>
                      <SelectTrigger className="h-10 text-sm font-medium bg-muted/20">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c: any) => (
                          <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tags</Label>
                    <Input name="tags" value={formData.tags} onChange={handleChange} placeholder="SEO, Marketing, AI" className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-xl bg-muted/10">
                    <Label className="text-xs font-bold uppercase tracking-wider">Featured Post</Label>
                    <Switch />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Author Name</Label>
                    <Input name="author_name" value={formData.author_name} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cover" className="border border-border/50 rounded-xl bg-background shadow-sm px-5 overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-foreground">
                    <Eye className="w-4 h-4 text-blue-500" /> Cover & Media SEO
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 pt-2 pb-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Cover Image URL</Label>
                    <div className="flex gap-2 items-center">
                      <Input name="cover_image" value={formData.cover_image} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20 flex-1" />
                      <div className="relative flex-shrink-0">
                        <input 
                          type="file" 
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          onChange={handleImageUpload}
                          disabled={isUploading}
                        />
                        <Button type="button" variant="outline" className="gap-2 h-10 pointer-events-none" disabled={isUploading}>
                          {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                          Upload
                        </Button>
                      </div>
                    </div>
                    {formData.cover_image && (
                      <div className="mt-2 w-full aspect-video bg-muted rounded-md border flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={formData.cover_image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Image Alt Text</Label>
                    <Input name="cover_image_alt" value={formData.cover_image_alt} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Image Caption</Label>
                    <Input name="cover_image_caption" value={formData.cover_image_caption} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advanced" className="border border-border/50 rounded-xl bg-background shadow-sm px-5 overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-foreground">
                    <Search className="w-4 h-4 text-emerald-500" /> Advanced SEO Settings
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 pt-2 pb-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex justify-between">
                      SEO Title <span className="font-semibold opacity-70">{formData.seo_title.length}/60</span>
                    </Label>
                    <Input name="seo_title" value={formData.seo_title} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex justify-between">
                      Meta Description <span className="font-semibold opacity-70">{formData.seo_description.length}/160</span>
                    </Label>
                    <Textarea name="seo_description" value={formData.seo_description} onChange={handleChange} className="h-24 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Canonical URL</Label>
                    <Input name="canonical_url" value={formData.canonical_url} onChange={handleChange} className="h-10 text-sm font-mono font-medium placeholder:opacity-50 bg-muted/20" placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Search Indexing</Label>
                      <Select value={formData.indexing} onValueChange={(v) => handleSelectChange("indexing", v)}>
                        <SelectTrigger className="h-10 text-sm font-medium bg-muted/20"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="index">Index</SelectItem>
                          <SelectItem value="noindex">Noindex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Link Following</Label>
                      <Select value={formData.follow} onValueChange={(v) => handleSelectChange("follow", v)}>
                        <SelectTrigger className="h-10 text-sm font-medium bg-muted/20"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="follow">Follow</SelectItem>
                          <SelectItem value="nofollow">Nofollow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 mt-4">
                    <Label className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-wider block mb-1">Robots Meta Preview</Label>
                    <code className="text-xs font-semibold text-amber-700 dark:text-amber-400 break-all">
                      {`<meta name="robots" content="${formData.indexing}, ${formData.follow}" />`}
                    </code>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social" className="border border-border/50 rounded-xl bg-background shadow-sm px-5 overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-foreground">
                    <Share2 className="w-4 h-4 text-purple-500" /> Social Sharing (OG)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 pt-2 pb-5">
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-2">
                    <p className="text-xs font-medium text-purple-700 dark:text-purple-400 text-center">
                      Optimizing your post increases the chance of ranking on the first page of Google.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">OG Title</Label>
                    <Input name="og_title" value={formData.og_title} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">OG Description</Label>
                    <Textarea name="og_description" value={formData.og_description} onChange={handleChange} className="h-20 text-sm font-medium bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">OG Image URL</Label>
                    <Input name="og_image" value={formData.og_image} onChange={handleChange} className="h-10 text-sm font-medium bg-muted/20" />
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
