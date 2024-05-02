<script lang="ts">
  import { onMount } from "svelte";
  import Input from "$lib/components/Input.svelte";
  import { convertMarkdownToHtml } from "$lib/utils/convertMarkdownToHtml";

  interface IData {
    markdownContent: string;
    s?: string;
  }

  export let data: IData;
  const markdownContent = data.markdownContent;
  let s = data.s;
  let htmlSafe = "";

  onMount(async () => {
    htmlSafe = await convertMarkdownToHtml(markdownContent);
  });

  let searchWord = "";
  let occurrences = 0;
  let searchResult: null | string = null;

  function countOccurrences(word: string): number {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    return (markdownContent.match(regex) || []).length;
  }

  function handleSubmit() {
    occurrences = countOccurrences(searchWord);
    searchResult =
      searchWord && occurrences > 0
        ? `A palavra "${searchWord}" aparece ${occurrences} vezes.`
        : null;
    if (typeof window !== "undefined") {
      history.pushState({}, "", `?s=${encodeURIComponent(searchWord)}`);
    }
    searchWord = "";
  }

  $: {
    if (s) {
      searchWord = s;
      handleSubmit();
    }
  }
</script>

<div class="content">
  <form
    on:submit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <Input bind:value={searchWord} placeholder="Digite sua busca" />
    <button type="submit">Buscar</button>
  </form>
  {#if searchResult}
    <span>{searchResult}</span>
  {/if}
</div>

<div class="content">{@html htmlSafe}</div>
