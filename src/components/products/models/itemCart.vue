<template>
  <div class="modelCard">
    <v-icon style="float: right" @click="removeCart(propItem)"
      >mdi-close</v-icon
    >
    <v-row>
      <v-col cols="3" lg="3" md="3" sm="3">
        <v-img
          class="ma-1"
          style="border-radius: 4px"
          :src="propItem.img"
        ></v-img>
      </v-col>
      <v-col>
        <marquee>
          <span
            ><strong>{{ propItem.name }}</strong></span
          >
          <span>
            <br />
            <span>{{ propItem.info }}</span>
          </span>
          <br />
        </marquee>

        <span> valor: ${{ propItem.price }}</span>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <center>
      <v-row>
        <v-col cols="6" lg="6" md="6">
          <span>Cantidad: </span>
          <br />
          <v-icon
            :disabled="propItem.cant == 20"
            @click="
              propItem.cant++;
              calcSubTotal(propItem);
            "
            >mdi-plus-circle</v-icon
          >
          <span class="ml-2 mr-2">{{ propItem.cant }}</span>
          <v-icon
            :disabled="propItem.cant == 1"
            @click="
              propItem.cant--;
              calcSubTotal(propItem);
            "
            >mdi-minus-circle</v-icon
          >
        </v-col>
        <v-col cols="6" lg="6" md="6">
          <span class="mr-1">Total:</span>
          <br />
          <span> ${{ propItem.total }} </span>
        </v-col>
      </v-row>
    </center>
  </div>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {
      subtotal: 0,
    };
  },
  methods: {
    calcSubTotal(aux) {
      var subA = aux.price.split(".")[0] * aux.cant;
      var subB = aux.price.split(".")[1] * aux.cant;
      if (subB > 99) {
        subA += parseInt(subB * 0.01);
        var _subB = "" + subB * 0.01;
        subB = _subB.split(".")[1];
        if (subB > 99) {
          subB = subB[0] + subB[1];
        }
      }
      if (subB == undefined) {
        subB = "00";
      } else if (subB < 10) {
        subB += "0";
      }

      aux.total = subA + "." + subB;
      this.$emit("method", "calculateCart", null);
    },
    removeCart(aux) {
      this.$emit("method", "removeCart", aux);
    },
  },
};
</script>

<style>
.modelCard {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4px;
  margin: 1px;
  padding: 5px;
}

.divItem {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.393);
  margin: 10px;
  cursor: pointer;
}
.divItem:hover {
  transform: scale(1.05);
  border: 1px solid red;
}
.divItemImg {
  background-size: cover;
  border-radius: 15%;
  width: 100%;
  height: 100%;
}

.cardTitle {
  -webkit-text-stroke: 1px black;
  word-break: break-all;
  font-size: 20px;
  position: relative;
}
.cardModel {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  width: 95%;
  height: 80%;
  left: 10px;
  top: 1%;
  position: relative;
}
.divItem {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.393);
  margin: 10px;
}
.cardImg {
  background-size: cover;
  border-radius: 15%;
  width: 60%;
  height: 30%;
}
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

.cardType {
  border: 1px solid red;
}
.cardType:hover {
  transform: scale(1.2);
  border: 1px solid red;
}
/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
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
@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}
@media (min-width: 801px) and (max-width: 1250px) {
}
</style>