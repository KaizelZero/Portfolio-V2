<script lang="ts">
  import { base } from '$app/paths';
  import { ThemeToggle } from '$lib/components';
  import { menuLinks } from '$lib/config/site-config';
</script>

<header class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start">
  <nav
    class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
    aria-label="global"
  >
    <a class="flex-none text-xl font-semibold" href="{base}/" aria-label="Brand">resume</a>

    <div class="flex flex-row items-center justify-center gap-x-3 sm:gap-x-7">
      {#each menuLinks as { title, path }}
        <a
          href={base + path}
          class="flex-none text-[1.05rem] font-medium hover:text-foreground/75"
          aria-label="Nav Menu Item"
        >
          {title}
        </a>
      {/each}
      <ThemeToggle />
    </div>
  </nav>
</header>
