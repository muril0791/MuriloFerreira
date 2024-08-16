<template>
  <div class="container mx-auto px-6 py-8 ">
    <h1 class="text-4xl font-bold mb-6 text-center text-blue-400">Experiences</h1>
    <div class="overflow-x-auto">
      <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <div v-for="(experience, index) in experiences" :key="experience.year" class="timeline-item flex-shrink-0"
          :class="index % 2 === 0 ? 'order-1 lg:order-none' : 'order-2 lg:order-none'">
          <div class="timeline-opposite mb-2 text-gray-600 text-center">
            {{ experience.year }}
          </div>
          <div
            class="timeline-content bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer max-w-full"
            :class="experience.color">
            <h3 class="text-lg font-bold mb-2 text-white">{{ experience.title }}</h3>
            <h4 class="text-md mb-2 text-gray-800">{{ experience.company }}</h4>
            <p class="text-sm text-white-600 break-words max-w-full">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          year: 2020,
          title: "Desenvolvedor Java Jr",
          company: "EDS Sistemas",
          description: "Trabalhei em sistemas simples na linguagem Java",
          color: "bg-blue-500",
        },
        {
          year: 2021,
          title: "Desenvolvedor Front-end Jr",
          company: "Solvian IOT",
          description: "Trabalhei com Vue.js e Ruby on Rails, em sistemas de controle de sensores e desenvolvendo novas features",
          color: "bg-green-500",
        },
        {
          year: 2022,
          title: "Desenvolvedor Front-end Jr/Pleno",
          company: "TDA Dev",
          description: "Trabalhei com Vue.js no desenvolvimento de um backoffice para controle de jogos online no estilo gambling",
          color: "bg-red-500",
        },
        {
          year: 2023,
          title: "Desenvolvedor Front-end Pleno",
          company: "Jogo Global",
          description: "Trabalhei com Vue.js, React.js, Pixi.js e outros. Desenvolvedor de jogos para casinos online, como crash games, mines e double",
          color: "bg-purple-500",
        },
      ],
    };
  },
};
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
  /* Tailwind blue-500 */
}

.bg-green-500 {
  background-color: #10b981;
  /* Tailwind green-500 */
}

.bg-red-500 {
  background-color: #ef4444;
  /* Tailwind red-500 */
}

.bg-purple-500 {
  background-color: #8b5cf6;
  /* Tailwind purple-500 */
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
