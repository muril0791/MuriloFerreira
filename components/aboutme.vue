<template>
  <v-div class="v-div">
    <v-app-bar-title class="title">About me</v-app-bar-title>
    <v-avatar class="avatar" color="primary" size="250">
      <img src="../assets/MyPic.jpeg" />
    </v-avatar>
    <v-list-item
      class="text-white"
      title="Marcus Obrien"
      subtitle="Network Engineer"
    ></v-list-item>

    <v-card-subtitle class="pt-0">Game Developer</v-card-subtitle>

    <v-card-text>
      Olá! Meu nome é Murilo e sou Desenvolvedor. Tenho uma paixão por
      Tecnologia e tenho experiência trabalhando com "Vue.js, Vuetify, Nuxt,
      React, Java, etc" Quando não estou trabalhando, gosto de jogar,
      desenvolver algumas coisas, estudar novas tecnologias. Estou sempre
      buscando novos desafios e oportunidades para crescer e aprender mais!
    </v-card-text>

    <v-btn text color="blue" @click="showMoreInfo">Mais informações</v-btn>
  </v-div>
</template>

<script>
export default {
  name: "AboutMe",
  methods: {
    showMoreInfo() {
      alert("Aqui você pode adicionar mais informações ou links relacionados!");
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.v-div {
  padding: 8px;
}
.mx-auto {
  width: 350px;
  background-color: rgb(167, 150, 240) !important;
}

.img {
  border-radius: 50%;
  text-align: center;
}
.avatar {
  margin: 10px;
}
.avatar > img {
  width: 250px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
