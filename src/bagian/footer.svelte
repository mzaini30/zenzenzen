<script>
  import addons_firefox from "../portfolio/addons-firefox";
  import aplikasi_android from "../portfolio/aplikasi-android";
  import github from "../portfolio/github";
  import workflow_automa from "../portfolio/workflow-automa";
  import Item from "./footer-item.svelte";
</script>

<div class="w-full p-3 text-sm bg-red-500 text-white text-center">
  <div class="uppercase">Berikut ini adalah portfolioku</div>
  <div class="gap-3 grid grid-cols-2 sm:grid-cols-4">
    <Item judul="Addons Firefox" data={addons_firefox} />
    <Item judul="Apliasi Android" data={aplikasi_android} />
    <Item judul="Github" data={github} />
    <Item judul="Workflow Automa" data={workflow_automa} />
  </div>
</div>
