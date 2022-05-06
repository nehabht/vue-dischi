<template>
  <div>
    <section v-if="!loading">
        <div class="container">
             <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5">
            <SingleAlbum :album="album" v-for="(album, index) in filteredAlbum" :key="index"/>
        </div>
      </div>
    </section>
    <section v-else>
      <div class="d-flex min-vh-100 align-items-center justify-content-center" >
        <h1>loading ...</h1>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import SingleAlbum from "@/components/singleAlbumComponent.vue";
import state from "@/state.js";

export default {
  name: "DiscListComponent",
  components: {
    SingleAlbum,

  },
  data() {
    return {
      API_URL: "https://flynn.boolean.careers/exercises/api/array/music",
      albums: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    callApi() {
      axios
        .get(this.API_URL)
        .then((response) => {
          this.albums = response.data.response;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.error = `Sorry, error: ${error}`;
        });
    },
  },
  mounted() {
    this.callApi();
  },
  computed: {
    filteredAlbum(){
      return this.albums.filter(disc =>{
        return disc.genre.toLowerCase().includes(state.selectGenre.toLowerCase())
      })
    }
  }
};

</script>

