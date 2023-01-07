import { App } from "vue";
import Maska from "maska";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { i18n } from "./i18n";
import VueSocialSharing from "vue-social-sharing";
import vClickout from "vue3-clickout";
import TextHighlight from "vue-text-highlight";
import VueLazyload from "vue-lazyload";
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default function definePlugins(app: App): App {
  // Define your plugins here with app.use. It is required for storybook support.

  // Plugin v-mask
  app.use(Maska);
  app.component(TextHighlight);
  app.use(VueLazyload);

  app.component(TextHighlight);
  const options = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    maxToasts: 5,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  };
  app.use(Toast, options);
  app.use(i18n);
  app.use(VueSocialSharing);
  app.use(vClickout);
  app.use(VueReCaptcha, { siteKey: '6Lczek4iAAAAADq5uxzlUhPEcX5QRBb_rnwCNemH', loaderOptions: {
    useRecaptcha: true
  } })
  app.config.globalProperties.$i18n = i18n.global;
  app.config.globalProperties.$static =
    import.meta.env.VITE_BASE_URL + "/assets/";
  return app;
}
