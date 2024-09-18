<template>
  <div class="bg-[#111827] text-white min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-inherit">
      <button class="icon-menu md:hidden" @click="drawer = !drawer">
        <img class="w-8 h-8" src="@/assets/menuIcon.png" />
      </button>
      <nav class="hidden md:flex justify-around mt-2 h-12">
        <button
          v-for="item in menuItems"
          :key="item.id"
          @click="setActive(item)"
          :class="{ 'text-purple-500': activeItem === item }"
          class="relative text-lg uppercase tracking-wide focus:outline-none"
        >
          {{ t(item.label) }}
          <div
            v-if="activeItem === item"
            class="absolute left-0 right-0 bottom-0 h-1 bg-purple-500"
          ></div>
        </button>
      </nav>
    </header>
    <div
      class="hidden md:flex flex justify-center items-center flex-row-reverse fixed bottom-0 right-0 m-3"
    >
      <Clock />
      <LanguageSwitcher />
    </div>
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      v-if="drawer"
      @click="drawer = false"
    ></div>
    <aside
      class="fixed inset-y-0 left-0 w-64 h-full bg-[#111827] z-50 transform transition-transform duration-300"
      :class="{ '-translate-x-full': !drawer, 'translate-x-0': drawer }"
    >
      <nav class="flex flex-col space-y-4 p-4">
        <button
          v-for="item in menuItems"
          :key="item.id"
          @click="navigate(item.section)"
          class="text-left"
        >
          {{ t(item.label) }}
        </button>
        <LanguageSwitcher />
      </nav>
    </aside>

    <main class="mt-5 space-y-40">
      <section
        id="sobre-mim"
        class="flex items-center justify-center bg-fixed bg-cover"
      >
        <aboutme />
      </section>
      <section
        id="project"
        class="flex items-center justify-center bg-fixed bg-cover"
      >
        <myprojects />
      </section>
      <section
        id="expertise"
        class="flex items-center justify-center bg-fixed bg-cover"
      >
        <expertise />
      </section>
      <section
        id="expirience"
        class="flex items-center justify-center bg-fixed bg-cover"
      >
        <experience />
      </section>
      <section
        id="contact"
        class="flex items-center justify-center bg-fixed bg-cover"
      >
        <contact />
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import aboutme from "../components/aboutme.vue";
import Contact from "../components/contact.vue";
import experience from "../components/experience.vue";
import Expertise from "../components/expertise.vue";
import Footer from "../components/footer.vue";
import Myprojects from "../components/Myprojects.vue";
import Clock from "../components/Clock.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { translate, state } from "@/Translation/lang";

export default {
  components: {
    aboutme,
    Expertise,
    Contact,
    Myprojects,
    experience,
    Footer,
    Clock,
    LanguageSwitcher,
  },
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      menuItems: [
        { id: 1, label: "about_me", section: "sobre-mim" },
        { id: 2, label: "projects", section: "project" },
        { id: 3, label: "expertise", section: "expertise" },
        { id: 4, label: "experience", section: "expirience" },
        { id: 5, label: "contact", section: "contact" },
      ],
      activeItem: null,
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
      this.scrollToSection(item.section);
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    navigate(sectionId, tabValue) {
      this.drawer = false;
      this.setActive(this.menuItems.find((item) => item.section === sectionId));
    },
    updateXs() {
      this.isXs = window.innerWidth <= 930;
    },
    t(key, ...args) {
      return translate(key, ...args);
    },
  },
  watch: {
    "state.selectedLang"() {
      this.menuItems = [
        { id: 1, label: this.t("about_me"), section: "sobre-mim" },
        { id: 2, label: this.t("projects"), section: "project" },
        { id: 3, label: this.t("expertise"), section: "expertise" },
        { id: 4, label: this.t("experience"), section: "expirience" },
        { id: 5, label: this.t("contact"), section: "contact" },
      ];
    },
  },
  mounted() {
    this.activeItem = this.menuItems[0];
    window.addEventListener("resize", this.updateXs);
    this.updateXs();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateXs);
  },
};
</script>

<style scoped>
.icon-menu {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(65, 168, 33);
  margin: 0.5em;
}

section {
  background-attachment: fixed;
  background-size: cover;
}
</style>
