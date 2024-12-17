<script lang="ts">
  const { title = '', skills = [] } = $props();
</script>

<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0">
  <h3 class="w-1/5 font-medium">{title}</h3>
  <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2">
    {#each skills as skill}
      <div
        class="bg-primary-foreground border-border hover:bg-input inline-flex items-center gap-x-1 rounded-xl border px-2 py-1 text-sm transition-all"
      >
        {skill}
      </div>
    {/each}
  </div>
</div>
