import { createI18n } from "vue-i18n";
import uz from "../language/uz.json";
import ru from "../language/ru.json";
import en from "../language/en.json";

const locale = localStorage.getItem("locale") || "ru";
export const i18n = createI18n({
  locale: locale,
  legacy: false,
  globalInjection: true,
  silentFallbackWarn: true,
  compositionOnly: false,
  messages: {
    ru,
    uz,
    en,
  },
});
