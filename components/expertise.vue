<template>
  <v-container fluid>
    <v-row class="text-center mb-5">
      <v-col>
       <v-app-bar-title class="title">Expertise</v-app-bar-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name" cols="12" sm="6" md="4" class="d-flex flex-column align-center justify-center mb-4">
        <div class="font-weight-bold">{{ skill.name }}</div>
        <v-progress-circular
          :rotate="-90"
          :size="progressSize"
          :width="15"
          :model-value="getLevelValue(skill.level)"
          :color="skill.color"
        >
          {{ skill.level }}
        </v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import skills from '../skills';  // Ajuste o caminho conforme necessário

export default {
  name: "Expertise",
  data() {
    return {
      skills
    };
  },
  setup() {
    const progressSize = ref(70);  

    onMounted(() => {
      if (process.client) {
        const isLargeScreen = window.matchMedia('(min-width: 1200px)').matches;
        progressSize.value = isLargeScreen ? 100 : 70;
      }
    });

    function getLevelValue(level) {
      const levelValue = typeof level === 'number' && level <= 5 && level >= 0 ? level * 20 : 0;
      return levelValue;
    }

    return {
      progressSize,
      getLevelValue
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 2em;
  margin-bottom: 16px;
  color: #2c3e50;
}
.font-weight-bold {
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 10px;
}
</style>
