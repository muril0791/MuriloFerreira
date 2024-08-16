<template>
  <footer class="bg-gray-800 text-center flex flex-col items-center p-4 mt-0">
    <div class="flex space-x-4 mb-2">
      <a v-for="icon in icons" :key="icon.id" :href="icon.link" target="_blank" class="text-white hover:text-gray-400">
        <i :class="['mdi', icon.name, 'text-2xl']"></i>
      </a>
    </div>
    <div class="w-full border-t border-gray-700 my-2"></div>
    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Murilo</strong>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 1, name: 'mdi-whatsapp', link: 'https://wa.me/5515981040567' },
        { id: 3, name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/murilo-ferreira-21557519b/' },
        { id: 4, name: 'mdi-instagram', link: 'https://www.instagram.com/murilo.ferreira._/' },
      ],
    };
  },
};
</script>

<style scoped>
.text-2xl {
  font-size: 1.5rem;
}
</style>
