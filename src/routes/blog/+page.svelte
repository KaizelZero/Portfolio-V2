<script lang="ts">
  import { BackButton } from '$lib/components';
  import { formatDate } from '$lib/utils';

  let { data } = $props();
</script>

<div class="w-full">
  <BackButton />
  <div class="mt-5 flex w-full flex-col gap-y-10">
    <div>
      <h1 class="mb-1 text-2xl font-bold">Blog</h1>

      <section>
        <ul class="grid gap-7">
          {#each data.posts as post}
            <li class="max-w-3xl border-b border-gray-300 pb-7 last:border-b-0 last:pb-0">
              <a href="/blog/{post.slug}" class="text-2xl capitalize">{post.title}</a>

              <p class="text-gray-500">{formatDate(post.date)}</p>

              <p class="mt-3">{post.description}</p>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</div>
