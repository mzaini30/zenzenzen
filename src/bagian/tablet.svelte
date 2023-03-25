<script>
  export let link;
  export let teks;
</script>

<div>
  <a
    href={link}
    class="text-sm bg-white inline-block text-green-500 py-1 px-3 rounded-2xl hover:!text-green-500"
  >
    {teks}
  </a>
</div>
