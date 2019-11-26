import axios from 'axios'
import Vue from 'vue'

const http = axios.create({

})
Vue.prototype.$http = http
