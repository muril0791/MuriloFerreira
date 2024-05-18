<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-5">
      <h1 class="text-4xl font-bold text-blue-400">{{ t('skills') }}</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center mb-4">
        <div class="font-bold text-lg mb-2">{{skill.name}}</div>
        <div class="relative flex items-center justify-center"
          :style="{ width: progressSize + 'px', height: progressSize + 'px' }">
          <svg :width="progressSize" :height="progressSize">
            <circle class="text-white-300" :stroke-width="15" :r="(progressSize / 2) - 15" :cx="progressSize / 2"
              :cy="progressSize / 2" fill="none" stroke="currentColor" />
            <circle :stroke="getColor(skill.color)" :stroke-width="15" :r="(progressSize / 2) - 15"
              :cx="progressSize / 2" :cy="progressSize / 2" fill="none"
              stroke-dasharray="calc(2 * 3.141592 * (progressSize / 2 - 15))"
              :stroke-dashoffset="`calc(2 * 3.141592 * (progressSize / 2 - 15) * (1 - ${getLevelValue(skill.level) / 100}))`"
              stroke-linecap="round" :style="{ transition: 'stroke-dashoffset 1s ease-in-out' }" />
          </svg>
          <span class="absolute text-2xl font-semibold text-white-700">{{ skill.level }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { translate, state } from '@/Translation/lang';
import skills from '../skills';

const t = (key, ...args) => {
  return translate(key, ...args);
};

const progressSize = ref(70);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const isLargeScreen = window.matchMedia('(min-width: 1200px)').matches;
    progressSize.value = isLargeScreen ? 100 : 70;
  }
});

function getLevelValue(level) {
  const levelValue = typeof level === 'number' && level <= 5 && level >= 0 ? level * 20 : 0;
  return levelValue;
}

function getColor(colorName) {
  const colors = {
    green: '#10B981',
    blue: '#3B82F6',
    orange: '#F97316',
    yellow: '#F59E0B',
  };
  return colors[colorName] || '#374151';
}

watch(() => state.selectedLang, () => {
});

</script>

<style scoped>
.font-bold {
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 10px;
}

.text-blue-400 {
  color: #89c1fa;
}

.text-gray-300 {
  color: #d1d5db;
}

.text-gray-700 {
  color: #374151;
}
</style>
