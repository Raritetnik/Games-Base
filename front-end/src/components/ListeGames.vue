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
    }
  }
}
</script>

<template>
  <div class="container d-flex align-items-center flex-column">
    <BoxGame v-for="(game, i) in jeux" :key=i :afficheJeu="game"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
