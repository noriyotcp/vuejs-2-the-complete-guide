import { FRUITS } from './fruits'

export const fruitMixin = {
  data () {
    return {
      fruits: FRUITS,
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      });
    }
  },
  created() {
    console.log('fruitMixin Created')
  }
}
