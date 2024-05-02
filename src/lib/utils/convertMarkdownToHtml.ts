  import { marked } from "marked";
  import DOMPurify from "dompurify";

export async function convertMarkdownToHtml(markdownContent: string) {
  const markdownToHtml = await marked(markdownContent);
  return  DOMPurify.sanitize(markdownToHtml);
}