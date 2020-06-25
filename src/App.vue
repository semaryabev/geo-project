<template>
  <div id="app">
    <v-app>
      <my-header />
      <div class="content">
        <Map />
        <info-tools />
      </div>
    </v-app>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader'
import Map from './components/Map'
import InfoTools from './components/InfoTools'


export default {
  name: 'app',
  components: {
    MyHeader,
    Map,
    InfoTools
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import "~leaflet/dist/leaflet.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
    min-height: 600px;
    width: 100%;
    padding: 15px;
    margin-top: 10px;
  }

  body {
    background-color: #fafafad8;
    width: 100%;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 95%;
    margin: 20px auto;
  }
</style>
