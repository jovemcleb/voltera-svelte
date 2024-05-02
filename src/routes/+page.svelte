<script>
  import Card from "$lib/components/Card.svelte";

  const posts = [
    {
      title: "Guia de Markdown para Iniciantes",
      descriptionImage: "Logo do markdown",
      image:
        "https://www.markdownguide.org/assets/images/markdown-guide-og.jpg",
      href: "/markdown",
    },
    {
      title: "Descobrimento da América",
      descriptionImage: "Carvelas no mar",
      image:
        "https://static.escolakids.uol.com.br/conteudo_legenda/30e731c898d13f2931f209491cb7a7e6.jpg",
      href: "/america",
    },
    {
      title: "Tipografia: A Arte da Impressão de Palavras",
      descriptionImage: "Palavra tipografia em destaque",
      image:
        "https://chiefofdesign.com.br/wp-content/uploads/2014/05/tipografia.png",
      href: "/tipografia",
    },
  ];
</script>

<section class="content">
  <h1 class="home-title">Posts do momento</h1>

  <div class="cards-container">
    {#each posts as { descriptionImage, href, image, title }}
      <a {href}>
        <Card {descriptionImage} {image} {title} />
      </a>
    {/each}
  </div>
</section>

<style>
  .home-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .cards-container a {
    text-decoration: none;
    color: inherit;
  }
</style>
