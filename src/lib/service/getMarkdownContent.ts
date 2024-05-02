export async function getMarkdownContent(fetch:WindowOrWorkerGlobalScope['fetch'],url: string) {
  const response = await fetch(url);
  const markdownContent = await response.text();

  return markdownContent;
}