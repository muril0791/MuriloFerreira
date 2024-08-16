import { reactive, watchEffect } from "vue";
import enUS from "./en-us.json";
import ptBR from "./pt-br.json";

const logger = {
  info: (message, ...args) => console.log(`[INFO] ${message}`, ...args),
  error: (message, ...args) => console.error(`[ERROR] ${message}`, ...args),
};

export const POSSIBLE_LANGUAGES = ["pt-br", "en-us"];
const languageData = reactive({});

export const state = reactive({
  selectedLang: "pt-br",
});

export function updateLang(language) {
  language = language.toLowerCase();
  logger.info("setting language", language);

  switch (language) {
    case "pt":
    case "pt-br":
    case "pt-pt":
      state.selectedLang = "pt-br";
      Object.assign(languageData, ptBR);
      break;
    default:
      state.selectedLang = "en-us";
      Object.assign(languageData, enUS);
      break;
  }
}

export function translate(key, ...args) {
  if (!languageData[key]) return `{${key}}`;
  let text = languageData[key];
  if (text === undefined) return `{${key}}`;

  for (let x = 0; x < args.length; x++) {
    text = text.replace(`{${x}}`, args[x]);
  }

  return text;
}

// Inicializa com o idioma padrão
updateLang(state.selectedLang);

// Watch for changes in selectedLang and update translations
watchEffect(() => {
  // Atualiza a tradução quando o idioma muda
  translate.value = (key, ...args) => {
    if (!languageData[key]) return `{${key}}`;
    let text = languageData[key];
    if (text === undefined) return `{${key}}`;

    for (let x = 0; x < args.length; x++) {
      text = text.replace(`{${x}}`, args[x]);
    }

    return text;
  };
});
