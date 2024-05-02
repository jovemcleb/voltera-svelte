<script>
  import Logo from "./Logo.svelte";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/markdown", label: "Markdown" },
    { href: "/america", label: "América" },
    { href: "/tipografia", label: "Tipografia" },
  ];

  let isPopoverOpen = false;

  function togglePopover() {
    isPopoverOpen = !isPopoverOpen;
  }
</script>

<header class="header">
  <div class="content">
    <a href="/">
      <Logo />
    </a>
    <nav class:open={isPopoverOpen}>
      <ul>
        {#each navLinks as { href, label }}
          <li>
            <a class="link" {href}>{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <button class="popover-trigger" on:click={togglePopover}>
      <span class="hamburger">
        {#if isPopoverOpen}
          ✖
        {:else}
          ☰
        {/if}
      </span>
    </button>
  </div>

  {#if isPopoverOpen}
    <div class="popover open">
      <ul>
        {#each navLinks as { href, label }}
          <li>
            <a class="link" {href} on:click={togglePopover}>{label}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
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

  .popover {
    position: absolute;
    top: 6rem;
    right: 0;
    width: 100%;
    background-color: #f0f2f5;
    padding: 0.5rem;
    display: none;
    z-index: 999;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .popover.open {
    display: block;
  }

  .popover ul {
    list-style: none;
    padding: 0 1rem;
  }

  .popover li {
    margin: 0.75rem 0;
    text-align: center;
  }

  .popover .link {
    color: black;
    font-size: 1.4rem;
    text-decoration: none;
  }

  .popover .link:hover {
    text-decoration: underline;
  }

  .popover-trigger {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
  }

  .hamburger {
    font-size: 2rem;
    color: white;
  }

  @media screen and (max-width: 769px) {
    .content {
      padding: 1rem;
    }

    .content nav {
      display: none;
    }

    .popover-trigger {
      display: block;
    }
  }
</style>
