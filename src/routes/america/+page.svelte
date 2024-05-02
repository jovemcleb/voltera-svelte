<script>
  import { convertMarkdownToHtml } from "$lib/utils/convertMarkdownToHtml";
  import { onMount } from "svelte";

  export let data;
  const markdownContent = data.markdownContent;
  let htmlSafe = "";

  onMount(async () => {
    htmlSafe = await convertMarkdownToHtml(markdownContent);
  });
</script>

<div class="content">{@html htmlSafe}</div>
