<template>
  <div class="startView">
   <center>
    <h3 style="color:white">USER VIEW</h3>
    <v-card style="width: 800px; height: 800px;">

</v-card>
   </center>
    <br />
  </div>
</template>
<script>
export default {
  components: {
  },
  name: "user",
  data() {
    return {
      showMision: false,
      infoCard: {
        active: false,
        title: "",
        data: null,
        news: true,
        business: false,
        login: false,
      },
      dialog:{},
      searchText: "",
      imgMoba: require("@/assets/img/business/moba.png"),
      selected: {},
    
    };
  },
  mounted() {
    if (window.screen.width < 800) {
      this.showMision = true;
    }
    if (this.$route) this.route = this.$route.query.redirect;
  },
  created() {
    this.$func.openDialog = this.openDialog;
    this.openDialog("news", { name: "dfdf" });
  },
  computed: {},
  methods: {
    close() {
      this.dialog.active = false;
      this.dialog.news = false;
      this.dialog.business = false;
      this.dialog.login = false;
    },
    search(text) {
      this.searchText = text;
    },
    closeMision() {
      this.showMision = false;
    },
    openDialog(aux, data) {
      this.dialog.data = data;
      this.close();
      switch (aux) {
        case "news":
          this.dialog.title = "Noticias";
          this.dialog.news = true;
          break;
        case "business":
          this.dialog.title = "Negocios";
          this.dialog.business = true;
          break;
        case "login":
          this.dialog.title = "Ingresar / Iniciar Sesión";
          this.dialog.login = true;
          break;
        default:
          break;
      }
      this.dialog.active = true;
    },
  },
};
</script>

<style scoped>
.startView {
  height: 100%;
  width: 100%;
}
.col1 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4%;
}
.col2 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  left: 10px;
  position: relative;
}
</style>
