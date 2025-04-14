<script lang="ts">
  import { cn } from '$lib/utils';
  import { Image } from '@unpic/svelte';

  const {
    children = null,
    class: className = '',
    href = '',
    heading = '',
    subheading = '',
    date = '',
    imagePath = '',
    altText = '',
    imageClass = ''
  } = $props();
</script>

<div
  class={cn(
    'relative rounded-2xl border border-border bg-primary-foreground px-5 py-3',
    className,
    href && 'transition-all hover:border-foreground/25 hover:shadow-sm'
  )}
>
  {#if imagePath}
    <Image
      src={imagePath}
      alt={altText}
      class={cn('mb-3 md:absolute md:mb-0', imageClass)}
      loading="eager"
    />
  {/if}
  <div class="flex flex-col gap-y-1.5">
    <div class="flex flex-col gap-y-0.5">
      <h1 class="text-lg font-medium">{heading}</h1>
      <h2 class="text-muted-foreground">{subheading}</h2>
      <h2 class="text-muted-foreground">{date}</h2>
    </div>
    {@render children?.()}
  </div>
</div>
