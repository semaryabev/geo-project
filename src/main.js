import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import * as Vue2Leaflet from 'vue2-leaflet'
import LDrawToolbar from 'vue2-leaflet-draw-toolbar'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'


Vue.component('l-map', Vue2Leaflet.LMap);
Vue.component('l-tilelayer', Vue2Leaflet.LTileLayer);
Vue.component('l-marker', Vue2Leaflet.LMarker);
Vue.component('l-draw-toolbar', LDrawToolbar);


delete Icon.Default.prototype._getIconUrl;

Icon.Default.imagePath = '.';
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  el: '#app',
  vuetify,
  Vue2Leaflet,
  render: h => h(App)
})
