<template>
  <v-app :dark="darkMode">
    <div class="sticky-container">
      <v-icon
        class="icon-menu"
        v-if="isXs"
        @click="drawer = !drawer"
        color="white"
        icon="home"
        >mdi-menu</v-icon
      >
      <v-tabs
        class="sticky-tabs"
        v-if="!isXs"
        v-model="tab"
        color="deep-purple-accent-4"
        fixed-tabs
      >
        <LanguageSwitcher @language-changed="changeLanguage" />
        <!-- <v-switch
          v-model="darkMode"
          label="Dark Mode"
          @change="toggleDarkMode"
        ></v-switch> -->

        <v-tab value="one" @click="scrollTo('sobre-mim')">Sobre Mim</v-tab>
        <v-tab value="two" @click="scrollTo('project')">Projetos</v-tab>
        <v-tab value="three" @click="scrollTo('expertise')"
          >Conhecimentos</v-tab
        >
        <v-tab value="four" @click="scrollTo('expirience')">Experiência</v-tab>
        <v-tab value="five" @click="scrollTo('contact')">Contato</v-tab>
      </v-tabs>
    </div>
     <div class="clock-container">
      <Clock />
    </div>
    <v-navigation-drawer app v-model="drawer" :temporary="true">
      <!-- <LanguageSwitcher @language-changed="changeLanguage" /> -->
        <LanguageSwitcher />
      <!-- <v-switch
        v-model="darkMode"
        label="Dark Mode"
        @change="toggleDarkMode"
      ></v-switch> -->
      <v-list v-if="isXs" v-model="drawerTab" dense>
        <v-list-item @click="navigate('sobre-mim', 'one')"
          >Sobre Mim</v-list-item
        >
        <v-list-item @click="navigate('project', 'two')">Projetos</v-list-item>
        <v-list-item @click="navigate('expertise', 'three')"
          >Conhecimentos</v-list-item
        >
        <v-list-item @click="navigate('expirience', 'four')"
          >Experiência</v-list-item
        >
        <v-list-item @click="navigate('contact', 'five')">Contato</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <main class="mt-5">
      <section id="sobre-mim"><aboutme /></section>
      <section id="project"><myprojects /></section>
      <section id="expertise"><expertise /></section>
      <section id="expirience"><experience /></section>
      <section id="contact"><contact /></section>
      <Footer />
    </main>
  </v-app>
</template>

<script>
import aboutme from "../components/aboutme.vue";
import Contact from "../components/contact.vue";
import experience from "../components/experience.vue";
import Expertise from "../components/expertise.vue";
import Footer from "../components/footer.vue";
import Myprojects from "../components/Myprojects.vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import Clock from "../components/Clock.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    aboutme,
    Expertise,
    Contact,
    Myprojects,
    experience,
    Footer,
    LanguageSwitcher,
    Clock,
  },
  name: "DefaultLayout",

  data: () => ({
    drawer: false,
    drawerTab: null,
    tab: null,
    isXs: false,
  }),
  methods: {
    updateXs() {
      this.isXs = window.innerWidth <= 930;
    },
    navigate(sectionId, tabValue) {
      this.drawer = false;
      this.tab = tabValue;
      this.scrollTo(sectionId);
    },
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateXs);
    this.updateXs();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateXs);
  },
};
</script>

<style scoped>
.sticky-container {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: inherit;
}
.clock-container {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
}
.icon-menu {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(65, 168, 33);
  margin: 0.5em;
}

.sticky-tabs {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: inherit;
}

section {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10em;
}

img {
  filter: blur(5px);
}

#sobre-mim,
#project,
#expertise,
#expirience,
#contact {
  background-attachment: fixed;
  background-size: cover;
}
</style>
