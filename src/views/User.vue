<template>
  <div class="startView">
    <center>
      <h3 style="color: white">USER VIEW</h3>
      <v-card style="width: 800px; height: 800px">
        <h3>{{ user.name }} => (x={{ user.pos.x }}, y={{ user.pos.y }})</h3>
        <h3>basedata => (x={{ posShow.x }}, y={{ posShow.y }})</h3>
        <v-btn
          dark
          :style="{
            width: '50px',
            height: '50px',
            position: 'absolute',
            left: user.pos.x + 'px',
            bottom: user.pos.y + 'px',
          }"
        ></v-btn>
      </v-card>
    </center>
    <br />
  </div>
</template>
<script>
export default {
  components: {},
  name: "user",
  data() {
    return {
      showMision: false,
     user:{
      name:"",
      username:"",
      pos: { x: 0, y: 0, z: 0 },
      view:""
     },
     posShow: { x: 0, y: 0, z: 0 },
      infoCard: {
        active: false,
        title: "",
        data: null,
        news: true,
        business: false,
        login: false,
      },
      dialog: {},
      searchText: "",
      imgMoba: require("@/assets/img/business/moba.png"),
      selected: {},
    };
  },
  mounted() {
    this.startEngine();
    if (window.screen.width < 800) {
      this.showMision = true;
    }

    if (this.$route) this.route = this.$route.query.redirect;
  },
  created() {
    document.addEventListener("keydown", (event) => {
      this.keypress(event.key.toLowerCase());
    });
    this.$func.openDialog = this.openDialog;
    this.openDialog("news", { name: "dfdf" });
  },
  computed: {},
  methods: {
    test() {
      alert("" + this.$user.id);
    },
    startEngine() {
      this.getUser();
    },
    getUser(){
      this.$http
        .post("/getuser", {id:this.$user.id})
        .then((res) => {
          if (res.data) {
            if (res.data.getted) {
              this.user=res.data.getted
              this.saveSignal()
              this.getSignal()
            } else {
              console.log("sin internet");
            }
          }
        })
        .catch((err) => {
          err = "error";
          console.log("err", err);
        })
        .finally(() => {
          this.btnDisable = false;
        });
    },
    saveSignal() {
      var dataSave={id: this.$user.id,pos:this.user.pos }
      this.$http
        .post("/savesignal", dataSave)
        .then((res) => {
          if (res.data) {
            if (res.data.saved) {
              console.log("saved");
              this.saveSignal()
            } else {
              console.log("nosaved");
            }
          }
        })
        .catch((err) => {
          err = "error";
          console.log("err", err);
        })
        .finally(() => {
          this.btnDisable = false;
        });
    },
    getSignal() {
      this.$http
        .post("/getsignal", {id:this.$user.id})
        .then((res) => {
          if (res.data) {
            if (res.data.getted) {
              this.posShow=res.data.getted.pos
              console.log("get");
              this.getSignal()
            } else {
              console.log("noget");
            }
          }
        })
        .catch((err) => {
          err = "error";
          console.log("err", err);
        })
        .finally(() => {
          this.btnDisable = false;
        });
    },
    keypress(key) {
      console.log("key:", key);
      switch (key) {
        case "a":
          this.user.pos.x -= 10;
          break;
        case "d":
          this.user.pos.x += 10;
          break;
        case "w":
          this.user.pos.y += 10;
          break;
        case "s":
          this.user.pos.y -= 10;
          break;
        default:
          break;
      }
    },
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
