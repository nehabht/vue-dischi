<template>
  <main class="pt-4">
      <SelectGender v-model="selectGenre" @changeSelectValue="changeOption" />
      
      <AlbumsShow />
  </main>
</template>

<script>
import AlbumsShow from "@/components/AlbumsComponent.vue"
import SelectGender from "@/components/GenreComponent.vue"
import state from '@/state.js';
export default {
  name: "SiteMain",
  components: {
      AlbumsShow,
      SelectGender,
  },
   data() {
    return {
      selectGenre: ""
    }
  },
  methods: {
    changeOption(){
      console.log(this.selectGenre)
      state.selectGenre = this.selectGenre;
      console.log(state)
    }
  },
};
</script>

<style lang="scss" scoped>
main{
    background-color: #1E2D3B;
}
</style>
