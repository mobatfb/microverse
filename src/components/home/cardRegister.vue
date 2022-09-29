<template>
  <div style="width: 95%">
       <v-icon class="pa-3" large>mdi-account-plus</v-icon>
        <v-text-field
          v-model="form.username"
          style="width: 50%"
          label="Usuario"
          placeholder="usuario"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          style="width: 50%"
          label="Correo"
          placeholder="correo electronico"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          style="width: 50%"
          label="Contraseña"
          placeholder="contraseña"
          outlined
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="form.repassword"
          style="width: 50%"
          label="Repetir contraseña"
          placeholder="repetir contraseña"
          outlined
          type="password"
        ></v-text-field>
        <span>{{sms}}</span>
        <br />
        <v-btn class="ma-3" color="blue" text @click="registerUser(form)"><h2>CREAR</h2></v-btn>
        <br />
    <br />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    propItems: { type: Array },
  },
  data() {
    return {
      form:{},
      sms:"",
      selected: {},
    };
  },
  methods: {
    btnPlay(txt) {
      this.$emit("search", txt);
    },
    async registerUser() {
      this.sms=""
      if (this.form.password!=this.form.repassword) {
        this.sms="Las contraseñas no coinciden"
        return
      }
      this.$http
        .post("/createuser", this.form)
        .then((res) => {
          if (res.data) {
            if (res.data.user) {
              this.form={}
                      this.$router.push({ path: '/user' })
            } else {
      this.sms=res.data.message
              // this.$function["alertIni"]("warning", res.data.message);
            }
          }
        })
        .catch((err) => {
          err = "";
          this.$function["alertIni"]("error", "Ha ocurrido un error" + err);
        })
        .finally(() => {
          this.btnDisable = false;
        });
    },
    login() {
      if (this.data.username == this.users[0].username) {
        if (this.data.password == this.users[0].password) {
          alert("master");
          this.$router.push({ path: '/master' })
          return;
        }else{
          alert("noClave");

        }
      }else{
        alert("Guest");
        this.$router.push({ path: '/user' })
      }
    },
    btnVisit(aux) {
      this.$router.push({ name: aux });
    },
  },
};
</script>

<style>
.cardBy {
  -webkit-text-stroke: 0.8px black;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: 500ms linear;
}
.cardBy:hover {
  background-color: rgba(0, 0, 0, 0.496);
}
</style>