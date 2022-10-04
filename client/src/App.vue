<template>
  <div id="app">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" v-model="description" type="text" placeholder="Go to mars..." />
      </div>
      <div class="control">
        <a class="button is-info">Add</a>
      </div>
    </div>
    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <p>
        <span class="tag is-primary">{{ i + 1 }}</span>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      items: [],
      description: ""
    }
  },
  async mounted() {
    const response = await axios.get('api/bucketListItems/')
    this.items = response.data
  }
}
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
</style>
