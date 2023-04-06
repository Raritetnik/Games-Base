<template>
  <div class="container pt-4 d-flex flex-column align-items-center">
    <div class="d-flex text-start">
        <img :src="game.thumbnail" alt="">
        <div class="ps-4">
            <h1>{{ game.title }}</h1>
            <p>{{ game.short_description }}</p>
        </div>
    </div>
    <div class="text-start p-4">
        <h4>URL: <a :href="game.game_url">{{ game.game_url }}</a></h4>
        <h4>Genre(s): {{ game.genre }}</h4>
        <h4>Platforme(s):{{ game.platform }}</h4>
        <h4>Développeur(s):{{ game.developer }}</h4>
        <h4>Date de publication:{{ game.release_date }}</h4>
    </div>
    <router-link :to="'/'" class="btn btn-secondary">Retour</router-link>
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
