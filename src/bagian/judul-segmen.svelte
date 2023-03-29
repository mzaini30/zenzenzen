<script>
  export let link_selengkapnya;
  export let teks;
  export let tag;
</script>

<div class="flex justify-between items-center">
  <svelte:element
    this={tag || "h2"}
    class="text-3xl font-bold text-red-500 capitalize">{teks}</svelte:element
  >
  {#if link_selengkapnya}
    <div>
      <a
        class="bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 hover:border text-white text-sm px-4 py-2 rounded-3xl"
        href={link_selengkapnya}>Selengkapnya</a
      >
    </div>
  {/if}
</div>
