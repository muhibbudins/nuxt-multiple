import Vue from 'vue'
import vuexStore from 'store'

Vue.mixin({
  computed: {
    store () {
      return vuexStore
    }
  }
})
