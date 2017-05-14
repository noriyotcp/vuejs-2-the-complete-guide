<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { FRUITS } from './fruits'

export default {
  name: 'app-list',
  data () {
    return {
      fruits: FRUITS,
      filterText: ''
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      });
    }
  }
}
</script>

<style>
</style>
