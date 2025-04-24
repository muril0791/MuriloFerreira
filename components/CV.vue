<template>
  <div class="min-h-screen bg-gray-900 text-white p-8 overflow-auto" >
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-6">{{ t('curriculum_title') }}</h1>

      <div class="flex items-center space-x-4 mb-8">
        <div>
          <h2 class="text-2xl font-semibold">Murilo Ferreira dos Santos</h2>
          <p class="text-gray-400">{{ t('job_title') }}</p>
          <p>Votorantim, São Paulo - Brasil</p>
          <p><a href="mailto:muriloferreira.santos1@gmail.com"
              class="text-blue-400">muriloferreira.santos1@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/muriloferreira-/" class="text-blue-400">LinkedIn</a> | <a
              href="https://github.com/muril0791" class="text-blue-400">GitHub</a></p>
        </div>
      </div>

      <!-- SOBRE MIM -->
      <section class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">{{ t('about_me') }}</h3>
        <p>{{ t('about_me_description') }}</p>
      </section>

      <!-- COMPETÊNCIAS -->
      <section class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">{{ t('skills') }}</h3>
        <h4 class="text-xl font-semibold mb-2">{{ t('game_development') }}</h4>
        <ul class="list-disc pl-6">
          <li>{{ t('game_skill_1') }}</li>
          <li>{{ t('game_skill_2') }}</li>
        </ul>

        <h4 class="text-xl font-semibold mb-2 mt-4">{{ t('web_development') }}</h4>
        <ul class="list-disc pl-6">
          <li>{{ t('web_skill_1') }}</li>
          <li>{{ t('web_skill_2') }}</li>
          <li>{{ t('web_skill_3') }}</li>
        </ul>
      </section>

      <!-- EXPERIÊNCIA -->
      <section class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">{{ t('experience') }}</h3>

        <div class="mb-4">
          <h4 class="text-xl font-semibold">{{ t('experience_jogo_global') }}</h4>
          <p class="text-gray-400">{{ t('experience_jogo_global_date') }}</p>
          <p>{{ t('experience_jogo_global_description') }}</p>
        </div>

        <div class="mb-4">
          <h4 class="text-xl font-semibold">{{ t('experience_tda') }}</h4>
          <p class="text-gray-400">{{ t('experience_tda_date') }}</p>
          <p>{{ t('experience_tda_description') }}</p>
        </div>

        <div>
          <h4 class="text-xl font-semibold">{{ t('experience_solvian') }}</h4>
          <p class="text-gray-400">{{ t('experience_solvian_date') }}</p>
          <p>{{ t('experience_solvian_description') }}</p>
        </div>
      </section>

      <!-- EDUCAÇÃO -->
      <section class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">{{ t('education') }}</h3>
        <ul>
          <li>
            <strong>{{ t('education_anhembi') }}</strong> - {{ t('education_anhembi_date') }}
          </li>
          <li>
            <strong>{{ t('education_facens') }}</strong> - {{ t('education_facens_date') }}
          </li>
        </ul>
      </section>

      <!-- HABILIDADES TÉCNICAS -->
      <section class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">{{ t('technical_skills') }}</h3>
        <ul class="list-disc pl-6">
          <li>{{ t('skill_java') }}</li>
          <li>{{ t('skill_node') }}</li>
          <li>{{ t('skill_python') }}</li>
          <li>{{ t('skill_csharp') }}</li>
          <li>{{ t('skill_vue') }}</li>
        </ul>
      </section>

      <!-- HABILIDADES INTERPESSOAIS -->
      <section>
        <h3 class="text-2xl font-semibold mb-4">{{ t('soft_skills') }}</h3>
        <ul class="list-disc pl-6">
          <li>{{ t('soft_communication') }}</li>
          <li>{{ t('soft_teamwork') }}</li>
          <li>{{ t('soft_problem_solving') }}</li>
          <li>{{ t('soft_creativity') }}</li>
          <li>{{ t('soft_learning') }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { translate } from "@/Translation/lang";

const t = (key, ...args) => {
  return translate(key, ...args);
};
</script>

<style scoped>

</style>
