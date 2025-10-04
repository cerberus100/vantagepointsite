import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "case-studies" | "resources";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  specialty: string;
  deviceClass: string;
  geography: string;
  tags: string[];
  challenge: string;
  approach: string;
  outcomes: Array<{
    metric: string;
    value: string;
    qualifier?: string;
  }>;
  quote: {
    text: string;
    author: string;
    role: string;
    org: string;
  };
  heroImage?: string;
  downloadablePDF?: string;
  publishedAt: string;
  content: string;
}

export interface Resource {
  slug: string;
  title: string;
  type: "guide" | "webinar" | "brief";
  tags: string[];
  summary: string;
  gated: boolean;
  heroImage?: string;
  publishedAt: string;
  readingTime?: string;
  content: string;
}

export async function getContentBySlug<T>(
  type: ContentType,
  slug: string
): Promise<T & { content: string }> {
  const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug,
    content,
    readingTime: readingTime(content).text,
  } as unknown as T & { content: string };
}

export async function getAllContent<T>(type: ContentType): Promise<T[]> {
  const contentDir = path.join(contentDirectory, type);
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const content = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        slug,
        content,
        readingTime: readingTime(content).text,
      } as T;
    });

  return content.sort((a: any, b: any) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
}
