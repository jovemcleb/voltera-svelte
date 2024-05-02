<script lang="ts">
  import "../styles/global-style.css";
  import Header from "$lib/components/Header.svelte";
</script>

<main>
  <Header />
  <slot />
</main>
