import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    
    // Attempt to parse extension from file name or fallback to file type
    let ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || ext === file.name.toLowerCase()) {
      ext = file.type.split('/')[1] || 'png';
    }
    
    const originalName = file.name.replace(/[^a-zA-Z0-9-]/g, '_').replace(`_${ext}`, '');
    const filename = `${uniqueSuffix}-${originalName}.${ext}`;
    
    // Ensure uploads directory exists
    const uploadsDir = join(process.cwd(), 'public/uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const path = join(uploadsDir, filename);
    await writeFile(path, buffer);

    const fileUrl = `/api/uploads/${filename}`;
    
    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error: any) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, error: "Failed to upload file." }, { status: 500 });
  }
}
