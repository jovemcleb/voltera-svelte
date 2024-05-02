import { getMarkdownContent } from '$lib/service/getMarkdownContent.js';

export async function load({fetch,url}) {
  const s = url.searchParams.get('s');

  const markdownUrl = 'https://raw.githubusercontent.com/jovemcleb/voltera-svelte/main/static/tipografia.md';
  
  const markdownContent = await getMarkdownContent(fetch,markdownUrl);

  return {
      markdownContent,
      s
  }
}