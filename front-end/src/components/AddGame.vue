<template>
  <div class="container">
    <div class="p-3 bg-success border text-light rounded-3 d-flex position-relative text-center" v-if="this.editSuccess">
      <h4 class="text-center w-100">Le jeu est modifier avec succes</h4>
      <button @click="this.editSuccess = !this.editSuccess" class="d-block position-absolute end-0 top-0 me-4 px-1 btn fw-bolder">X</button>
    </div>
    <div class="d-flex justify-content-center p-2 mb-4">
      <form ref="form" class="d-flex flex-column text-start w-50" @submit.prevent="onSubmit">
        <label for="title">Titre:</label>
          <input type="text" name="title" id="title" class="form-control" :v-model="title">

          <label for="thumbnail">Lien sur image:</label>
          <input type="text" name="thumbnail" class="form-control"
          :v-model="thumbnail">

          <label for="category">Catégorie:</label>
          <input type="text" name="category" class="form-control"
          :v-model="category">

          <label for="price">Prix:</label>
          <input type="number" name="price" class="form-control" :v-model="release_date" step="0.01">

          <label for="description">Description:</label>
          <textarea name="description"
          id="description" class="form-control" rows="4"></textarea>
        <input type="submit" value="Sauvegarder" class="btn btn-primary mt-4">
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'AddGame',
  props: {
    jeux: [],
    updateAffichage: { type: Function }
  },
  data () {
    return {
      editSuccess: false,
      title: "",
      thumbnail: "",
      category: "",
      price: "",
    }
  },
  methods: {
    /* eslint-disable */
    async onSubmit (event) {
      const formData = new FormData(event.target)
      var object = {}
      formData.forEach( function(value, key) {
          object[key] = value
      })
      var json = JSON.stringify(object)
      await GameDataService.create(json)
        .then(response => {
          this.editSuccess = true;
          this.updateAffichage();
          this.resetUserForm();
        })
    },
    resetUserForm () {
      this.$refs.form.reset();
    }
  }
}
</script>
