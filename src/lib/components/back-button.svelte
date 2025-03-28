<script lang="ts">
  export let href: string = '/';
  export let title: string = 'Back';
</script>

<a
  {title}
  {href}
  style="button"
  class="group inline-flex items-center gap-x-1 rounded-lg border border-border bg-primary-foreground px-2 py-1 text-sm transition-all hover:bg-input"
  aria-label="Back"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    class="transform transition-transform group-hover:-translate-x-1 group-hover:transition-all group-hover:delay-100"
  >
    <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z">
    </path>
  </svg>

  <span>
    {title}
  </span>
</a>
