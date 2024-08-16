<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center my-5">
      <h1 class="text-4xl font-bold text-blue-400">{{ t("projects") }}</h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 justify-center"
    >
      <div
        v-for="project in displayedProjects"
        :key="project.title"
        class="flex flex-col items-center mb-4"
      >
        <div
          @click="openDialog(project)"
          class="project-card relative text-center rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
        >
          <img
            :src="project.image"
            class="project-image w-full h-full object-cover rounded-lg"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          >
            <h2 class="text-white text-lg">{{ project.title}}</h2>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="dialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white rounded-lg overflow-hidden max-w-lg w-full"
      >
        <div class="p-4">
          <button
            @click="dialog = false"
            class="float-right text-gray-400 hover:text-white"
          >
            &times;
          </button>
          <h2 class="text-2xl font-bold mb-4">{{ activeProject.title }}</h2>
          <img
            :src="activeProject.image"
            class="dialog-img w-full h-full object-cover rounded-lg mb-4"
          />
          <p class="mb-4">{{ activeProject.description }}</p>
          <a
            :href="activeProject.link"
            target="_blank"
            class="text-blue-500 underline"
            >{{ t("project_link") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Importando imagens diretamente
import slotImage from "../assets/SlotImage.webp";
import spaceinvadersImage from "../assets/spaceinvadersImage.webp";
import minesImage from "../assets/minesImage.webp";
import snakeGame from "../assets/snake-game.webp";
import memoryMatch from "../assets/memory-match.webp";
import flappyBird from "../assets/flappy-Bird.webp";
import linkTree from "../assets/linktree.webp"
import ExchangeRate from "../assets/exchangeRate.png"
import melhorSlgados from "../assets/melhorSalgados.png"
import { translate, state } from "@/Translation/lang";

const t = (key, ...args) => {
  return translate(key, ...args);
};
const dialog = ref(false);
const activeProject = ref({});
const projects = ref([
  {
    title: "Slot Game",
    image: slotImage,
    link: "https://slot-game-three.vercel.app/",
    description:
      "Projeto desenvolvido para testar os conhecimento em um jogo de aposta no slot machine.",
  },
  {
    title: "Space Invaders",
    image: spaceinvadersImage,
    link: "https://space-invaders-green-omega.vercel.app/",
    description:
      "Copia do conhecido estilo de jogo space invaders.",
  },
  {
    title: "Mines Game",
    image: minesImage,
    link: "https://mines-game-nu.vercel.app/",
    description:
      "Projeto desenvolvido para testar os conhecimento em um jogo de aposta.",
  },
  {
    title: "Snake Game",
    image: snakeGame,
    link: "https://snake-game-seven-pi.vercel.app/",
    description:
      "Snake Game.",
  },
  {
    title: "Memory Match",
    image: memoryMatch,
    link: "https://memory-match-game-jet.vercel.app/",
    description:
      "Jogo da memoria, desenvolvido para desenvolvimento infantil.",
  },
  {
    title: "Flappy Bird",
    image: flappyBird,
    link: "https://flappy-bird-game-gray.vercel.app/",
    description:
      "Jogo copia do conhecido flappy bird",
  },
  {
    title: "Exchange Rate",
    image: ExchangeRate,
    link: "https://exchange-rate-omega.vercel.app/",
    description:
      "Sistema de conversao de moedas, criado para ajudar turistas a reliazar compras e ter nocao de quanto estao gastando na sua moeda nativa.",
  },
  {
    title: "Melhor Salgados",
    image: melhorSlgados,
    link: "https://melhor-salgados-menu.vercel.app/",
    description:
      "Sistema de pedidos para uma empresa de salgados.",
  },
  {
    title: "Link Tree",
    image: linkTree,
    link: "https://my-link-tree-rosy.vercel.app/",
    description:
      "Um simples link Tree.",
  },
]);

const displayedProjects = computed(() => projects.value.slice(0, 12));

const openDialog = (project) => {
  activeProject.value = project;
  dialog.value = true;
};
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 250px;
  margin: auto;
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.text-blue-400 {
  color: #89c1fa;
}

.bg-black {
  background-color: #d8d8d886;
  border-radius: 0.5rem;
}

.bg-white {
  background-color: #fff;
}

.text-white {
  color: #fff;
}

.bg-gray-900 {
  background-color: #1a202c;
}

.text-gray-400 {
  color: #9ca3af;
}

.rounded-lg {
  border-radius: 0.75rem;
}

.transition-opacity {
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.opacity-0 {
  opacity: 0;
}

.hover\:opacity-100:hover {
  opacity: 1;
}
</style>
