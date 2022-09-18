<template>
  <div class="startView">
    <center>
    <v-row>
      <v-col lg="3" cols="3" md="3">
    <h3 style="color:white">LIST USER ACTIVE</h3>
        
        <v-card style="width: 800px; height: 800px;">

</v-card>
      </v-col>
      <v-col lg="6" cols="6" md="6">
    <h3 style="color:white">MASTER VIEW</h3>

        <v-card style="width: 800px; height: 800px;">

</v-card>
</v-col>
<v-col lg="3" cols="3" md="3">
  <h3 style="color:white">LIST DESCONECT</h3>

  <v-card style="width: 800px; height: 800px;">

</v-card>
</v-col>
    </v-row>
   
   </center>
    <br />
  </div>
</template>
<script>
export default {
  components: {
  },
  name: "master",
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
      items: [
{
          img: require("@/assets/img/services/stock.jpg"),
          title: "Venta de productos",
          avalible: "Ecuador",
          by: "moba",
          info: "Conoce nuestro stock a buenos precios y al por mayor.",
          ubication: "Ecuador-El Oro-Machala",
          path: "Productos",
        },
        {
          img: require("@/assets/img/services/adminSystem.jpg"),
          title: "Sistemas Administrativos",
          avalible: "Disponible",
          by: "moba",
          info: "Brindamos capacitación tecnología en  el uso de herramientas de gestión y administración.",
          ubication: "Ecuador-El Oro-Machala",
          path: "Sistemas",
        },
        {
          img: require("@/assets/img/services/educacion.jpg"),
          title: "Plataformas y sitios web",
          avalible: "Disponible",
          by: "moba",
          info: "Brindamos servicios de desarrollo para que tengas tu propia página web administrativa y publicista.",
          ubication: "Ecuador-El Oro-Machala",
          path: "Plataformas",
        },
        {
          img: require("@/assets/img/services/hogar.jpg"),
          title: "Aplicaciones móviles",
          avalible: "Disponible",
          by: "moba",
          info: "Desarrollamos aplicaciones móviles a la medida de tu necesidad.",
          ubication: "Ecuador-Azuay-Cuenca",
          path: "Aplicaciones",
        },
        {
          img: require("@/assets/img/services/transporte.jpg"),
          title: "Capacitación Tecnológica",
          avalible: "Disponible",
          by: "moba",
          info: "Brindamos capacitación tecnológica en  el uso de herramientas de gestión y administración.",
          ubication: "Ecuador-Loja-Loja",
          path: "Capacitacion",
        },
        {
          img: require("@/assets/img/services/educacion.jpg"),
          title: "Marketing publicitario",
          avalible: "Disponible",
          by: "moba",
          info: "Con la publicidad tu negocio podrá tener un mayor alcance de clientela y maximizar tus ventas.",
          ubication: "Ecuador-Loja-Loja",
          path: "Marketing",
        },
        {
          img: require("@/assets/img/services/produccion.jpg"),
          title: "Equipos informáticos",
          avalible: "Disponible",
          by: "moba",
          info: "Cotizamos equipos informáticos con la garantía de brindarte el equipo adecuado para tu negocio.",
          ubication: "Ecuador-Loja-Loja",
          path: "Equipos",
        },
        {
          img: require("@/assets/img/services/tecnologia.jpg"),
          title: "Mantenimiento y soporte técnico.",
          avalible: "Disponible",
          by: "moba",
          info: "Realizamos servicios de mantenimiento y reparación de diversos tipos de equipos y componentes tecnológicos.",
          ubication: "Ecuador-Loja-Loja",
          path: "Mantenimiento",
        },

      ],
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
