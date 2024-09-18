<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center my-5">
      <h1 class="text-4xl font-bold text-blue-400">{{ t("projects") }}</h1>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="project in displayedProjects"
        :key="project.title"
        class="mb-4 w-full"
      >
        <div
          @click="openDialog(project)"
          class="relative rounded-lg transition-transform transform hover:scale-105 cursor-pointer w-full"
        >
          <div class="overflow-hidden rounded-lg">
            <img
              :src="project.image"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          >
            <h2 class="text-white text-lg text-center px-2">
              {{ project.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="dialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
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
            class="w-full h-auto object-cover rounded-lg mb-4"
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
import linkTree from "../assets/linktree.webp";
import ExchangeRate from "../assets/exchangeRate.png";
import melhorSalgados from "../assets/melhorSalgados.webp";
import { translate } from "@/Translation/lang";

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
      "Projeto desenvolvido para testar os conhecimentos em um jogo de aposta no slot machine.",
  },
  {
    title: "Space Invaders",
    image: spaceinvadersImage,
    link: "https://space-invaders-green-omega.vercel.app/",
    description: "Cópia do conhecido estilo de jogo Space Invaders.",
  },
  {
    title: "Mines Game",
    image: minesImage,
    link: "https://mines-game-nu.vercel.app/",
    description:
      "Projeto desenvolvido para testar os conhecimentos em um jogo de aposta.",
  },
  {
    title: "Snake Game",
    image: snakeGame,
    link: "https://snake-game-seven-pi.vercel.app/",
    description: "Snake Game.",
  },
  {
    title: "Memory Match",
    image: memoryMatch,
    link: "https://memory-match-game-jet.vercel.app/",
    description:
      "Jogo da memória, desenvolvido para desenvolvimento infantil.",
  },
  {
    title: "Flappy Bird",
    image: flappyBird,
    link: "https://flappy-bird-game-gray.vercel.app/",
    description: "Jogo cópia do conhecido Flappy Bird.",
  },
  {
    title: "Exchange Rate",
    image: ExchangeRate,
    link: "https://exchange-rate-omega.vercel.app/",
    description:
      "Sistema de conversão de moedas, criado para ajudar turistas a realizar compras e ter noção de quanto estão gastando na sua moeda nativa.",
  },
  {
    title: "Melhor Salgados",
    image: melhorSalgados,
    link: "https://melhor-salgados-menu.vercel.app/",
    description: "Sistema de pedidos para uma empresa de salgados.",
  },
  {
    title: "Link Tree",
    image: linkTree,
    link: "https://my-link-tree-rosy.vercel.app/",
    description: "Um simples Link Tree.",
  },
]);

const displayedProjects = computed(() => projects.value);

const openDialog = (project) => {
  activeProject.value = project;
  dialog.value = true;
};
</script>

<style scoped>
/* Removemos estilos fixos e deixamos o Tailwind controlar a responsividade */
</style>
