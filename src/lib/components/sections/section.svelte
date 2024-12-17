<script lang="ts">
  import { cn } from '$lib/utils';
  import LucideArrowRight from '~icons/lucide/arrow-right';

  let { children, class: className = '', title = '', link = '', seeMore = false } = $props();
</script>

<section class={cn(className, 'flex flex-col gap-y-5 md:flex-row md:gap-y-0')}>
  <div class="text-xl font-semibold md:w-1/3">
    {#if seeMore}
      <a href={link} class="group flex items-center">
        {title}
        <LucideArrowRight
          class="ml-1 transform transition-transform group-hover:translate-x-2 group-hover:transition-all group-hover:delay-100"
        />
      </a>
    {:else}
      <h2>{title}</h2>
    {/if}
  </div>
  <div class="flex flex-col gap-y-3 md:w-2/3">
    {@render children?.()}
  </div>
</section>
