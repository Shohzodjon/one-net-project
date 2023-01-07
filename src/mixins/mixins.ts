import { i18n } from "@/plugins/i18n";

export function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const setTranslations = (data: any[]) => {
  return data.map((item: any) => {
    if (!item["translations"] && item.translations.length < 1) {
      return item;
    }
    item.translations.forEach((tr: any) => {
      item[tr.languages_code.split("-")[0]] = tr;
    });
    return item;
  });
};
export const getTranslation = (query: any, lang: string, key: string) => {
  // console.log(query, lang, key);
  
  if (Object.keys(query).includes(lang)) {
    return query[lang][key];
  }
  return query[key];
};

export const getItems = (query: any) => {
  const result = [];
  for (let index = 1; index <= 5; index++) {
    if (query[`info_title${index}`]) {
      result.push({
        name: getTranslation(
          query,
          i18n.global.locale.value,
          `info_title${index}`
        ),
        value: getTranslation(
          query,
          i18n.global.locale.value,
          `info_sub_title${index}`
        ),
      });
    }
  }
  return result;
};
