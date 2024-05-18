<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6 text-center text-gray-100">Contact</h1>
    <div class="flex justify-center">
      <div class="w-full md:w-2/3 bg-gray-900 p-6 rounded-lg shadow-lg">
        <form ref="form" @submit.prevent="submit" class="space-y-6">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-400"
              >Name</label
            >
            <input
              v-model="name"
              id="name"
              type="text"
              :maxlength="10"
              :class="{ 'border-red-500': nameErrors.length }"
              class="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-700 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500 rounded-md"
              required
            />
            <p v-if="nameErrors.length" class="text-red-500 text-sm mt-1">
              {{ nameErrors[0] }}
            </p>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-400"
              >Email Address</label
            >
            <input
              v-model="email"
              id="email"
              type="email"
              :class="{ 'border-red-500': emailErrors.length }"
              class="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-700 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500 rounded-md"
              required
            />
            <p v-if="emailErrors.length" class="text-red-500 text-sm mt-1">
              {{ emailErrors[0] }}
            </p>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-400"
              >Message</label
            >
            <textarea
              v-model="message"
              id="message"
              :maxlength="255"
              :class="{ 'border-red-500': messageErrors.length }"
              class="mt-1 block w-full h-20 shadow-sm sm:text-sm border-gray-700 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500 rounded-md"
              rows="4"
              required
            ></textarea>
            <p v-if="messageErrors.length" class="text-red-500 text-sm mt-1">
              {{ messageErrors[0] }}
            </p>
          </div>
          <div class="flex space-x-4">
            <button type="button" @click="clear" class="btn hover:bg-gray">
              Limpar
            </button>
            <button type="submit" :disabled="!isValid" class="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { ref, computed } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const touchedFields = ref({
      name: false,
      email: false,
      message: false,
    });

    const nameErrors = computed(() => {
      const errors = [];
      if (!name.value && touchedFields.value.name)
        errors.push("O nome é obrigatório.");
      if (name.value.length > 10)
        errors.push("O nome deve ter no máximo 10 caracteres");
      return errors;
    });

    const emailErrors = computed(() => {
      const errors = [];
      if (!email.value && touchedFields.value.email)
        errors.push("O e-mail é obrigatório.");
      if (email.value && !/.+@.+\..+/.test(email.value))
        errors.push("E-mail deve ser válido");
      return errors;
    });

    const messageErrors = computed(() => {
      const errors = [];
      if (!message.value && touchedFields.value.message)
        errors.push("A mensagem é obrigatória.");
      if (message.value.length > 255)
        errors.push("A mensagem deve ter no máximo 255 caracteres");
      return errors;
    });

    const isValid = computed(() => {
      return (
        !nameErrors.value.length &&
        !emailErrors.value.length &&
        !messageErrors.value.length
      );
    });

    const submit = () => {
      if (isValid.value) {
        emailjs
          .send("service_ew9s4rf", "template_ot9t3cs", {
            from_name: name.value,
            email: email.value,
            message: message.value,
          })
          .then(
            (result) => {
              console.log(result.text);
              console.log("Mensagem enviada com sucesso!");
              clear();
            },
            (error) => {
              console.log(error.text);
              console.log("Falha no envio da mensagem: " + error.text);
            }
          );
      }
    };

    const clear = () => {
      name.value = "";
      email.value = "";
      message.value = "";
      touchedFields.value = {
        name: false,
        email: false,
        message: false,
      };
    };

    const handleBlur = (field) => {
      touchedFields.value[field] = true;
    };

    emailjs.init("-j8C69hFPJWlWsXsQ");

    return {
      name,
      email,
      message,
      nameErrors,
      emailErrors,
      messageErrors,
      isValid,
      submit,
      clear,
      handleBlur,
    };
  },
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  color: #ffffff;
  background-color: #f9b37a;
  border-color: #f9b37a;
}

.btn-secondary {
  color: #ffffff;
  background-color: #6b789d;
  border-color: #6b789d;
}

.btn-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.border-red-500 {
  border-color: #f56565;
}

.bg-gray-800 {
  background-color: #2d2f50;
}

.bg-gray-700 {
  background-color: #424766;
}

.text-gray-100 {
  color: #ffffff;
}

.text-gray-200 {
  color: #d1d5db;
}

.text-gray-400 {
  color: #6b789d;
}
</style>
