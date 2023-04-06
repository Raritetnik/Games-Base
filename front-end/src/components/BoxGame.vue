<script>
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'BoxGame',
  props: {
    afficheJeu: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onClick (e) {
      await GameDataService.delete(e.target.getAttribute('data-id'))
        .then(response => {
          console.log(response.data)
        })
    }
  }
}
</script>

<template>
    <article class="d-flex p-4 border rounded w-100" style="max-width: 900px">
      <header><img :src="this.afficheJeu.thumbnail" alt=""></header>
      <main class="ps-4 d-flex flex-column text-start justify-content-between w-100">
        <h2>{{ this.afficheJeu.title }}</h2>
        <div>{{ this.afficheJeu.short_description }}</div>
        <footer class="d-flex justify-content-end gap-2">
          <router-link :to="'/game/'+this.afficheJeu.id" class="btn btn-primary">Voir</router-link>
          <router-link :to="'/game/'+this.afficheJeu.id+'/edit'" class="btn btn-secondary">Modifier</router-link>
          <button @click="onClick" class="btn btn-danger" :data-id="this.afficheJeu.id">Supprimer</button>
        </footer>
      </main>
    </article>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    article {
        margin: 10px 0;
    }
</style>
