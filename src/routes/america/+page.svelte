<script lang="ts">
  import { convertMarkdownToHtml } from "$lib/utils/convertMarkdownToHtml";
  import { onMount } from "svelte";
  import type { IData } from "../../types/data";

  export let data: IData;
  const markdownContent = data.markdownContent;
  let htmlSafe = "";

  onMount(async () => {
    try {
      htmlSafe = await convertMarkdownToHtml(markdownContent);
    } catch (error) {
      console.error("Erro ao converter Markdown para HTML:", error);
    }
  });
</script>

<div class="content">{@html htmlSafe}</div>
