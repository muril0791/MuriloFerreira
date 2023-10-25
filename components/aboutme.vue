<template>
  <v-container class="v-container">
    <v-row class="justify-center text-center">
      <v-col cols="12" md="6">
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
          <!-- ... seu texto ... -->
        </v-card-text>

        <v-btn text color="blue" @click="dialog = true">Mais informações</v-btn>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>Mais Informações</v-card-title>
            <v-card-text>
              <!-- ... seu texto ... -->
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);

const showMoreInfo = () => {
  dialog.value = true;
};
</script>

<style scoped>
.title {
  text-align: center;
}
.v-container {
  padding: 8px;
}
.mx-auto {
  width: 350px;
  background-color: rgb(167, 150, 240) !important;
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
