<script lang="ts">
  import { formatDate } from '$lib/utils';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto max-w-3xl">
  <hgroup>
    <h1 class="capitalize">{data.meta.title}</h1>

    <p class="mt-2 text-gray-500">Published at {formatDate(data.meta.date)}</p>
  </hgroup>

  <div class="mt-7 flex gap-3">
    {#each data.meta.categories as category}
      <span class="surface-4 rounded-full px-3 py-2">&num;{category}</span>
    {/each}
  </div>

  <div class="prose">
    <data.content />
  </div>
</article>
