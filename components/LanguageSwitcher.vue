<template>
  <div class="language-switcher">
    <img
      src="../assets/Brazil-Flag.png"
      alt="Português"
      @click="setLanguage('pt')"
    />
    <img
      src="../assets/us-flag.png"
      alt="English"
      @click="setLanguage('en')"
    />
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    setLanguage(lang) {
      this.$emit('language-changed', lang);
    }
  }
};
</script>

<style scoped>
.language-switcher img {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
</style>
