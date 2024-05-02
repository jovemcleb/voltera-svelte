export async function load({fetch, url}) {
  const s = url.searchParams.get('s');

  const markdownUrl = 'https://raw.githubusercontent.com/jovemcleb/voltera-svelte/main/static/markdown.md';
  
  const response = await fetch(markdownUrl);
  const markdownContent = await response.text();


  return {
      markdownContent,
      s
  }
}