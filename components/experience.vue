<template>
  <v-container>
     <v-app-bar-title class="title">Experiences</v-app-bar-title>
    <v-row>
      <v-col class="custom-timeline">
        <v-timeline direction="horizontal">
          <v-timeline-item
            v-for="experience in experiences"
            :key="experience.year"
            :color="experience.color"
          >
            <template v-slot:opposite>
              {{ experience.year }}
            </template>
            <v-card  :color="`${experiences.colors}`">
              <v-card-title :color="experience.color" class="white--text">
                {{ experience.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ experience.company }}
              </v-card-subtitle>
              <v-card-text>
                {{ experience.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          year: 2020,
          title: "Desenvolvedor Java Jr",
          company: "EDS Sitemas",
          description: "Trabalhei em sistemas simples na linguame Java",
          color: "blue",
        },
        {
          year: 2021,
          title: "Desenvolvedor Front-end Jr",
          company: "Solvian IOT",
          description: "Trabalhei com Vue.js e Ruby on rails, em sistemas de controle de sensores e desenvolvendo novas features",
          color: "blue",
        },
        {
          year: 2022,
          title: "Desenvolvedor Front-end Jr/Pleno",
          company: "TDA Dev",
          description: "Trabalhei com Vue.js no desenvolvimentos de um backoffice para controle de jogos online no estilo gambling",
          color: "blue",
        },
        {
          year: 2023,
          title: "Desenvolvedor Front-end Pleno",
          company: "Jogo Global",
          description: "Trabalhei com Vue.js, React.js, Pixi.js e outros. Desenvolvedor de jogos para casinos online, como crash games, mines e double",
          color: "blue",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 2em;
  margin-bottom: 26px;
  color: #2c3e50;
  text-align: center;
}
.custom-timeline {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
