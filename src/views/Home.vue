<template>
  <div class="startView">
    <center>
      <h4 style="color: white">Seleccione el tipo de servicio requerido</h4>
    <br />
    <v-col class="mediaPc" cols="5" lg="5" md="5" sm="5">
      <center class="formatCard">
        <br />
        <v-row>
          <v-col lg="3" cols="3" md="3"></v-col>
          <v-col lg="6" cols="6" md="6">
        <h1>{{login? "INICIAR SESION": "REGISTRAR"}} </h1>

          </v-col>
          <v-col lg="3" cols="3" md="3">
        <h2 style="color:blue; cursor:pointer;" @click="login=!login">{{login? "REGISTAR": "ACCEDER"}}</h2>

          </v-col>
        </v-row>
        <br />
        <hr />
        <cardLogin v-if="login" />
        <cardRegister v-else/>
      </center>
    </v-col>

        </center>
    <br />
  </div>
</template>
<script>
import cardLogin from "@/components/home/cardLogin";
import cardRegister from "@/components/home/cardRegister";
export default {
  components: {
    cardLogin,
    cardRegister,
  },
  name: "home",
  data() {
    return {
      showMision: false,
      login:true,
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
