<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import LucideMoon from '~icons/lucide/moon';
  import LucideSun from '~icons/lucide/sun';
</script>

<button
  class="inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  aria-label="Toggle theme between light and dark"
  onclick={toggleMode}
>
  <LucideMoon
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <LucideSun
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</button>
