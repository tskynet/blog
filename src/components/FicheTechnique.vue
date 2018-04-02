<template>
    <b-container>
        <div>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{titre}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{soustitre}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point1.title}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point1.text}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point2.title}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point2.text}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point3.title}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point3.text}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point4.title}}</b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="ficheTechnique">{{point4.text}}</b-col>
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
    }
</style>
