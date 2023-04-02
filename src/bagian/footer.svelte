<script>
  import addons_firefox from "../portfolio/addons-firefox";
  import aplikasi_android from "../portfolio/aplikasi-android";
  import github from "../portfolio/github";
  import workflow_automa from "../portfolio/workflow-automa";
  import Item from "./footer-item.svelte";
</script>

<div class="w-full p-3 text-sm bg-red-500 text-white  sm:pb-20">
  <div class=" mx-auto w-270 max-w-[95%]">
    <h2 class="text-3xl sm:text-[100px] my-5 sm:my-20">Portfolio.</h2>
    <div class="gap-4 grid grid-cols-2 sm:grid-cols-4">
      <Item
        judul="Addons Firefox"
        data={addons_firefox}
        link_selengkapnya="https://addons.mozilla.org/id/firefox/user/17443701/"
      />
      <Item
        judul="Aplikasi Android"
        data={aplikasi_android}
        link_selengkapnya="https://play.google.com/store/apps/dev?id=5401138465689796048"
      />
      <Item
        judul="Github"
        data={github}
        link_selengkapnya="https://github.com/mzaini30"
      />
      <Item
        judul="Workflow Automa"
        data={workflow_automa}
        link_selengkapnya="https://www.automa.site/marketplace?author=mzaini30&workflowsBy=community"
      />
    </div>
  </div>
</div>
