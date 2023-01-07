/// <reference types="vite/client" />
declare module "vue-toastification";
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svg" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent;
  export default component;
}


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $recaptcha: (action: string) => Promise<string>
    $recaptchaLoaded: () => Promise<boolean>
    $recaptchaInstance: ReCaptchaInstance
  }
}

declare module "*.png" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent;
  export default component;
}
