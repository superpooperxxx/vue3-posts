import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import router from "./router";
import components from "@/components/UI/index.js";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.mount("#app");
