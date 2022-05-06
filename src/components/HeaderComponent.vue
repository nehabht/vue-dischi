<template>
  <header class="d-flex justify-content-between">
    <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="">
    <div class="selecterGenere">
      <label for="gender_album" class="text-white fs-5 fw-bold pt-2 pe-3">Genere:</label>
      <select
        name="gender_album"
        id="gender_album">
        <option value="all">All</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="jazz">Jazz</option>
        <option value="metal">Metal</option>
      </select>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 50px;
  background-color: #2e3a46;
  padding-right: 40px
}

img {
  height: 40px;
  margin: 5px 40px;
}
</style>