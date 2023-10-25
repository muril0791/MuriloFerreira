<template>
  <div class="clock">
    {{ currentTime }}
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString()
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
};
</script>

<style scoped>
.clock {
  font-size: 1.2em;
}
</style>
