<template>
    <div id="ficheTechnique">
      <b-container fluid>
          <div class="ficheTechnique">
                  <h2>{{titre}}</h2>
                  <div class="w-100"></div>
                  <p>{{soustitre}}</p>
                  <div class="w-100"></div>
                  <p>{{point1.title}}</p>
                  <div class="w-100"></div>
                  <p>{{point1.text}}</p>
                  <div class="w-100"></div>
                  <div v-if='point2'>
                    <p>{{point2.title}}</p>
                    <div class="w-100"></div>
                    <p>{{point2.text}}</p>
                    <div class="w-100"></div>
                  </div>
                  <div v-if='point3'>
                    <p>{{point3.title}}</p>
                    <div class="w-100"></div>
                    <p>{{point3.text}}</p>
                    <div class="w-100"></div>
                  </div>
                  <div v-if='point3'>
                    <p>{{point4.title}}</p>
                    <div class="w-100"></div>
                    <p>{{point4.text}}</p>
                    <div class="w-100"></div>
                  </div>
          </div>
      </b-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FicheTechnique',
  data () {
    return {
      titre: '',
      soustitre: '',
      point1: {
        title: '',
        text: 'Bonjour je suis le descriptif du point n1 et je suis vraiment tres grand'
      },
      point2: {
        title: 'Point n2',
        text: 'Bonjour je suis le descriptif du point n2'
      },
      point3: {
        title: 'Point n3',
        text: 'Bonjour je suis le descriptif du point n3'
      },
      point4: {
        title: 'Point n4',
        text: 'Bonjour je suis le descriptif du point n4'
      }
    }
  },
  created () {
    axios.get('http://localhost:3000/fiche/5aca25dc720c1a0cf823ee3e')
      .then(response => {
        this.titre = response.data.titre
        this.soustitre = response.data.soustitre
        var point1 = JSON.parse(response.data.point1)
        this.point1.title = point1.title
        this.point1.text = point1.text
      })
      .catch(e => {
        console.log('erooor' + e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#ficheTechnique .ficheTechnique{
    box-shadow : 0 2px 2px rgba(204, 197, 185, 0.5);
    border-radius:10px;
    margin-left: 10px;
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    min-height: 460px;
    min-width: 300px;
    max-height: 460px;
    max-width: 300px;
    background:#f2f2f2;
    display:inline-block;
    padding:10px;
    border:5px solid rgba(148,148,148,0.3);
}
#ficheTechnique .ficheTechnique h2{
  font-size:22px;
  font-style:italic;
  margin-bottom: 2px;
  text-align: center;
}
#ficheTechnique .ficheTechnique p{
  margin-bottom: 8px;
  font-size:14px;
}
</style>
