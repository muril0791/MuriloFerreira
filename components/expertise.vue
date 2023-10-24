<template>
  <v-container fluid>
    <v-row class="justify-center text-center mb-5">
      <v-col cols="12">
        <div class="display-2">Expertise</div>
      </v-col>
    </v-row>
    <v-row v-for="skill in skills" :key="skill.name" class="mb-5 pa-3 rounded-lg elevation-2" :class="`background-color-${skill.color}`">
      <v-col cols="12" md="3" class="d-flex align-center justify-center">
        {{ skill.name }}
      </v-col>
      <v-col cols="12" md="3" class="d-flex align-center justify-center">
        <!-- <v-icon large :color="skill.color">{{ skill.icon }}</v-icon> -->
      </v-col>
      <v-col cols="12" md="6">
        <v-slider
          :color="skill.color"
          :max="5"
          :value="skill.level"
          readonly
          thumb-label="always"
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Expertise",
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.rounded-lg {
  border-radius: 12px !important;
}
.background-color-{
background: grey;
}
</style>
