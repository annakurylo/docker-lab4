import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import axios from 'axios'
import 'material-design-icons-iconfont'

axios.defaults.baseURL = 'http://localhost:8081/api';
//axios.defaults.baseURL = 'http://localhost:4000/api';

const app = createApp(App);
app.use(router);
app.mount("#app");