<template>
  <div class="container pt-4 d-flex justify-content-between gap-5">
    <div class="text-start">
        <img :src="game.thumbnail" alt="">
        <router-link :to="'/'" class="btn btn-secondary m-4">Retour</router-link>
    </div>
    <div class="text-start">
        <h4>Titre: {{ game.title }}</h4>
        <h4>Catégorie: {{ game.category }}</h4>
        <h4>Description:</h4> <p>{{ game.description }}</p>
        <div class="bg-info text-center p-2 rounded-pill fw-bold">
          <h2 class="m-0">{{ ( Number(game.price) === 0) ? "Gratuit":  "CAD"+game.price+"$" }}</h2>
        </div>
    </div>
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
  }
}
</script>
