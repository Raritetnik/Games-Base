<script>
import BoxGame from './BoxGame.vue'
export default {
  name: 'ListeGames',
  components: {
    BoxGame
  },
  props: {
    jeux: {
      type: Array,
      required: true
    },
    updateAffichage: { type: Function }
  }
}
</script>

<template>
  <div class="container d-flex align-items-center flex-column">
    <BoxGame v-for="(game, i) in jeux" :key=i :afficheJeu="game" :updateList="updateAffichage"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
