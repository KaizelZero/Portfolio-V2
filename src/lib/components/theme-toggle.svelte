<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import LucideMoon from '~icons/lucide/moon';
  import LucideSun from '~icons/lucide/sun';

  let isDark = false;

  function handleToggle() {
    isDark = !isDark;
    toggleMode();
  }
</script>

<button
  class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50"
  aria-label="Toggle theme between light and dark"
  on:click={handleToggle}
>
  <div class="relative h-5 w-5">
    <LucideMoon
      class="absolute h-full w-full transition-all duration-300 {isDark
        ? '-rotate-90 scale-0 opacity-0'
        : 'rotate-0 scale-100 opacity-100'}"
    />
    <LucideSun
      class="absolute h-full w-full transition-all duration-300 {isDark
        ? 'rotate-0 scale-100 opacity-100'
        : 'rotate-90 scale-0 opacity-0'}"
    />
  </div>
  <span class="sr-only">Toggle theme</span>
</button>
