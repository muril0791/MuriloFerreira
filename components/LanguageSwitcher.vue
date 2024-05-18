<template>
    <div class="relative inline-block text-left left 0">
        <div>
            <button @click="toggleDropdown" type="button"
                class="inline-flex justify-center w-22 rounded-full text-white pa-1 bg-tranparent text-lg font-medium hover:bg-gray-800 focus:outline-none"
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img :src="currentFlag" class="w-8 h-8 mr-2" />
            </button>
        </div>

        <div v-if="dropdownOpen" :class="dropdownClasses" role="menu" aria-orientation="vertical"
            aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <a v-for="lang in POSSIBLE_LANGUAGES" :key="lang" @click="handleLangChange(lang)"
                    class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem"
                    tabindex="-1">
                    <img :src="getFlag(lang)" class="inline w-5 h-5 mr-2" /> {{ t(lang) }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { POSSIBLE_LANGUAGES, state, translate, updateLang } from '@/Translation/lang';
import ptBrFlag from '@/assets/flags/pt-br.png';
import enUsFlag from '@/assets/flags/us-en.png';

const dropdownOpen = ref(false);
const selectedLang = ref(state.selectedLang);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
    dropdownOpen.value = false;
};

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

const handleLangChange = (lang) => {
    updateLang(lang);
    selectedLang.value = lang;
    safeLocalStorageSetItem('selectedLang', lang);
    closeDropdown();
};

const t = (key, ...args) => {
    return translate(key, ...args);
};

const getFlag = (lang) => {
    switch (lang) {
        case 'pt-br':
            return ptBrFlag;
        case 'en-us':
            return enUsFlag;
        default:
            return '';
    }
};

const currentFlag = computed(() => getFlag(selectedLang.value));

const dropdownClasses = computed(() => {
    return [
        'absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
        'sm:origin-top-right sm:mt-2', // Em telas pequenas (sm), origin-top-right e abre para baixo
        'md:origin-bottom-right md:bottom-12' // Em telas médias (md) ou maiores, origin-bottom-right e abre para cima
    ].join(' ');
});
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
/* Tailwind CSS classes used directly in the template */
</style>
