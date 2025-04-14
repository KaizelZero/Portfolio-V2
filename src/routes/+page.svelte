<script lang="ts">
  import { About, Education, Experience, Hero, Skills } from '$lib/components/sections';
</script>

<svelte:head>
  <!-- jimmy truong (dot) Home-->
  <title>Jimmy Truong • Home</title>
  <meta name="description" content="Jimmy Truong's personal portfolio and resume." />
</svelte:head>

<div class="flex w-full flex-col gap-y-10">
  <Hero />
  <About />
  <Experience />
  <Education />
  <!-- <Projects /> -->
  <!-- <Certifications /> -->
  <Skills />
</div>
