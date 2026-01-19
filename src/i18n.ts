import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      br: {
        translation : {
            header: {
              OEvento: "O Evento",
              Programacao: "Programação"
            }
        }
      },
      en: {
        translation : {
            header: {
              OEvento: "The event",
              Programacao: "Schedule"
            }
        }
      },
      es: {
        translation : {
            header: {
              OEvento: "El evento",
              Programacao: "Cronograma"
            }
        }
      }
    },
    lng: "br",
    fallbackLng: "br",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
