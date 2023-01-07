import { defineAsyncComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

const defaultLayout = defineAsyncComponent(
  () => import("@/layouts/LDefault.vue")
);

const routes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("@/layouts/LError.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/PHome.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/PAbout.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/pages/PContacts.vue"),
    meta: {
      isDark: true,
    },
  },
  {
    path: "/pages/:slug",
    name: "Static",
    component: () => import("@/pages/PStatic.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/pages/PNews.vue"),
    meta: {
      isDark: true,
    },
  },
  {
    path: "/news/:slug",
    name: "NewsSlug",
    component: () => import("@/pages/PNewsSlug.vue"),
    meta: {
      isDark: true,
    },
  },
  {
    path: "/tariffs",
    name: "Tariffs",
    component: () => import("@/pages/PTariffs.vue"),
    meta: {
      isDark: true,
    },
  },
];

for (const route of routes) {
  if (route.meta == undefined) {
    route.meta = {};
  }

  if (route.meta.layout == undefined) {
    route.meta.layout = defaultLayout;
  }
}

export default routes;
