<template>
  <div class="md5">
    <h1>Hi to md5</h1>
    <span>your clean text : {{ textClean }}  <br /></span>
    <b-alert show>and his hash : {{ textHash }}</b-alert>
  </div>

</template>
<script>
import CryptoJs from 'crypto-js'
export default {
  name: 'HashMd5',
  mounted: function () {
    this.hashText()
  },
  methods: {
    hashText: function () {
      if (document.getElementById('textHash').value != null && document.getElementById('textHash').value !== '') {
        this.textClean = document.getElementById('textHash').value
        this.textHash = CryptoJs.MD5(document.getElementById('textHash').value).toString()
      } else {
        alert('Please enter a text to hash please')
      }
    }
  },
  data () {
    return {
      textClean: '',
      textHash: ''
    }
  }
}
</script>

<style scoped>

</style>
