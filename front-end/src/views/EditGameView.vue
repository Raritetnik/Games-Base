<template>
  <div class="container pt-4 d-flex flex-column align-items-center">
    <form action="" @submit.prevent="onSubmit" class="d-flex align-items-center">
      <div class="text-start">
          <img :src="game.thumbnail" alt="">
          <div class="ps-4">
              <h1>{{ game.title }}</h1>
              <p>{{ game.short_description }}</p>
          </div>
      </div>
      <div class="text-start p-4 w-100">
          <label for="title">Titre:</label>
          <input type="text" name="title" id="title" class="form-control" :v-model="title" :value="game.title">
          <label for="genre">Genre:</label>
          <input type="text" name="genre" class="form-control" :v-model="genre" :value="game.genre">
          <label for="platform">Platform:</label>
          <input type="text" name="platform" class="form-control" :v-model="platform" :value="game.platform">
          <label for="publisher">Publisher:</label>
          <input type="text" name="publisher" class="form-control" :v-model="publisher" :value="game.publisher">
          <label for="developer">Developer:</label>
          <input type="text" name="developer" class="form-control" :v-model="developer" :value="game.developer">
          <label for="release_date">Developer:</label>
          <input type="text" name="release_date" class="form-control" :v-model="release_date" :value="game.release_date">
          <label for="short_description">Description:</label>
          <textarea name="short_description"
          id="short_description" class="form-control" :value="game.short_description" rows="4"></textarea>

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
      game: {}
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
          console.log(response.data)
        })
    }
  }
}
</script>
