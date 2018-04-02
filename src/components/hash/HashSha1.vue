<template>
  <div class="sha1">
    <h1> Hi to Sha1</h1>
    <span>your clean text : {{ textClean }}  <br /></span>
    <b-alert show>and his hash : {{ textHash }}</b-alert>
  </div>
</template>

<script>
import CryptoJs from 'crypto-js'
export default {
  name: 'HashSha1',
  mounted: function () {
    this.hashText()
  },
  methods: {
    hashText: function () {
      if (document.getElementById('textHash').value != null && document.getElementById('textHash').value !== '') {
        this.textClean = document.getElementById('textHash').value
        this.textHash = CryptoJs.SHA1(document.getElementById('textHash').value).toString()
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
