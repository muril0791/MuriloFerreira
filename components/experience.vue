<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-4xl font-bold mb-6 text-center text-blue-400">
      Experiences
    </h1>
    <div class="overflow-x-auto">
      <div
        class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0"
      >
        <div
          v-for="(experience, index) in experiences"
          :key="experience.year"
          class="timeline-item flex-shrink-0"
          :class="
            index % 2 === 0 ? 'order-1 lg:order-none' : 'order-2 lg:order-none'
          "
        >
          <div class="timeline-opposite mb-2 text-gray-600 text-center">
            {{ experience.year }}
          </div>
          <div
            class="timeline-content bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer max-w-full"
            :class="experience.color"
          >
            <h3 class="text-lg font-bold mb-2 text-white">
              {{ experience.title }}
              <span
                v-if="experience.flag"
                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500"
              >
                {{ experience.flag }}
              </span>
            </h3>
            <h4 class="text-md mb-2 text-gray-800">{{ experience.company }}</h4>
            <p class="text-sm text-white-600 break-words max-w-full">
              {{ experience.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";
import { translate } from "@/Translation/lang";

const t = (key, ...args) => {
  return translate(key, ...args);
};

const experiences = ref([
{
  year: 2020,
  title: "Junior Java Developer",
  company: "EDS Sistemas",
  description: "I worked on simple time-tracking systems using Java.",
  color: "bg-blue-500",
  flag: "",
},
{
  year: 2021,
  title: "Junior Front-end Developer",
  company: "Solvian IOT",
  description: "I worked with Vue.js and Ruby on Rails on sensor-control and work-order systems, developing new features.",
  color: "bg-green-500",
  flag: "",
},
{
  year: 2022,
  title: "Junior/Mid-level Front-end Developer",
  company: "TDA Dev",
  description: "I used Vue.js to build a back-office for managing online gambling games, creating all screens and controls so future clients could oversee their games.",
  color: "bg-red-500",
  flag: "",
},
{
  year: 2023,
  title: "Mid-level Front-end Developer",
  company: "Jogo Global",
  description: "Working with Vue.js, React.js, Pixi.js and more. I develop online-casino games such as crash, mines and double, and port games in Cocos Creator, with brief exposure to Phaser.js.",
  color: "bg-purple-500",
  flag: "Currently working",
},
]);
</script>

<style scoped>
.container {
  max-width: 100%;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  margin-bottom: 20px;
}

.timeline-opposite {
  font-size: 1em;
  text-align: center;
}

.timeline-content {
  transition: transform 0.3s;
}

.timeline-content:hover {
  transform: scale(1.05);
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-green-500 {
  background-color: #10b981;
}

.bg-red-500 {
  background-color: #ef4444;
}

.bg-purple-500 {
  background-color: #8b5cf6;
}

@media (max-width: 640px) {
  .timeline-item {
    min-width: 100%;
    margin-bottom: 20px;
  }

  .timeline-opposite {
    font-size: 1.25em;
  }
}
</style>
