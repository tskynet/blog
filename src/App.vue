<template>
  <div id="app">
    <h1>Testing vueJS2.0 !</h1>
    <router-view/>
  </div>

</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
export default {
  name: 'app',
  data () {
    return {
      }
    }
  }
}
</script>

<style>
</style>
