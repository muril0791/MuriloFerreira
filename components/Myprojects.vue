<template>
  <v-container fluid>
    <v-row class="justify-center text-center my-5">
      <v-col cols="12">
        <v-app-bar-title class="title">Projects</v-app-bar-title>
      </v-col>
    </v-row>
    <v-row class="project-grid pa-3 justify-center">
      <v-col
        v-for="project in displayedProjects"
        :key="project.title"
        cols="12" sm="6" md="4" lg="3"
        class="d-flex flex-column align-center mb-4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            @click="openDialog(project)"
            class="project-card text-center rounded"
            :elevation="hover ? 12 : 2"
          >
            <v-img :src="project.image" class="project-image" aspect-ratio="1">
              <v-overlay v-if="hover" absolute color="black" opacity="0.6">
                <v-card-title class="overlay-title white--text">{{ project.title }}</v-card-title>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-dialog v-model:prop="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          {{ activeProject.title }}
        </v-card-title>
        <v-img :src="activeProject.image" class="dialog-img" aspect-ratio="1"></v-img>
        <v-card-text>
          <a :href="activeProject.link" target="_blank">Link para o projeto</a>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const dialog = ref(false);
const activeProject = ref({});
const projects = ref([
  {
    title: "Game",
    image: "static/v.png",
    link: "https://link_para_jogo1.com",
  },
  {
    title: "Teste1",
    image: "static/v.png",
    link: "https://link_para_website1.com",
  },
   {
    title: "Teste2",
    image: "static/v.png",
    link: "https://link_para_website1.com",
  },
   {
    title: "Teste3",
    image: "static/v.png",
    link: "https://link_para_website1.com",
  },
   {
    title: "Teste4",
    image: "static/v.png",
    link: "https://link_para_website1.com",
  },
   {
    title: "Teste5",
    image: "static/v.png",
    link: "https://link_para_website1.com",
  },
  // ... other projects
]);

const displayedProjects = computed(() => projects.value.slice(0, 12));

const openDialog = (project) => {
  activeProject.value = project;
  dialog.value = true;
};
</script>

<style scoped>
.title {
  font-size: 2em;
  margin-bottom: 16px;
   color: #89c1fa;
}
.project-card {
  width: 100%;
  max-width: 250px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: auto;
}
.project-image {
  width: 100%;
  object-fit: cover;
}
.project-grid {
  gap: 16px;
}
.overlay-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>
