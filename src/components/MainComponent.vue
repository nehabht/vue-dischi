<template>
  <main class="pt-4">
      <AlbumsShow />
  </main>
</template>

<script>
import AlbumsShow from "@/components/AlbumsComponent.vue"
export default {
  name: "SiteMain",
  components: {
      AlbumsShow
  },
};
</script>

<style lang="scss" scoped>
main{
    background-color: #1E2D3B;
}
</style>
