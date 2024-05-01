export async function load({fetch}) {
  const markdownUrl = 'https://raw.githubusercontent.com/jovemcleb/voltera-svelte/main/static/markdown.md?token=GHSAT0AAAAAACRF2PEJWK7J47QIBMC54E4CZRS2IDQ';

  const response = await fetch(markdownUrl);
  const markdownContent = await response.text();


  return {
      markdownContent
  }
}