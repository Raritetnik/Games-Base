<template>
<div class="container d-flex justify-content-center p-2 mb-4" style="max-width: 1000px">
    <form action="" class="d-flex flex-column text-start w-50" @submit.prevent="onSubmit">
      <label for="title">Titre:</label>
      <input type="text" name="title" id="title" class="form-control" :v-model="title">
      <label for="genre">Genre:</label>
      <input type="text" name="genre" class="form-control" :v-model="genre">
      <label for="platform">Platform:</label>
      <input type="text" name="platform" class="form-control" :v-model="platform">
      <label for="publisher">Publisher:</label>
      <input type="text" name="publisher" class="form-control" :v-model="publisher">
      <label for="developer">Developer:</label>
      <input type="text" name="developer" class="form-control" :v-model="developer">
      <label for="release_date">Developer:</label>
      <input type="text" name="release_date" class="form-control" :v-model="release_date">
      <label for="short_description">Description:</label>
      <textarea name="short_description" :v-model="short_description"
      id="short_description" class="form-control" rows="4"></textarea>
      <input type="submit" value="Sauvegarder" class="btn btn-primary mt-4">
    </form>
</div>
</template>
<script>
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'AddGame',
  props: {
    jeux: {
      type: Array,
      required: true
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
          console.log(response.data)
        })
    }
  }
}
</script>
