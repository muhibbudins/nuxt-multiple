<template>
  <b-container class="main text-center">
    <app-logo/>
    <h1 class="title">
      {{ name }}
    </h1>
    <h2 class="subtitle">
      A Nuxt.js project — <span v-html="message"></span>
    </h2>
    <div class="links">
      <b-link class="btn btn-success" href="https://nuxtjs.org/">Documentation</b-link>
      <b-link href="https://github.com/nuxt/nuxt.js">GitHub</b-link>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import logo from '~/components/AppLogo.vue'

export default {
  components: {
    'app-logo': logo
  },
  data () {
    return {
      message: '<message from APIs>'
    }
  },
  mounted () {
    axios.get('/api/').then(({ data }) => {
      this.message = data.message
    })
  }
}
</script>
