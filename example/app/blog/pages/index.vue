<template>
  <section class="main" align="center">
    <app-logo/>
    <div class="title">
      Blog
    </div>
    <div class="title-small">
      A Nuxt.js project — <span v-html="message"></span>
    </div>
    <el-button type="primary">Administrator Page</el-button>
    <el-button>Github</el-button>
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
