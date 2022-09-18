<template>
  <div class="modelCard">
    <marquee>
      <span
        ><strong>{{ propItem.name }}</strong></span
      >
    </marquee>
    <v-img style="border-radius: 4px;height:150px" :src="propItem.img"></v-img>
    <span>
      <span
        style="color: blue; cursor: pointer"
        @click="$emit('method', 'openDialogPreview', propItem)"
        >ver detalles</span
      >
    </span>
    <v-divider></v-divider>
    <span>${{ propItem.price }}</span>
    <v-icon style="float: right" @click="!propItem.inCart? $emit('method', 'addCart', propItem): null">{{!propItem.inCart? "mdi-cart" : "mdi-check"}}</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {};
  },
  methods: {
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
.divText {
  height: 100%;
  border-radius: 1%;
  background-color: rgba(0, 0, 0, 0.393);
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