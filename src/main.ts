import { createApp } from "vue";
import { createPinia } from "pinia";
import "aos/dist/aos.css";

import definePlugins from "@/plugins";

import App from "./App.vue";
import VueKinesis from "vue-kinesis";
import router from "@/router";
import "@/styles/main.css";

const app = createApp(App);
app.use(router);
app.use(VueKinesis);
app.use(createPinia());
definePlugins(app);
app.mount("#app");
