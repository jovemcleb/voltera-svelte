<script>
  import Logo from "./Logo.svelte";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/markdown", label: "Markdown" },
    { href: "/america", label: "América" },
    { href: "/tipografia", label: "Tipografia" },
  ];
</script>

<header class="header">
  <div class="content">
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
  </div>
</header>

<style>
  .header {
    background-color: #48a715;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
