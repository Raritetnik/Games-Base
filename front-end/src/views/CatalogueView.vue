<template>
  <div class="home pt-2">
    <h1>Liste des jeux</h1>
    <button v-if="!showAddGame" class="btn btn-success mb-4" :onClick="changeStatus">Ajouter un jeu</button>
    <button v-if="showAddGame" class="btn btn-danger mb-4" :onClick="changeStatus">Fermer</button>
    <AddGame v-if="showAddGame" :jeux="games"/>
    <ListeGames :jeux="games" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListeGames from '@/components/ListeGames.vue'
import AddGame from '@/components/AddGame.vue'
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'CatalogueView',
  components: {
    ListeGames,
    AddGame
  },
  data () {
    return {
      games: [],
      users: [],
      showAddGame: false
    }
  },
  async beforeMount () {
    await GameDataService.getAll()
      .then(response => {
        this.games = response.data
      })
  },
  methods: {
    changeStatus () {
      this.showAddGame = !this.showAddGame
    }
  }
}
</script>
