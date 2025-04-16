<script lang="ts" module>
  import { Img } from '$lib/components/';
  export { Img };
</script>

<script lang="ts">
  let props = $props();
</script>

{@render props.children?.()}
