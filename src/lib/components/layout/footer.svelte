<script lang="ts">
  import { socialLinks } from '$lib/config/site-config';
  import { Image } from '@unpic/svelte';
</script>

<footer class="mx-auto mt-24 w-full" style="view-transition-name: footer;">
  <div class="border-t border-border pt-5">
    <div
      class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"
    >
      <div class="flex gap-x-4 text-sm">
        <p class="">© {new Date().getFullYear()} Jimmy Truong</p>
      </div>

      <div class="flex items-center justify-between">
        <!-- Social Brands -->
        <div class="flex items-center gap-x-4">
          {#each socialLinks as { title, path, icon_light, icon_dark }}
            <a
              class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"
              href={path}
              target="_blank"
              aria-label={title}
            >
              <Image src={icon_dark} alt={title} class="h-6 w-6 dark:hidden" />
              <Image src={icon_light} alt={title} class="hidden h-6 w-6 dark:block" />
            </a>
          {/each}
        </div>
        <!-- End Social Brands -->
      </div>
    </div>
  </div>
</footer>
