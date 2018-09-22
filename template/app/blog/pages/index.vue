<template>
  <section class="main" align="center">
    <app-logo/>
    <div class="title">
      Blog
    </div>
    <div class="title-small">
      A Nuxt.js project — <span v-html="message"></span>
    </div>
    <div>Response from <b>/api</b>:</div>
    <div v-html="message"></div>
    <div v-html="store.state.message"></div>
    <br>
    <a href="http://localhost:3060" class="el-button el-button--primary">Admin Page</a>
    <a href="https://github.com/muhibbudins/nuxt-multiple" target="_blank" rel="noopener" class="el-button">Github</a>
  </section>
</template>

<script>
import axios from 'axios'
import logo from 'components/AppLogo.vue'

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
