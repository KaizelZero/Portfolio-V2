<script lang="ts">
  import { TailwindIndicator, ThemeToggle } from '$lib/components';
  import { Footer, Header } from '$lib/components/layout';
  import { ModeWatcher } from 'mode-watcher';
  import '../app.css';

  let { children } = $props();
</script>

<ModeWatcher />

<main class="flex justify-center bg-background">
  <div
    class="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10"
  >
    <Header />
    {@render children()}
    <Footer />
  </div>
  <TailwindIndicator />
</main>
