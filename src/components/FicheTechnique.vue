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
export default {
  name: 'FicheTechnique',
  data () {
    return {
      titre: 'En quelques mots :',
      soustitre: 'je suis un sous titre',
      point1: {
        title: 'Point n1',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
.ficheTechnique{
  font-family: 'Roboto', sans-serif;
  min-height: 460px;
  min-width: 300px;
  max-height: 460px;
  max-width: 300px;
}
#ficheTechnique .ficheTechnique{
    background-color: #f4f3ef;
    box-shadow : 0 2px 2px rgba(204, 197, 185, 0.5);
    border-radius:10px;
    margin-left: 10px;
    margin-top: 10px;
}
#ficheTechnique .ficheTechnique h2{
  font-size:22px;
  font-style:italic;
  margin-bottom: 2px;
  text-align: center;
}
#ficheTechnique .ficheTechnique p{
  margin-bottom: 8px;
}
</style>
