<template>
  <div class="bg-[#111827] text-white min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-inherit">
      <button class="icon-menu md:hidden" @click="drawer = !drawer">
        <img class="w-8 h-8" src="@/assets/menuIcon.png" />
      </button>
      <nav class="hidden md:flex justify-around mt-2">
        <button v-for="item in menuItems" :key="item.id" @click="setActive(item)"
          :class="{ 'text-purple-500': activeItem === item }"
          class="relative text-lg uppercase tracking-wide focus:outline-none">
          {{ item.label }}
          <div v-if="activeItem === item" class="absolute left-0 right-0 bottom-0 h-1 bg-purple-500"></div>
        </button>
      </nav>
    </header>
    <div class="fixed bottom-0 right-0 m-3">
      <Clock />
        <LanguageSwitcher />
    </div>
    <div class="fixed inset-0 bg-black bg-opacity-50 z-40" v-if="drawer" @click="drawer = false"></div>
    <aside class="fixed inset-y-0 left-0 w-64 h-full bg-[#111827] z-50 transform transition-transform duration-300"
      :class="{ '-translate-x-full': !drawer, 'translate-x-0': drawer }">

      <nav class="flex flex-col space-y-4 p-4">
      
        <button @click="navigate('sobre-mim', 'one')" class="text-left">
          Sobre Mim
        </button>
        <button @click="navigate('project', 'two')" class="text-left">
          Projetos
        </button>
        <button @click="navigate('expertise', 'three')" class="text-left">
          Conhecimentos
        </button>
        <button @click="navigate('expirience', 'four')" class="text-left">
          Experiência
        </button>
        <button @click="navigate('contact', 'five')" class="text-left">
          Contato
        </button>
      </nav>
    </aside>
    <main class="mt-5 space-y-40">
      <section id="sobre-mim" class="h-screen flex items-center justify-center bg-fixed bg-cover"
        style="background-image: url('/path/to/your/image.jpg')">
        <aboutme />

      </section>
      <section id="project" class="h-screen flex items-center justify-center bg-fixed bg-cover"
        style="background-image: url('/path/to/your/image.jpg')">
        <myprojects />
      </section>
      <section id="expertise" class="h-screen flex items-center justify-center bg-fixed bg-cover"
        style="background-image: url('/path/to/your/image.jpg')">
        <expertise />
      </section>
      <section id="expirience" class="h-screen flex items-center justify-center bg-fixed bg-cover"
        style="background-image: url('/path/to/your/image.jpg')">
        <experience />
      </section>
      <section id="contact" class="h-screen flex items-center justify-center bg-fixed bg-cover"
        style="background-image: url('/path/to/your/image.jpg')">
        <contact />
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import aboutme from "../components/aboutme.vue";
import Contact from "../components/contact.vue";
import experience from "../components/experience.vue";
import Expertise from "../components/expertise.vue";
import Footer from "../components/footer.vue";
import Myprojects from "../components/Myprojects.vue";
import Clock from "../components/Clock.vue";
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
const t = (key, ...args) => {
  return translate(key, ...args);
};
export default {
  components: {
    aboutme,
    Expertise,
    Contact,
    Myprojects,
    experience,
    Footer,
    Clock,
    LanguageSwitcher
  },
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      menuItems: [
        { id: 1, label: "About-me", section: "sobre-mim" },
        { id: 2, label: "Projetos", section: "project" },
        { id: 3, label: "Conhecimentos", section: "expertise" },
        { id: 4, label: "Experiência", section: "expirience" },
        { id: 5, label: "Contato", section: "contact" },
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
  },
  mounted() {
    this.activeItem = this.menuItems[0]; // Set the default active item
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

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.bg-gray-900 {
  background-color: #1a202c;
  /* Tailwind gray-900 */
}

.text-white {
  color: #ffffff;
}

.text-purple-500 {
  color: #805ad5;
  /* Tailwind purple-500 */
}

.bg-purple-500 {
  background-color: #805ad5;
}

.uppercase {
  text-transform: uppercase;
}

.tracking-wide {
  letter-spacing: 0.05em;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

section {
  background-attachment: fixed;
  background-size: cover;
}
</style>
