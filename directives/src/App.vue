<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Built-in Directives</h1>
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some Text</strong>'"></p>
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Custom Directives</h1>
          <p v-highlight:background.delayed="'red'">Color This</p>
          <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color This, too</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0
        if (binding.modifiers['delayed']) {
          delay = 3000
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor
          let secondColor = binding.value.secondColor
          let currentColor = mainColor
          setTimeout(() => {
            setInterval(() => {
              // Toggle colors
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor
              } else {
                el.style.color = currentColor
              }
            }, binding.value.delay)
          }, delay)
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor
            } else {
              el.style.color = binding.value.mainColor
            }
          }, delay)
        }
      }
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
