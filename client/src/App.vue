<template>
  <div id="app">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" v-model="description" type="text" placeholder="Go to mars..." />
      </div>
      <div class="control">
        <a class="button is-info" @click="addItem" :disabled="!description">Add</a>
      </div>
    </div>
    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <div class="columns is-mobile">
        <p class="column">
          <span class="tag is-primary">{{ i + 1 }}</span>
          {{ item.description }}
        </p>
        <div class="column is-narrow">
          <span class="icon has-text-info" @click="removeItem(item, i)">
            <i class="material-icons">delete</i>
          </span>
        </div>
      </div>
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
  },
  methods: {
    async addItem() {
      const response = await axios.post('api/bucketListItems/', { description: this.description })
      this.items.push(response.data)
      this.description = ""
    },
    async removeItem(item, i) {
      await axios.delete("api/bucketListItems/" + item._id)
      this.items.splice(i, 1)
    }
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
