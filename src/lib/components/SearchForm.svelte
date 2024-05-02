<script lang="ts">
  import { goto } from "$app/navigation";
  import { countOccurrences } from "$lib/utils/countOccurrences";
  import { writable } from "svelte/store";

  export let markdownContent: string;
  export let s: string;

  const searchWord = writable(s || "");

  let searchResult: null | string;

  async function handleSubmit() {
    const occurrences = countOccurrences(markdownContent, $searchWord);
    searchResult =
      $searchWord && occurrences > 0
        ? `A palavra "${$searchWord}" aparece ${occurrences} vezes.`
        : null;
    if (typeof window !== "undefined") {
      goto(`?s=${encodeURIComponent($searchWord)}`);
    }
    searchWord.set("");
  }

  $: {
    if (s) {
      searchWord.set(s);
      handleSubmit();
    }
  }
</script>

<form
  on:submit={(e) => {
    e.preventDefault();
    handleSubmit();
  }}
>
  <input bind:value={$searchWord} placeholder="Digite sua busca" />
  <button type="submit">Buscar</button>
</form>
{#if searchResult}
  <span>{searchResult}</span>
{/if}
