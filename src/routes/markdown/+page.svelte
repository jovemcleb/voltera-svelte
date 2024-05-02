<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  interface IData {
    markdownContent: string;
    s?: string;
  }

  export let data: IData;
  const markdownContent = data.markdownContent;
  let s = data.s;

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

<div>
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
  <h1>Introdução</h1>
  <p>
    Bem-vindo ao incrível mundo da criação de textos em Markdown! Este formato
    leve e fácil de usar permite que você formate documentos de maneira simples
    e eficaz.
  </p>

  <h2>O que é Markdown?</h2>
  <p>
    Markdown é uma linguagem de marcação que foi projetada com simplicidade em
    mente. Desenvolvida por John Gruber e Aaron Swartz, ela permite que você
    escreva usando um formato de texto simples, que é então convertido para HTML
    de forma fácil e rápida.
  </p>

  <h2>Benefícios do Markdown</h2>
</div>

<h2>Benefícios do Markdown</h2>
<ol>
  <li>
    <p>
      <strong>Simplicidade</strong>: Markdown é fácil de aprender e usar. Não há
      necessidade de códigos complicados para formatar seu texto.
    </p>
  </li>
  <li>
    <p>
      <strong>Portabilidade</strong>: Como o Markdown é apenas texto, seus
      documentos podem ser lidos em qualquer lugar, em qualquer editor de texto.
    </p>
  </li>
  <li>
    <p>
      <strong>Versatilidade</strong>: Você pode usar Markdown para criar desde
      documentos simples até páginas web completas.
    </p>
  </li>
</ol>

<h1>Como Usar Markdown</h1>

<h2>Títulos</h2>
<p>
  Os títulos são criados adicionando um ou mais sinais de hashtag (#) antes do
  texto do título. O número de hashtags indica o nível do título.
</p>
<p>Exemplo:</p>
<pre>
  <code>
    # Título

    ## Subtítulo

    ### Sub-subtítulo
  </code>
</pre>
<h2 id="listas">Listas</h2>
<p>Listas ordenadas e não ordenadas são facilmente criadas.</p>

<h3>Lista Não Ordenada</h3>
<ul>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Subitem 2.1</li>
      <li>Subitem 2.2</li>
    </ul>
  </li>
</ul>

<h3>Lista Ordenada</h3>
<ol>
  <li>Primeiro item</li>
  <li>
    Segundo item
    <ol>
      <li>Subitem 2.1</li>
      <li>Subitem 2.2</li>
    </ol>
  </li>
</ol>
<h2>Ênfase</h2>
<p>
  Você pode adicionar ênfase ao texto usando asteriscos (*) ou underscores (_).
</p>
<p>Exemplo:</p>
<pre><code
    ><span>*Texto em itálico*</span>

*<span>*Texto em negrito*</span>*

**<span class="hljs-strong">*Texto em negrito e itálico*</span>*<span
      class="hljs-strong">*</span
    >
</code></pre>
<h1 id="conclus-o">Conclusão</h1>
<p>
  Espero que este exemplo tenha ajudado a entender como criar documentos usando
  Markdown. Aproveite a simplicidade e eficácia desta linguagem de marcação em
  seus projetos!
</p>
