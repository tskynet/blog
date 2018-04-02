<template>
  <div id="app">
    <h1>Testing vueJS2.0 !</h1>
    <router-view/>
    <h2>Notification</h2>
    <notifications :group="notification.group" :title="notification.title" :message="notification.text" :duration="notification.duration" :classes="notification.classes" :position="notification.position" :reverse="notification.reverse"/>
    <button v-on:click="subOn('top right')">launch</button>
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
      notification: {
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
        duration: 3000,
        classes: 'vue-notification warn',
        position: 'top left',
        reverse: true

      },
      notifChoice: ''
    }
  },
  mounted () {
  },
  methods: {
    subOn (position) {
      this.position = position
      this.$notify({
        group: 'foo',
        title: 'title',
        text: 'Hello user! This is a notification!',
        classes: 'vue-notification warn',
        position: position,
        reverse: true
      })
    }
  }
}
</script>

<style>
#app {
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
}
#app h1{
  text-align:center;
}
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }

  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
</style>
