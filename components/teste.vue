<template>
    <div>
        <h1>{{ t('teste') }}</h1>
    </div>
</template>

<script>
import { translate, state } from '@/Translation/lang';
export default {
    name: 'Teste',

    methods: {
        t(key, ...args) {
            return translate(key, ...args);
        }
    }
}
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>