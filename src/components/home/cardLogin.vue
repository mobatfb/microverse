<template>
  <div style="width: 95%">
       <v-icon class="pa-3" large>mdi-account</v-icon>
        <v-text-field
          v-model="data.username"
          style="width: 50%"
          label="Usuario"
          placeholder="usuario"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="data.password"
          style="width: 50%"
          label="Contraseña"
          placeholder="contraseña"
          outlined
          type="password"
        ></v-text-field>
        <br />
        <v-btn class="ma-3" color="blue" text @click="login(data)"><h2>ACCEDER</h2></v-btn>
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
      data:{},
      users: [
        {
          username: "juan",
          password: "12345",
          active: false,
        },
        {
          username: "pedro",
          password: "12345",
          active: false,
        },
      ],
      selected: {},
    };
  },
  methods: {
    btnPlay(txt) {
      this.$emit("search", txt);
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