<template>
  <section class="main" align="center">
    <app-logo/>
    <div class="title">
      Admin
    </div>
    <div class="title-small">
      Admin App — A Nuxt.js project
    </div>
    <div>Response from <b>/api</b>:</div>
    <div v-html="message"></div>
    <div v-html="store.state.message"></div>
    <br>
    <a href="http://localhost:3050" class="el-button el-button--primary">Blog Page</a>
    <a href="https://github.com/muhibbudins/nuxt-multiple" target="_blank" rel="noopener" class="el-button">Github</a>
    <br>
    <br>
    <div>Load an Image</div>
    <br>
    <img src="~static/example.jpg" alt="Example Image">
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
