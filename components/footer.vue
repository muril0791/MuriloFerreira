<template>
  <v-footer
    class="bg-grey-darken-3 text-center d-flex flex-column"
    variant="outline"
  >
    <div>
      <a
        v-for="icon in icons"
        :key="icon.id"
        :href="icon.link"
        target="_blank" 
        class="mx-4"
      >
        <v-icon :icon="icon.name" variant="text" color="white">
          {{icon.name}}
        </v-icon>
      </a>
    </div>

    <div class="pt-0">
      
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Murilo</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {id: 1, name: 'mdi-whatsapp', link: ' https://wa.me/5515981040567'},
        {id: 3, name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/murilo-ferreira-21557519b/'},
        {id: 4, name: 'mdi-instagram', link: 'https://www.instagram.com/murilo.ferreira._/'},
      ],
    }),
  }
</script>
