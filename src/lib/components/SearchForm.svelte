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

<div class="form-container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <div>
      <label class="label-input" for="search">Buscar palavra no texto:</label>
      <input
        class="input-text"
        bind:value={$searchWord}
        id="search"
        placeholder="Digite sua busca"
      />
    </div>
    <button class="button" type="submit">Buscar</button>
  </form>
  {#if searchResult}
    <span class="span-result">{searchResult}</span>
  {/if}
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    border: 1px solid #afe32e;
    border-radius: 0.5rem;
    max-width: 30rem;
  }

  .form {
    display: flex;
    align-items: last baseline;
    gap: 0.75rem;
    justify-content: center;
    margin: 0 auto;
  }

  .form div {
    display: flex;
    flex-direction: column;
  }

  .label-input {
    font-size: 0.75rem;
    color: #296c03;
  }

  .input-text {
    margin: 0.25rem 0;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    width: 22rem;
    font-size: 1rem;
    border: none;
  }

  .button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #afe32e;
  }
</style>
