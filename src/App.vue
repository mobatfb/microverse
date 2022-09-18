<template>
  <div id="app">
    <cnavbar style="position: fixed"></cnavbar>
    <v-toolbar id="nav" dense width="100%">
      <v-spacer></v-spacer>
    </v-toolbar>
    <div class="loader" v-if="$store.getters.loader">
      <div class="d-flex justify-center align-center" style="height: 100vh">
        <Loader show message="''" />
      </div>
    </div>
    <v-app v-else>
      <v-content v-if="$store.getters.isAuth">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12 pt-0">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      <div v-else>
        <!-- <component v-bind:is="background[Math.floor(Math.random() * background.length)+5].url" -->
        <component
          v-bind:is="background[Math.floor(Math.random() * background.length)].url"
          :style="{
            background: this.$route.params.id
              ? this.$color.primary
              : this.$color.secondary,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }"
        >
        </component>
        <div style="height: 100%; width: 100%; position: fixed">
          <router-view />
          <a
            href="https://onaircode.com/html-css-background-animation-examples/"
            target="_blank"
            style="position: absolute; top: 0%; right: 0%; font-size:8px"
            >backgroundby:onaircode.com</a
          >
        </div>
      </div>
    </v-app>
    <cfooter></cfooter>
  </div>
</template>
<script>
import Loader from "./components/System/Loader";
import cnavbar from "./components/default/navbar";
import cfooter from "./components/default/footer";
export default {
  components: {
    Loader,
    cnavbar,
    cfooter,
  },
  name: "App",
  metaInfo: {
    title: "MOBA",
    titleTemplate: "%s  | technology development agency",
    htmlAttrs: {
      lang: "es-EC",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "MOBA | technology development agency",
      },
      {
        name: "keywords",
        content: "services, word, manager, moba, business",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        property: "og:title",
        content: "MOBA | technology development agency",
      },
      { property: "og:site_name", content: "MOBA" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
  data() {
    return {
      background: [
        {
          name: "Pure HTML CSS Animated Background",
          url: () => import("./components/System/background0"),
        },
        {
          name: "CSS Background Animation",
          url: () => import("./components/System/background1"),
        },
        {
          name: "Parallax Star Background in CSS",
          url: () => import("./components/System/background2"),
        },
        {
          name: "Sepion CSS Background Animation",
          url: () => import("./components/System/background3"),
        },
        {
          name: "HTML CSS Fireflies",
          url: () => import("./components/System/background4"),
        },
        { name: "null", url: () => import("./components/System/background5") },
      ],
      //imgInfo: require("@/assets/images/default/info.png"),
      auth: false,
    };
  },

  beforeMount: async function () {},
  beforeCreate() {},
  created() {},
  mounted() {
     this.genVisit();
  },
  methods: {
    async genVisit() {
      this.$http
        .post("/genvisit")
        .then(() => {
        })
        .finally();
    },
  },
};
</script>
<style>
.formatCard {
  background-color: rgba(255, 255, 255, 0.815);
  border-radius: 10px;
  padding: 3px;
}
.alert-family {
  font-family: Quicksand, sans-serif;
  line-height: 1.5;
  font-size: 16px !important;
  font-weight: 400;
  color: rgba(0, 255, 255, 0.479);
  padding: 0.7rem 1.5rem !important;
}
  /* ADAPTACION SIDE LEFT*/
@media (min-height: 201px) and (max-height: 400px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
       .windowsHA {
   height: 260px;
  }
  .windowsHB {
   height: 150px;
  }
    .windowsHC {
   height: 200px;
  }
  .windowsLA {
   height: 500px;
  }
  .windowsLB {
   height: 340px;
  }
}
@media (min-height: 401px) and (max-height: 600px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
       .windowsHA {
   height: 430px;
  }
  .windowsHB {
   height: 310px;
  }
    .windowsHC {
   height: 380px;
  }
  .windowsPA {
   height: 400px;
  }
  .windowsPB {
   height: 280px;
  }
    .windowsPC {
   height: 380px;
  }
   .windowsxLA {
   height: 450px;
  }
  .windowsxLB {
   height: 350px;
  }
}
@media (min-height: 601px) and (max-height: 799px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .windowsHA {
   height: 550px;
  }
  .windowsHB {
   height: 400px;
  }
    .windowsHC {
   height: 470px;
  }
.windowsPA {
   height: 500px;
  }
  .windowsPB {
   height: 320px;
  }
    .windowsPC {
   height: 450px;
  }
   .windowsxLA {
   height: 500px;
  }
  .windowsxLB {
   height: 400px;
  }
}
@media (min-height: 800px) and (max-height: 1000px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
     .windowsHA {
   height: 750px;
  }
  .windowsHB {
   height: 650px;
  }
    .windowsHC {
   height: 680px;
  }
 .windowsPA {
   height: 680px;
  }
  .windowsPB {
   height: 520px;
  }
    .windowsPC {
   height: 630px;
  }
    .windowsxLA {
   height: 700px;
  }
  .windowsxLB {
   height: 600px;
  }
}
@media (min-height: 1001px) and (max-height: 1200px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
      .windowsHA {
   height: 950px;
  }
  .windowsHB {
   height: 900px;
  }
    .windowsHC {
   height: 900px;
  }
  .windowsPA {
   height: 850px;
  }
  .windowsPB {
   height: 720px;
  }
    .windowsPC {
   height: 825px;
  }
    .windowsxLA {
   height: 950px;
  }
  .windowsxLB {
   height: 820px;
  }
}
@media (min-height: 1201px) and (max-height: 1400px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
       .windowsHA {
   height: 1150px;
  }
  .windowsHB {
   height: 1000px;
  }
    .windowsHC {
   height: 1000px;
  }
  .windowsPA {
   height: 1050px;
  }
  .windowsPB {
   height: 920px;
  }
    .windowsPC {
   height: 1025px;
  }
    .windowsxLA {
   height: 1100px;
  }
  .windowsxLB {
   height: 950px;
  }
}
  /* Media Query For different screens */
@media (min-width: 100px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .textPhone {
   font-size: 10pt;
  }
  .mediaPhone {
    display: block;
  }
  .mediaPc {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .mediaPhone {
    display: block;
  }
  .mediaPc {
    display: none;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .mediaPhone {
    display: block;
  }
  .mediaPc {
    display: none;
  }
}
@media (min-width: 801px) and (max-width: 1250px) {
  /* portrait pc, portrait iPad*/
  .mediaPhone {
    display: block;
  }
  .hideMedia {
    display: none;
  }
  .mediaPc {
    display: none;
  }
}
@media (min-width: 1251px) and (max-width: 3250px) {
  /*2k */
  .mediaPhone {
    display: none;
  }
  .mediaPc {
    display: block;
  }
  .hideMediaPc {
    display: none;
  }
  .showMediaPc {
    display: block;
  }
}
</style>
