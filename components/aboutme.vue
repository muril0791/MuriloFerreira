<template>
  <v-container class="v-container">
    <v-row class="justify-center text-center">
      <v-col cols="12" md="6">
        <v-app-bar-title class="title">About me</v-app-bar-title>
        <v-avatar class="avatar" color="primary" size="250">
          <img src="../assets/MyPic.jpeg" />
        </v-avatar>

        <v-list-item
          color="white"
          title="Murilo Ferreira"
          subtitle="Game Developer"
        ></v-list-item>

        <v-card-text color="white" text--white>
          Olá! Meu nome é Murilo Ferreira e sou um desenvolvedor.
          Tenho uma ampla experiência em desenvolvimento, bem como em
          desenvolver jogos interativos e envolventes. Estou sempre em busca de
          novos desafios e oportunidades para expandir meu conhecimento e
          habilidades.
        </v-card-text>
        <v-btn text color="green-accent-4" variant="outlined" class="mr-2" @click="downloadCV">
          <v-icon>mdi-download</v-icon>
          Baixar CV
        </v-btn>
        <v-btn text color="deep-purple-accent-4" variant="outlined" @click="dialog = true">Mais informações</v-btn>
        <v-dialog v-model="dialog" max-width="900px">
          <v-card>
            <v-card-title>Mais Informações</v-card-title>
            <v-card-text>
              Tenho uma formação sólida em programação e uma paixão por criar
              experiências digitais memoráveis. Além disso, sou bem versado em
              várias linguagens de programação, incluindo Java, C++ e Python.
              Também tenho uma boa compreensão dos princípios de design de
              UX/UI, o que me permite criar interfaces de usuário intuitivas e
              agradáveis.
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col
                  v-for="(skill, index) in skills"
                  :key="index"
                  cols="12"
                  sm="4"
                >
                  <v-chip class="ma-2">{{ skill }}</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-footer fixed class="text-center">
            <v-col class="ma-2 pa-2" cols="12">
              <v-btn icon :href="socialMedia.linkedin" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon :href="socialMedia.github" target="_blank">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-col>
          </v-footer>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
const skills = ref([
  "JavaScript",
  "Vue.js",
  "Networking",
  "Game Development",
  "Java",
  "C++",
  "Python",
  "UX/UI Design",
]);
const socialMedia = ref({
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-profile",
  // ... outros links de redes sociais ...
});

const downloadCV = () => {
  window.open("path/to/your-cv.pdf", "_blank");
};

const showMoreInfo = () => {
  dialog.value = true;
};
</script>

<style scoped>

.title {
  font-size: 2em;
  margin-bottom: 16px;
  color: #89c1fa;
}

.v-container {
  padding: 16px;
}

.avatar {
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.avatar > img {
  width: 250px;
  height: auto;
  border-radius: 50%;
}

.text-white {
  color: #ffffff !important;
}

.v-card-subtitle {
  font-size: 1.2em;
  color: #7f8c8d;
  margin-top: -10px;
}

.v-card-text {
  color: #ffffff;
  margin: 20px 0;
}

.v-btn {
  margin: 10px 0;
}

.v-dialog .v-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.v-footer {
  background-color: #ecf0f1;
}

.social-icons > v-btn {
  margin: 0 5px;
}
</style>
