<script>
  import Logo from "./Logo.svelte";

  const navLinks = [
    { href: "/markdown", label: "Markdown" },
    { href: "/america", label: "América" },
    { href: "/tipografia", label: "Tipografia" },
  ];
</script>

<header class="header">
  <Logo />
  <nav>
    <ul>
      {#each navLinks as { href, label }}
        <li>
          <a class="link" {href}>{label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #48a715;
    padding: 1rem 2rem;
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 0 1rem;
  }

  .link {
    color: white;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
