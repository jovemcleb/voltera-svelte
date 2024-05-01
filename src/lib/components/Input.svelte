<script lang="ts">
  export let value = "";
  export let placeholder = "";

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<input
  type="
text"
  {placeholder}
  bind:value
  on:input={handleChange}
/>
