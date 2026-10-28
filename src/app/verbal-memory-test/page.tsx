import { GameSEO } from "@/components/game-seo";
import { VerbalMemoryTest } from "@/components/verbal-memory-test";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  BookOpen, Brain, Activity, Sparkles, CheckCircle2,
  HelpCircle, Trophy, TrendingUp, Cpu, Award, ArrowRight,
  ShieldCheck, MessageSquare
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verbal Memory Test – Continuous Word Recognition Benchmark | CpsSpeedTest",
  description:
    "Test your vocabulary recall and verbal working memory. Decide whether each continuous word is NEW or SEEN, overcome proactive interference, and benchmark your lexical memory capacity.",
  keywords: [
    "verbal memory test",
    "word memory test",
    "continuous recognition task",
    "lexical recall",
    "short term verbal memory",
    "memory recognition test",
    "proactive interference test",
    "word recognition memory",
  ],
  alternates: {
    canonical: "https://www.cpsspeedtest.com/verbal-memory-test",
  },
  openGraph: {
    title: "Verbal Memory Test – How Many Words Can Your Memory Track?",
    description: "Benchmark your continuous verbal recognition memory against global psychometric standards. Test lexical recall and proactive interference resistance.",
    url: "https://www.cpsspeedtest.com/verbal-memory-test",
    type: "website",
  },
};

const verbalHowToSteps = [
  {
    name: "Read the displayed word carefully",
    text: "A single English word appears in the center of the screen. Take a brief moment to absorb its meaning, spelling, and phonetic sound.",
  },
  {
    name: "Decide if the word has appeared in this session",
    text: "Compare the word against your active mental catalog of terms previously shown during the current test session.",
  },
  {
    name: "Click 'SEEN' if the word has appeared previously",
    text: "If you recognize the word from an earlier round in this test run, click the 'SEEN' button to record a correct recognition hit.",
  },
  {
    name: "Click 'NEW' if this is its first appearance",
    text: "If this is the very first time the word is appearing in the current session, click 'NEW' to add it to your mental catalog.",
  },
  {
    name: "Manage your 3 allocated strikes",
    text: "You have 3 lives (strikes). Calling a new word 'SEEN' or a repeated word 'NEW' incurs one strike. The test concludes upon the 3rd mistake.",
  },
  {
    name: "Review your final word recall score",
    text: "Your final score is the total number of correct decisions made before accumulating 3 strikes. Benchmark your result against global percentiles.",
  },
];

const verbalMemoryFaqs = [
  {
    question: "How does the Verbal Memory Test work scientifically?",
    answer:
      "The Verbal Memory Test is a continuous recognition memory paradigm (CRMT). You are shown an ongoing stream of words, one by one. For each word, you must decide whether it is 'NEW' (first encounter) or 'SEEN' (previously presented). Unlike static list tests, your mental catalog of seen words expands continuously, measuring lexical encoding fidelity and recognition thresholds under progressive cognitive load.",
  },
  {
    question: "What is an average human score on the Verbal Memory Test?",
    answer:
      "The average healthy adult score is roughly 35 to 50 words. Scores between 55 and 75 indicate superior verbal recognition and strong semantic encoding, while scores above 90 place you in the top 1% of verbal working memory capacity worldwide.",
  },
  {
    question: "Why does the test get progressively more difficult as the score climbs?",
    answer:
      "As your mental inventory of seen words grows from 10 to 50+, your brain experiences 'Proactive Interference'—a cognitive phenomenon where previously encoded memories blur with newly presented stimuli. The feeling of general familiarity (déjà vu) tricks you into thinking a new word was already seen, or makes an earlier word feel unfamiliar.",
  },
  {
    question: "What mnemonic strategies produce the highest verbal memory scores?",
    answer:
      "Semantic story-chaining is the most potent technique. Rather than trying to passively memorize word lists by repetition, immediately integrate each new word into an evolving mental narrative or associate it with an absurd, high-emotion sensory image. Semantic depth activates the left inferior prefrontal cortex, dramatically boosting recognition accuracy.",
  },
  {
    question: "What is the difference between Verbal Memory (Recognition) and Free Recall?",
    answer:
      "Recognition memory (tested here) provides the external stimulus and asks your brain to evaluate familiarity, which relies heavily on the perirhinal cortex. Free recall (such as our Word Memory Test) requires you to retrieve words from scratch with zero prompts, which demands significantly greater hippocampal and executive retrieval effort.",
  },
  {
    question: "Does reading habits and vocabulary size influence verbal memory scores?",
    answer:
      "Yes. Avid readers possess richer semantic networks and faster lexical access in the left temporal lobe. A larger vocabulary provides more distinct contextual anchors, making it easier to differentiate closely related terms and resist false-alarm familiarity traps.",
  },
  {
    question: "How can I tell if my working memory is fatigued during the test?",
    answer:
      "Working memory fatigue manifests as hesitation and second-guessing. When your prefrontal cortex runs low on glucose and attentional focus, words start to trigger vague 'warmth' signals without specific contextual recall, leading to sudden consecutive strikes.",
  },
];

export default function VerbalMemoryTestPage() {
  return (
    <>
      <GameSEO
        name="Verbal Memory Test – Continuous Recognition Benchmark"
        description="Benchmark your verbal working memory and continuous word recognition capacity against global psychometric standards."
        url="https://www.cpsspeedtest.com/verbal-memory-test"
        faqs={verbalMemoryFaqs}
        howToSteps={verbalHowToSteps}
        category="BrainGame"
        lastUpdated="October 2026"
        benefits="Measure continuous recognition working memory, build resistance to proactive cognitive interference, strengthen semantic encoding pathways, and expand vocabulary recall agility."
        speakableSelector=".speakable-content"
      />

      <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-4 space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Continuous Recognition Memory Paradigm (CRMT)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Verbal Memory Test
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A stream of words appears one at a time. Decide whether each word is NEW or SEEN. Manage 3 strikes, overcome proactive interference, and benchmark your lexical memory.
          </p>
        </header>

        {/* Interactive Verbal Memory Component */}
        <VerbalMemoryTest />

        {/* Section 1: What is Verbal Memory? (AEO Definition) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            What Is the Verbal Memory Test?
          </h2>
          <div className="p-4 rounded-xl border border-border bg-card/60 text-card-foreground text-sm sm:text-base leading-relaxed space-y-3">
            <p className="speakable-content">
              The <strong>Verbal Memory Test</strong> is a standardized implementation of the <strong>Continuous Recognition Task (CRT)</strong>, designed by cognitive neuropsychologists to measure verbal working memory and long-term lexical storage. Unlike list-based memorization, it challenges you to make rapid, continuous binary decisions—differentiating newly introduced vocabulary from previously encountered terms while resisting cognitive interference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Task Paradigm</span>
                <span className="text-lg font-black text-primary">Continuous Recognition</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Binary NEW vs SEEN decisions</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Average Adult Score</span>
                <span className="text-lg font-black text-amber-500">35 – 50 Words</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Healthy un-trained baseline</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <span className="text-xs text-muted-foreground uppercase font-semibold block">Top 1% Elite Tier</span>
                <span className="text-lg font-black text-emerald-500">90+ Words</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Semantic story-chain encoding</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Play (HowTo Steps) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            How to Master the Verbal Memory Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {verbalHowToSteps.map((step, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-border/80 bg-card/40 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {step.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Verbal Memory Matters */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-500" />
            Why Verbal Memory Matters: Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-primary">
                  <MessageSquare className="w-4 h-4" />
                  Conversational Fluency &amp; Name Recall
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Remembering client names, personal anecdotes, conversation topics, and discussion points during high-stakes business meetings or social networking events relies heavily on robust continuous recognition memory.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-500">
                  <BookOpen className="w-4 h-4" />
                  Language Learning &amp; Vocabulary Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Acquiring foreign languages requires evaluating whether a newly heard phrase is familiar or novel. Training verbal recognition accelerates the transfer of new vocabulary from short-term phonological buffers into permanent long-term storage.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-500">
                  <Cpu className="w-4 h-4" />
                  Academic Reading &amp; Research Synthesis
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Synthesizing dense medical textbooks, legal statutes, or technical documentation requires tracking which scientific definitions and acronyms have already been introduced across multiple chapters without constant index flipping.
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  Resistance to Cognitive Interference
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In information-dense workplaces, mental clutter can cause tasks to blur together. Verbal memory training strengthens prefrontal conflict resolution, allowing you to clearly delineate between completed tasks and new incoming requests.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Deep Dive — Signal Detection Theory & Proactive Interference */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Signal Detection Theory in Continuous Recognition
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/60 text-foreground border-b border-border font-semibold">
                <tr>
                  <th className="p-3">Decision Type</th>
                  <th className="p-3">Actual Stimulus State</th>
                  <th className="p-3">User Action</th>
                  <th className="p-3">Cognitive Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="p-3 font-medium text-foreground">Hit (Correct Recognition)</td>
                  <td className="p-3">Word previously seen</td>
                  <td className="p-3 text-emerald-400 font-semibold">Clicked &quot;SEEN&quot;</td>
                  <td className="p-3">Successful familiarity match in perirhinal cortex</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Correct Rejection</td>
                  <td className="p-3">Brand new word</td>
                  <td className="p-3 text-emerald-400 font-semibold">Clicked &quot;NEW&quot;</td>
                  <td className="p-3">Absence of familiarity signal; novel encoding triggered</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">False Alarm (Strike)</td>
                  <td className="p-3">Brand new word</td>
                  <td className="p-3 text-rose-400 font-semibold">Clicked &quot;SEEN&quot;</td>
                  <td className="p-3">Semantic lure; word shares meaning with an earlier word</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Miss (Strike)</td>
                  <td className="p-3">Word previously seen</td>
                  <td className="p-3 text-rose-400 font-semibold">Clicked &quot;NEW&quot;</td>
                  <td className="p-3">Memory trace decay; weak initial semantic encoding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Score Benchmarks */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Verbal Memory Performance Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Developing Recall</div>
              <div className="text-2xl font-black text-foreground">10 – 24 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Below average retention. Vulnerable to fast memory decay or distracted passive reading without semantic association.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Healthy Adult</div>
              <div className="text-2xl font-black text-primary">25 – 49 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard global population median. Demonstrates solid lexical recognition before proactive interference accumulates.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Superior Memory</div>
              <div className="text-2xl font-black text-amber-500">50 – 79 Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 10% cognitive performance. Actively anchors terms into mental categories and visualizes vivid mental pictures.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card/40 space-y-2">
              <div className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Lexical Master</div>
              <div className="text-2xl font-black text-rose-500">80 – 120+ Words</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Top 1% elite memory tier. Mnemonic narrative chaining with near-total immunity to proactive interference.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Actionable Strategy Tips */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Proven Techniques to Increase Your Verbal Memory Score
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <strong className="text-foreground block">Build a Running Mental Movie (Story Chaining)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Whenever a new word appears, mentally add it to an ongoing, absurd narrative. If the words are &quot;DOG&quot;, &quot;GUITAR&quot;, &quot;MOUNTAIN&quot;, imagine a dog shredding a rock solo on a mountain peak.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <strong className="text-foreground block">Associate Words with Physical Locations</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Place each new word in a distinct room of your childhood home. Physical spatial anchors in the hippocampus drastically increase recognition confidence.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <strong className="text-foreground block">Distinguish Between Semantic &amp; Episodic Memory</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Ask yourself: &quot;Did I see this word *in this specific browser window* 30 seconds ago, or do I just know this word exists in English?&quot; This mental check eliminates false-alarm strikes.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <div>
                  <strong className="text-foreground block">Take Your Time (No Timer Between Words)</strong>
                  <span className="text-muted-foreground leading-relaxed">
                    Unlike speed tests, there is no time limit per word. Pause 2 to 3 seconds on difficult words to allow deep hippocampal retrieval before clicking.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {verbalMemoryFaqs.map((faq, index) => (
              <Card key={index} className="border-border/70 bg-card/40">
                <CardHeader className="py-3.5 px-4 sm:px-5">
                  <CardTitle className="text-sm sm:text-base font-semibold text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 pb-4 px-4 sm:px-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cross-linking Related Brain Games */}
        <section className="pt-4 border-t border-border">
          <h2 className="text-base font-bold text-foreground mb-3">Explore Related Cognitive Benchmarks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/word-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Word Free Recall</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/chimp-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Chimp Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/number-memory-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Number Memory</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/stroop-test"
              className="p-3 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors group flex items-center justify-between"
            >
              <span className="text-xs font-medium text-foreground group-hover:text-primary">Stroop Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
