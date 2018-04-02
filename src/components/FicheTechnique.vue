<template>
    <b-container fluid>
        <div>
            <b-row>
              <b-col cols="4" class="ficheTechnique">
                <h2>{{titre}}</h2>
                <div class="w-100"></div>
                <p>{{soustitre}}</p>
                <div class="w-100"></div>
                <p>{{point1.title}}</p>
                <div class="w-100"></div>
                <p>{{point1.text}}</p>
                <div class="w-100"></div>
                <p>{{point2.title}}</p>
                <div class="w-100"></div>
                <p>{{point2.text}}</p>
                <div class="w-100"></div>
                <p>{{point3.title}}</p>
                <div class="w-100"></div>
                <p>{{point3.text}}</p>
                <div class="w-100"></div>
                <p>{{point4.title}}</p>
                <div class="w-100"></div>
                <p>{{point4.text}}</p>
                <div class="w-100"></div>
              </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      titre: 'je suis un titre',
      soustitre: 'je suis un sous titre',
      point1: {
        title: 'Point n1',
        text: 'Bonjour je suis le descriptif du point n1'
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
    .ficheTechnique{
        background-color: beige;
        border: black 1px solid;
        border-radius: 7%; 
        margin-left: 10px;
        margin-top: 10px;
    }
</style>
