<template>
  <v-footer id="foot" padless fixed class="flex">
    <v-row>
      <v-col style="padding-left: 20px"  cols="12" lg="4" md="4">
        powered by:<br>
        <strong
          >{{ this.$appInfo.autor }} — {{ new Date().getFullYear() }}</strong
        >
      </v-col>
      <v-col cols="12" lg="4" md="4">
        <center>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </center>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods:{
    btnBrindar(){
      this.$func.openDialog("login")
    }
  }
};
</script>

<style>
 .btnBrindar{
  margin: 3px;
  border: solid 3px blue;
  float: right;
}
#foot {
  background-color: var(--v-primary-base);
}
/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .btnBrindar{
  margin: 3px;
  border: solid 3px rosybrown;
}
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}


</style>