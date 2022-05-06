// Importa Vue
import Vue from 'vue'
// crea un oggetto usando .observable
const state = Vue.observable({
    selectGenre: ''
})
// esporta lo state
export default state