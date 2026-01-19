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
                Programacao: "Programação",
                ComprarIngresso : "Comprar Ingressos!",
                menu : {
                inicio : "INÍCIO",
                oEvento : "O EVENTO",
                programacao : "PROGRAMAÇÃO",
                guiaDaCidade: "GUIA DA CIDADE",
                patrocinadores : "PATROCINADORES",
                contato : "CONTATO",
                ComprarIngresso : "Comprar Ingressos!",
                planoDePatrocinio : "Plano de Patrocínio",
                fechar : "Fechar"
              }
            }
        }
      },
      en: {
        translation : {
            header: {
                OEvento: "The event",
                Programacao: "Schedule",
                ComprarIngresso : "Buy Tickets!",
                menu: {
                  inicio: "HOME",
                  oEvento: "THE EVENT",
                  programacao: "SCHEDULE",
                  guiaDaCidade: "CITY GUIDE",
                  patrocinadores: "SPONSORS",
                  contato: "CONTACT",
                  ComprarIngresso: "Buy Tickets!",
                  planoDePatrocinio: "Sponsorship Plan",
                  fechar : "Close"
                }
            }
        }
      },
      es: {
        translation : {
            header: {
                OEvento: "El evento",
                Programacao: "Cronograma",
                ComprarIngresso : "¡Compra entradas!",
                menu: {
                  inicio: "INICIO",
                  oEvento: "EL EVENTO",
                  programacao: "PROGRAMACIÓN",
                  guiaDaCidade: "GUÍA DE LA CIUDAD",
                  patrocinadores: "PATROCINADORES",
                  contato: "CONTACTO",
                  ComprarIngresso: "¡Comprar Entradas!",
                  planoDePatrocinio: "Plan de Patrocinio",
                  fechar : "Cerrar"
                }
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
