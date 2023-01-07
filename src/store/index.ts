import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore("mainStore", () => {
  const homeFetched = ref(false);
  const getHomeFetched = computed(() => homeFetched);
  const setHomeFetched = (bool: boolean) => {
    homeFetched.value = bool;
  };

  // * Menu
  const menu = ref([] as any[]);
  const getMenu = computed(() => menu);
  const setMenu = (menus: any[]) => {
    menu.value = menus;
  };

  // * Slides
  const slides = ref([] as any[]);
  const getSlides = computed(() => slides);
  const setSlides = (data: any[]) => {
    slides.value = data;
  };

  // * Tarifs
  const tarifs = ref([] as any[]);
  const getTarifs = computed(() => tarifs);
  const setTarifs = (data: any[]) => {
    tarifs.value = data;
  };

  // * News
  const news = ref([] as any[]);
  const getNews = computed(() => news);
  const setNews = (data: any[]) => {
    news.value = data;
  };

  // * Residents
  const residents = ref([] as any[]);
  const getResidents = computed(() => residents);
  const setResidents = (data: any[]) => {
    residents.value = data;
  };

  // * Tarif Category 3
  const tarifCategories = ref([] as any[]);
  const getTarifCategories = computed(() => tarifCategories);
  const setTarifCategories = (data: any[]) => {
    tarifCategories.value = data;
  };

  // * FAQ
  const faq = ref([] as any[]);
  const getFaq = computed(() => faq);
  const setFaq = (data: any[]) => {
    faq.value = data;
  };

  // * Comments
  const comments = ref([] as any[]);
  const getComments = computed(() => comments);
  const setComments = (data: any[]) => {
    comments.value = data;
  };

  // * Social media
  const socialMedia = ref([] as any[]);
  const getSocialMedia = computed(() => socialMedia);
  const setSocialMedias = (data: any[]) => {
    socialMedia.value = data;
  };

  // * Contacts
  const contact = ref({} as ContactEntity);
  const getContact = computed(() => contact);
  const setContact = (data: ContactEntity) => {
    console.log(data);
    contact.value = data;
  };

  return {
    getMenu,
    setMenu,
    getHomeFetched,
    setHomeFetched,
    getSlides,
    setSlides,
    getTarifs,
    setTarifs,
    getNews,
    setNews,
    getResidents,
    setResidents,
    getTarifCategories,
    setTarifCategories,
    getFaq,
    setFaq,
    getComments,
    setComments,
    getSocialMedia,
    setSocialMedias,
    getContact,
    setContact,
  };
});
