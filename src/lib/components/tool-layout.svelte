<script lang="ts">
  import { cn } from '$lib/utils';

  export let className: string = '';
  export let title: string = '';
  export let tools: {
    name: string;
    description: string;
    href: string;
    iconPath: string;
    extraClasses?: string;
  }[] = [];
</script>
