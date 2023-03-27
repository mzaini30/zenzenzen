<script>
  export let link_selengkapnya;
  export let teks;
</script>

<div class="flex justify-between items-center">
  <h2 class="text-3xl font-bold text-red-500 capitalize">{teks}</h2>
  {#if link_selengkapnya}
    <div>
      <a
        class="bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 hover:border text-white text-sm px-4 py-2 rounded-3xl"
        href={link_selengkapnya}>Selengkapnya</a
      >
    </div>
  {/if}
</div>
