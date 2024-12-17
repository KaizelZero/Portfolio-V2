<script lang="ts">
  import { ThemeToggle } from '$lib/components';
  import { menuLinks } from '$lib/config/site-config';
</script>

<header class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start">
  <nav
    class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
    aria-label="global"
  >
    <a class="flex-none text-xl font-semibold" href="/" aria-label="resume Home">resume</a>

    <div class="flex flex-row items-center justify-center gap-x-3 sm:gap-x-7">
      {#each menuLinks as { title, path }}
        <a
          href={path}
          class="flex-none text-[1.05rem] font-medium hover:text-foreground/75"
          aria-label="Nav Menu Item {title}"
        >
          {title}
        </a>
      {/each}
      <ThemeToggle />
    </div>
  </nav>
</header>
