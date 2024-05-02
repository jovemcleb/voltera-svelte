<script lang="ts">
  import { onMount } from "svelte";
  import { convertMarkdownToHtml } from "$lib/utils/convertMarkdownToHtml";
  import type { IData } from "../../types/data";
  import SearchForm from "$lib/components/SearchForm.svelte";

  export let data: IData;
  const { markdownContent, s = "" } = data;
  let htmlSafe = "";

  onMount(async () => {
    try {
      htmlSafe = await convertMarkdownToHtml(markdownContent);
    } catch (error) {
      console.error("Erro ao converter Markdown para HTML:", error);
    }
  });
</script>

<div class="content">
  <SearchForm {markdownContent} {s} />
  {@html htmlSafe}
</div>
