<template>
  <div class="map" >
    <l-map ref="map" :zoom="zoom" :center="center" class="map-container">
        <l-draw-toolbar class="draw"  position = "topleft"/>
        <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
        <l-marker :lat-lng="marker"></l-marker>
        <!-- <l-draw-toolbar class="draw"  position = "bottomleft"/> -->
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import LDrawToolbar from 'vue2-leaflet-draw-toolbar';
import 'leaflet/dist/leaflet.css'

export default {
    name: 'Map', 
    components: {
        LDrawToolbar
    },
    data() {
        return {
            zoom:13,
            center: [55.7522, 37.6156],
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(55.7522, 37.6156),
        }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

    .map {
        height: 600px;
        min-height: 400px;
        width: 75%;
        /* margin: 20px 35px 10px; */
        border: 1px solid #ddd;
    }

    .map-container {
        height: 600px;
        min-height: 400px;
        width: 100%;
        position: relative;
    }

    .draw {
        position: absolute !important;
        left: 0 !important;
        top: 15px !important;
        background-repeat: no-repeat;
        color: transparent !important
    }
</style>