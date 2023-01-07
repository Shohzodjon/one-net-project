<template>
  <section class="bg-[#FCFCFC]">
    <SBread
      :pages="[
        { title: $t('news'), link: '/news' },
        { title: getTranslation(post, $i18n.locale.value, 'title') },
      ]"
    />
    <div v-if="isFetched" class="container mt-8 pb-16">
      <div class="flex flex-row items-start gap-5 sm:gap-[57px]">
        <div
          @click="$router.push('/news')"
          class="flex items-center justify-center cursor-pointer shrink-0 w-11 h-11 border border-[#E5E7EB] hover:border-mainColor rounded-xl group transition duration-300"
        >
          <span
            class="icon-arrow-left-1 text-2xl text-[#939191] group-hover:text-mainColor transition duration-300"
          />
        </div>
        <div class="flex-1">
          <h3
            class="text-darkColor leading-7 sm:leading-8 md:leading-9 text-xl sm:text-2xl md:text-[28px] font-bold !line-clamp-2 !break-words w-full"
          >
            {{ getTranslation(post, $i18n.locale.value, "title") }}
          </h3>
          <span
            class="mt-2 font-medium text-sm sm:text-base text-[#939191] block"
          >
            {{ dateFormatter(post.date_created) }}
          </span>
        </div>
      </div>

      <div class="my-8 w-full rounded-2xl">
        <AspectRatioImage :ratio="1 / 3">
          <img
            v-lazy="$static + post.img.id"
            alt="single-new"
            class="rounded-2xl object-cover"
          />
        </AspectRatioImage>
      </div>

      <div class="max-w-[990px] mx-auto">
        <div
          class="news-single"
          v-html="getTranslation(post, $i18n.locale.value, 'context')"
        />

        <hr class="!mt-6" />
        <div
          class="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-6 md:mt-8 mb-4 sm:mb-12 md:mb-14 lg:mb-16"
          v-clickout="clickOutside"
        >
          <div
            class="flex flex-row-reverse sm:flex-row justify-between items-center gap-0 sm:gap-5"
          >
            <div class="flex items-center gap-2">
              <span class="transition-all duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14.0003"
                    cy="13.9998"
                    r="2.33333"
                    stroke="#939191"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.6663 14.0002C22.5548 19.445 18.6663 22.1668 13.9997 22.1668C9.33301 22.1668 5.44451 19.445 2.33301 14.0002C5.44451 8.55533 9.33301 5.8335 13.9997 5.8335C18.6663 5.8335 22.5548 8.55533 25.6663 14.0002"
                    stroke="#939191"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <span class="">
                {{ post.view_count ? post.view_count : 0 }}
              </span>
            </div>

            <div class="relative">
              <div
                class="flex gap-2 bg-[#f8f6f6] py-1.5 px-2 rounded-lg transition-all duration-300 hover:bg-[#EBEBEB] group cursor-pointer"
                @click="toggle"
              >
                <span class="cursor-pointer">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="group"
                  >
                    <circle
                      cx="7"
                      cy="14"
                      r="3.5"
                      class="transition duration-300 group-hover:stroke-mainColor"
                      stroke="#939191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="21"
                      cy="7"
                      r="3.5"
                      class="transition duration-300 group-hover:stroke-mainColor"
                      stroke="#939191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="3.5"
                      class="transition duration-300 group-hover:stroke-mainColor"
                      stroke="#939191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1504 12.4833L17.8504 8.5166"
                      stroke="#939191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="transition duration-300 group-hover:stroke-mainColor"
                    />
                    <path
                      d="M10.1504 15.5166L17.8504 19.4833"
                      stroke="#939191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="transition duration-300 group-hover:stroke-mainColor"
                    />
                  </svg>
                </span>
                <span class="md:hidden text-lg font-medium">{{ $t("share") }}</span>
              </div>
              <transition name="slide" type="animation">
              <ul
                class="absolute inline-table md:left-[-32px] top-[50px] w-full bg-[#EBEBEB] opacity-1 rounded-lg share-links"
                v-if="show" 
              >
                <li
                  class="py-3 px-3 cursor-pointer group trnasition-all duration-300 hover:bg-white"
                >
                  <ShareNetwork
                    network="Telegram"
                    :url="url"
                    :title="getTranslation(post, $i18n.locale.value, 'title')"
                    class="flex items-center gap-2"
                  >
                    <span
                      class="w-5 h-5 flex items-center justify-center rounded-full bg-mainColor"
                    >
                      <i class="icon-telegram text-sm text-white"></i>
                    </span>
                    <span
                      class="text-sm leading-[17px] font-semibold transition duration-300 group-hover:text-mainColor"
                      >Telegram</span
                    >
                  </ShareNetwork>
                </li>
                <li
                  class="py-3 px-3 cursor-pointer group trnasition-all duration-300 hover:bg-white"
                >
                  <ShareNetwork
                    network="Facebook"
                    :url="url"
                    :title="post.title"
                    class="flex items-center gap-2"
                  >
                    <span
                      class="w-5 h-5 flex items-center justify-center rounded-full bg-mainColor"
                    >
                      <i class="icon-facebook text-sm text-white"></i>
                    </span>

                    <span
                      class="text-sm leading-[17px] font-semibold transition duration-300 group-hover:text-mainColor"
                      >Facebook</span
                    >
                  </ShareNetwork>
                </li>

                <li
                  class="py-3 px-3 cursor-pointer group trnasition-all duration-300 hover:bg-white"
                >
                  <ShareNetwork
                    network="Facebook"
                    :url="url"
                    :title="post.title"
                    class="flex items-center gap-2"
                  >
                    <span
                      class="w-5 h-5 flex items-center justify-center rounded-full bg-mainColor"
                    >
                      <i class="icon-twitter text-sm text-white"></i>
                    </span>

                    <span
                      class="text-sm leading-[17px] font-semibold transition duration-300 group-hover:text-mainColor"
                      >Twitter</span
                    >
                  </ShareNetwork>
                </li>
              </ul>
              </transition>  
            </div>
          </div>
          <div
            class="flex items-center bg-[#F7F7F7] rounded-lg border border-[#E5E7EB] max-h-10 rounded-l-lg pl-3 gap-3 justify-between max-w-[283px]"
          >
            <span
              class="text-sm sm:text-base md:text-lg leading-[23px] text-darkColor break-words w-[80%] line-clamp-1"
            >
              {{ url }}
            </span>
            <span
              @click="copyUrl"
              class="w-10 px-2 group cursor-pointer h-10 relative flex items-center justify-center bg-[#E5E7EB] hover:bg-mainColor hover:bg-opacity-50 rounded-r-lg transition-all duration-300 copy-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="8"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="#939191"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition duration-300 group-hover:stroke-mainColor"
                />
                <path
                  d="M16 8V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H8"
                  stroke="#939191"
                  class="transition duration-300 group-hover:stroke-mainColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                class="absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300"
                :class="isCopy ? 'opacity-100' : 'opacity-0'"
              >
                <div class="px-2.5 py-1 rounded-xl bg-darkColor relative">
                  <span class="text-sm text-white">{{ $t("copied") }}</span>
                  <span
                    class="w-2 h-2 block bg-darkColor rotate-45 absolute -bottom-[10%] left-[50%] -translate-x-[50%]"
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <!-- end of inside container -->

      <h5
        class="text-darkColor leading-[50px] text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 lg:mb-6"
      >
        {{ $t("as_news") }}
      </h5>
      <!-- <pre>{{post.slug}}</pre> -->
      <!-- <pre>{{posts}}</pre> -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SCard
          data-aos="fade-up"
          class="flex-col !gap-6 mt-0 sm:mt-3 md:mt-5 news-single-card -ml-3"
          v-for="(post, index) in posts"
          :data-aos-delay="index * 50"
          :key="post"
          :card="post"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { ShareNetwork } from "vue-social-sharing";

import AspectRatioImage from "@/components/AspectRatio.vue";
import { getTranslation, setTranslations } from "@/mixins/mixins";
import SBread from "@/stories/bread-crumb/SBread.vue";
import SCard from "@/stories/card/SCard.vue";
import { $axios } from "@/utils/axios";

const clickOutside = () => {
  show.value = false;
};
const isCopy = ref(false);
const route = useRoute();
const router = useRouter();

const post = ref({});
const posts = ref([] as any[]);
const isFetched = ref(false);

onMounted(async () => {
  try {
    const [_post, _posts] = await Promise.all([
      $axios.get(
        `/news?filter[slug][_eq]=${route.params.slug}&limit=1&fields=*.*`
      ),
      $axios.get(
        "/news?sort=sort,view_count&limit=4&fields=title,sub_title,date_created,slug,img.id,view_count,id,translations.title,translations.sub_title,translations.languages_code"
      ),
    ]);
    if (_post.data.data.length === 0) {
      return router.push("/404");
    }
    post.value = setTranslations(_post.data.data)[0];
    posts.value = setTranslations(_posts.data.data);
    isFetched.value = true;
  } catch (error) {
    router.push("/404");
  }
});

let url = ref("");
const show = ref(false);
const t = useI18n().t;
const dateFormatter = (date: string) => {
  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  return t(`months[${month}]`) + ` ${day}, ${year}`;
};

function toggle() {
  show.value = !show.value;
}
url.value = window.location.href;
function returnUrl() {
  return (url.value = window.location.href);
}
const copyUrl = async () => {
  await navigator.clipboard.writeText(returnUrl());
  isCopy.value = true;
  setTimeout(() => {
    isCopy.value = false;
  }, 2000);
};
</script>
<style scoped>
.share-links {
  height: 0;
  transition: all linear 0.2s;
}
.active-link {
  height: 131px;
}
</style>
<style>
.news-slug-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
}

.news-slug-grid > div > div {
  margin-bottom: -10px !important;
}

.news-single p {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #363130;
}
.news-single ul {
  list-style-type: disc;
  margin: 12px 20px 12px;
}
.news-single ul > li {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #363130;
  margin: 12px 0;
}
.news-single img {
  width: 100%;
  margin: 32px 0;
  border-radius: 12px;
}
.news-single blockquote {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.04);
  padding: 24px 28px 32px;
  position: relative;
}
.news-single blockquote::after {
  content: "";
  width: 4px;
  display: block;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ff3e2d;
  border-radius: 20px;
  position: absolute;
  left: 3px;
  height: 65%;
  top: 50%;
  transform: translateY(-50%);
}
.news-single blockquote p:nth-child(1) {
  margin-bottom: 16px;
}

.news-single blockquote a {
  color: #ff3e2d;
}
.news-single a {
  color: #ff3e2d;
  text-decoration: underline;
}
@media screen and (min-width: 370px) and (max-width: 575px) {
  .news-single p {
    font-size: 14px;
  }
  .news-single ul li {
    font-size: 14px;
  }
  .news-single img {
    height: 250px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .news-single p {
    font-size: 16px;
  }
  .news-single ul li {
    font-size: 16px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1024px) {
  .news-slug-grid .news-single-card > div {
    width: 100%;
    max-width: 100%;
  }
}


.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
  opacity: 0;
  transition: opacity 0.3s;
}

@keyframes slide-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}

</style>
