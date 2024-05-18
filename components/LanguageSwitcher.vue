<template>
    <form style="width: 100%;">
        <label :style="labelStyle">{{ t('language') }}</label>
        <div :style="languageControlStyle">
            <div v-for="lang in POSSIBLE_LANGUAGES" :key="lang">
                <input type="radio" :id="lang" :value="lang" v-model="selectedLang" @change="handleLangChange">
                <label :for="lang">{{ t(lang) }}</label>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { POSSIBLE_LANGUAGES, state, translate, updateLang } from '@/Translation/lang';

const selectedLang = ref(state.selectedLang);

const safeLocalStorageGetItem = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error(`Failed to get item from localStorage: ${key}`, error);
        return null;
    }
};

const safeLocalStorageSetItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error(`Failed to set item in localStorage: ${key}`, error);
    }
};

const labelStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
    paddingLeft: '8px',
};

const languageControlStyle = {
    margin: '0.5em 2.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1.2em',
    marginBottom: '10px',
};

const handleLangChange = () => {
    updateLang(selectedLang.value);
    safeLocalStorageSetItem('selectedLang', selectedLang.value);
};

const t = (key, ...args) => {
    return translate(key, ...args);
};

onMounted(() => {
    const lang = safeLocalStorageGetItem('selectedLang');
    if (lang) {
        selectedLang.value = lang;
        updateLang(lang);
    } else {
        updateLang('pt-br');
        selectedLang.value = 'pt-br';
    }
});

watch(() => state.selectedLang, (newLang) => {
    selectedLang.value = newLang;
});
</script>

<style scoped>
input[type="radio"] {
    margin-right: 10px;
}
</style>
