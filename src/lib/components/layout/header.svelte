<script lang="ts">
  import { page } from '$app/state';
  import { ThemeToggle } from '$lib/components';
  import { menuLinks } from '$lib/config/site-config';
</script>

<header
  class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start"
  style="view-transition-name: header;"
>
  <nav
    class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
    aria-label="global"
  >
    <a class="flex-none text-xl font-semibold" href="/" aria-label="resume Home">resume</a>

    <div class="flex flex-row items-center justify-center gap-x-3 sm:gap-x-7">
      {#each menuLinks as { title, path }}
        <a
          href={path}
          class="relative flex-none text-[1.05rem] font-medium hover:text-foreground/75"
          aria-label="Nav Menu Item {title}"
          aria-current={page.url.pathname === path ? 'page' : undefined}
        >
          {title}
          {#if page.url.pathname === path}
            <span
              class="absolute -bottom-1 left-0 h-[2px] w-full bg-foreground"
              style={page.url.pathname === path ? 'view-transition-name: active-page;' : ''}
            ></span>
          {/if}
        </a>
      {/each}
      <ThemeToggle />
    </div>
  </nav>
</header>
