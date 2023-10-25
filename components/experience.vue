<template>
  <v-container fluid>
    <v-row class="justify-center text-center my-5">
      <v-col cols="12">
        <div class="display-2">Experience</div>
      </v-col>
    </v-row>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.colors"
        small
        fill-dot
      >
        <template v-slot:opposite>
          <div :class="`headline font-weight-bold text--${year.colors}`">
            {{ year.year }}
          </div>
        </template>
        <h2 :style="{ color: year.colors }" class="headline font-weight-bold">
          {{ year.title }}
        </h2>
        <div>{{ year.text }}</div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script setup >
import { ref } from 'vue';
const years = ref([
  {
        colors: "cyan",
        year: "2017",
        title: "Faculdade",
        text: "asdasd",
      },
      {
        colors: "green",
        year: "2020",
        title: "EDS sistemas",
        text: "asdasd",
      },
      {
        colors: "pink",
        year: "2021",
        title: "solvian",
        text: "asdasd",
      },
      {
        colors: "amber",
        year: "2022",
        title: "TDA DEV",
        text: "asdasd",
      },
      {
        colors: "orange",
        year: "2023",
        title: "Jogo Global",
        text: "asdasd",
      },
]);

</script>


<style scoped>
.headline {
  font-size: 1.5rem;
}
</style>
