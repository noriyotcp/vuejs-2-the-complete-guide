<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">The Super Quiz</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'Answer'"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'

export default {
  name: 'app',
  data () {
    return {
      mode: 'Question'
    }
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'Answer'
      } else {
        this.mode = 'Question'
        alert('Wrong, try again!')
      }
    }
  },
  components: {
    Question,
    Answer
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
