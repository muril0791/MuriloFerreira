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
          <div
            :class="`headline font-weight-bold text--${year.colors}`"
          >{{ year.year }}</div>
        </template>
        <v-card
          :color="`${year.colors}`"
          class="elevation-2 mb-4"
        >
          <v-card-title
            :color="`${year.colors} `"
            class="headline font-weight-bold"
          >{{ year.title }}</v-card-title>
          <v-card-text>{{ year.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
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
    ],
  }),
};
</script>

<style scoped>
.v-div {
  justify-content: center;
  display: flex;
  align-content: center;
  width: 100vw;
}
.headline {
  font-size: 1.5rem;
}
</style>
