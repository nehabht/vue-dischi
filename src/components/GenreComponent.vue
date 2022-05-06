<template>
    <div class="genere_option d-flex justify-content-end pe-4 ">
      <label for="gender_album" class="text-white fs-5 fw-bold pt-2 pe-3 ">Genere:</label>
      <select
        name="gender_album"
        id="gender_album"
        class="bg-dark text-white p-2"
        @change="$emit('changeSelectValue')"
        @input="$emit('input', $event.target.value)">
        
        <option value="all">All</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="jazz">Jazz</option>
        <option value="metal">Metal</option>
      </select>
    </div>
</template>

<script>
export default {
    name: "SelectGenderComponent",
    props: {
        selectGenre: String
    },
}
</script>