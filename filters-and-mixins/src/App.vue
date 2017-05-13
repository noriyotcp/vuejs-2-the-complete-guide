<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters & Mixins</h1>
          <p>{{ text | toUpperCase | to-lowercase }}</p>
          <input type="text" v-model="filterText">
          <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FRUITS } from './fruits'

export default {
  name: 'app',
  data () {
    return {
      text: 'Hello there!',
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
