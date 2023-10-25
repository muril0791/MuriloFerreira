<template>
  <v-container>
     <v-app-bar-title class="title">Contact</v-app-bar-title>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="subject"
            :counter="20"
            :rules="subjectRules"
            label="Assunto"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :counter="255"
            :rules="messageRules"
            label="Mensagem"
            required
          ></v-textarea>

          <v-btn :disabled="!valid" @click="submit">Enviar</v-btn>
          <v-btn @click="clear">Limpar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'O nome é obrigatório.',
      v => (v && v.length <= 10) || 'O nome deve ter no máximo 10 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'O e-mail é obrigatório.',
      v => /.+@.+/.test(v) || 'E-mail deve ser válido'
    ],
    subject: '',
    subjectRules: [
      v => !!v || 'O assunto é obrigatório.',
      v => (v && v.length <= 20) || 'O assunto deve ter no máximo 20 caracteres'
    ],
    message: '',
    messageRules: [
      v => !!v || 'A mensagem é obrigatória.',
      v => (v && v.length <= 255) || 'A mensagem deve ter no máximo 255 caracteres'
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        alert('Formulário enviado com sucesso!');
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 2em;
  margin-bottom: 26px;
  color: #89c1fa;
  text-align: center;
}
</style>