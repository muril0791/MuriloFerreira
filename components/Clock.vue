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
      currentTime: this.getCurrentTimeWithTimeZone(),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTimeWithTimeZone();
    }, 1000);
  },
  methods: {
    getCurrentTimeWithTimeZone() {
      const options = {
        timeZoneName: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      return new Date().toLocaleTimeString([], options);
    }
  }
};
</script>

<style scoped>
.clock {
  font-size: 1.2em;
}
</style>
