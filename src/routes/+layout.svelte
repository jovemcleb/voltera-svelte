<script lang="ts">
  import "../styles/global-style.css";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<main class="main">
  <slot />
</main>

<style>
  .main {
    margin-top: 6rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 769px) {
    .main {
      padding: 1rem 1rem;
    }
  }
</style>
