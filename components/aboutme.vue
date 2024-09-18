<template>
  <div class="text-white min-h-screen flex flex-col items-center py-12">
    <h1 class="text-4xl font-bold text-blue-400 mb-8">{{ t('about_me') }}</h1>
    <div class="w-40 h-40 rounded-full overflow-hidden shadow-md mb-4">
      <img src="../assets/MyPic.jpeg" alt="Murilo Ferreira" class="w-full h-full object-cover" />
    </div>
    <h2 class="text-2xl font-semibold">Murilo Ferreira</h2>
    <p class="text-gray-400 mb-6">{{ t('game_developer') }}</p>
    <p class="text-center px-4 max-w-2xl mb-8">
      {{ t('introduction') }}
    </p>
    <div class="flex space-x-4 mb-4">
      <button @click="dialogCV = true" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        {{ t('view_cv') }}
      </button>
      <button @click="dialog = true" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
        {{ t('more_info') }}
      </button>
    </div>

    <!-- Modal para mostrar as habilidades -->
    <div v-if="dialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white text-black rounded-lg shadow-lg p-6 max-w-lg w-full overflow-auto">
        <h3 class="text-2xl font-semibold mb-4">{{ t('more_info_title') }}</h3>
        <p class="mb-4">{{ t('more_info_description') }}</p>
        <hr class="my-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <span v-for="(skill, index) in skills" :key="index" class="bg-gray-200 text-black px-4 py-2 rounded shadow">
            {{ skill }}
          </span>
        </div>
        <div class="flex justify-end mt-6">
          <button @click="dialog = false" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            {{ t('close') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar o CV em PDF -->
    <div v-if="dialogCV" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-black rounded-lg shadow-lg overflow-auto w-full h-full max-h-full pa-4">
        <CV class="w-full h-auto" />
        <div class="flex justify-end mt-6">
          <button @click="dialogCV = false" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            {{ t('close') }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { translate } from '@/Translation/lang';

const t = (key: string, ...args: any[]) => {
  return translate(key, ...args);
};

const dialog = ref(false);
const dialogCV = ref(false);
const skills = ref<string[]>([
  'JavaScript',
  'Vue.js',
  'Networking',
  'Game Development',
  'Java',
  'C++',
  'Python',
  'UX/UI Design',
]);
</script>

<style scoped>
/* Melhorando a responsividade e ajuste de tela */
.fixed {
  display: flex;
  align-items: center;
  justify-content: center;
}

.overflow-auto {
  overflow: auto;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.max-h-full {
  max-height: 100vh;
}

@media (max-width: 768px) {
  .fixed {
    padding: 1rem;
  }
  
  .w-full, .h-full {
    width: 100%;
    height: 100%;
  }
}

button {
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  filter: brightness(110%);
}

</style>
