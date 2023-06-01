import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './plugins/font-awesome';

//js
import 'bootstrap';
import 'popper.js';
import 'jquery';


//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mdb/scss/index.free.scss';
import '../src/assets/style.scss';


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
