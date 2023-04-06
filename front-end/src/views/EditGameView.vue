<template>
  <div class="container pt-4 d-flex flex-column align-items-center">
    <div class="p-3 bg-success border text-light rounded-3 d-flex position-relative text-center" v-if="this.editSuccess">
      <h4 class="text-center w-100">Le jeu est modifier avec succes</h4>
      <button @click="this.editSuccess = !this.editSuccess" class="d-block position-absolute end-0 top-0 me-4 px-1 btn fw-bolder">X</button>
    </div>
    <form action="" @submit.prevent="onSubmit" class="d-flex align-items-center">
      <div class="text-start">
          <img :src="game.thumbnail" alt="">
          <div class="ps-4">
              <h1>{{ game.title }}</h1>
              <p>{{ game.short_description }}</p>
              <router-link :to="'/'" class="btn btn-secondary">Retour</router-link>
          </div>
      </div>
      <div class="text-start p-4 w-100">
          <label for="title">Titre:</label>
          <input type="text" name="title" id="title" class="form-control" :v-model="title" :value="game.title">

          <label for="thumbnail">Lien sur image:</label>
          <input type="text" name="thumbnail" class="form-control"
          :v-model="thumbnail" :value="game.thumbnail">

          <label for="category">Catégorie:</label>
          <input type="text" name="category" class="form-control"
          :v-model="category" :value="game.category">

          <label for="release_date">Prix:</label>
          <input type="number" name="release_date" class="form-control" :v-model="release_date" :value="game.release_date">

          <label for="description">Description:</label>
          <textarea name="description"
          id="description" class="form-control"
          :value="game.description" rows="4"></textarea>

          <input type="submit" value="Sauvegarder" class="btn btn-primary">
      </div>
    </form>
  </div>
</template>

<script>
import GameDataService from '../services/GameDataService.js'

export default {
  data () {
    return {
      game: {},
      editSuccess: false
    }
  },
  async beforeMount () {
    await GameDataService.get(this.$route.params.id)
      .then(response => {
        this.game = response.data
      })
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
      await GameDataService.update(this.$route.params.id, json)
        .then(response => {
          this.editSuccess = true
          this.updateEdit();
        })
    },
    async updateEdit () {
      await GameDataService.get(this.$route.params.id)
      .then(response => {
        console.log(response.data)
        this.game = response.data
      })
    }

  }
}
</script>
