<template lang="html">
  <div class="row">
    <app-quote v-for="quote, i in quotes" key="i">{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  }
}
</script>

<style scoped>
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
