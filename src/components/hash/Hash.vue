<template>
  <div class="hash">
      <h1>Hello in Hash Component ! </h1>
      <div class="form">
        <div>
          <label>Enter your text here :</label>
          <input id="textHash" type="text" name="textToHash" placeholder="text to hash here !" />
        </div>
        <div>
          <label>Select your hash mode here :</label>
          <router-link :to="{name:'Hash.Md5'}"><b-button variant="primary">MD5</b-button></router-link>
          <router-link :to="{name:'Hash.Sha1'}"><b-button variant="primary">SHA1</b-button></router-link>
          <router-link :to="{name:'Hash.Sha256'}"><b-button variant="primary">SHA256</b-button></router-link>
          <router-view></router-view>
        </div>
      </div>
      <div id="result">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Hash',
  data () {
    return {
      myToggle: false,
      buttons: [
        { variant: 'primary', caption: 'Toggle 1', state: true },
        { variant: 'danger', caption: 'Toggle 2', state: false },
        { variant: 'warning', caption: 'Toggle 3', state: true },
        { variant: 'success', caption: 'No Toggle', state: null },
        { variant: 'outline-success', caption: 'Toggle 5', state: false },
        { variant: 'outline-primary', caption: 'Toggle 6', state: false }
      ]
    }
  }
}
</script>

<style scoped>
.form{
  text-align:center;
  background:lightblue;
}
a{
  color:white;
}
</style>
