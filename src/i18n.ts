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
            },
            carrossel : {
                pelaComunidade : "pela comunidade",
                paraComunidade : "para comunidade"
            },
            buttonPrincipal : {
                ingressos : "ingressos",
                planoDePatrocinio : "Plano de Patrocínio",
            },
            home : {
                section2 : {
                    paragrafo1 : "A <1>Python Brasil 2026</1> é a maior conferência sobre linguagem de programação Python do Brasil e da América Latina.",
                    paragrafo2 : "Serão 5 dias de imersão com atividades que vão desde contribuir para projetos de software livre, participar de treinamentos e adquirir novos conhecimentos com profissionais renomados da comunidade.",
                    paragrafo3 : "A edição de 2026 está sendo organizada pela comunidade Python de <1>Florianópolis/SC</1> com o apoio da APyB (Associação Python Brasil)"
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
            },
            carrossel: {
              pelaComunidade: "by the community",
              paraComunidade: "for the community"
            },
            buttonPrincipal : {
                ingressos : "Tickets!",
                planoDePatrocinio : "Sponsorship Plan",
            },
            home : {
                section2: {
                  paragrafo1: "The <1>Python Brazil 2026</1> is the largest conference focused on the Python programming language in Brazil and Latin America.",
                  paragrafo2: "There will be 5 days of immersion with activities ranging from contributing to open source projects, participating in training sessions, and gaining new knowledge from renowned professionals in the community.",
                  paragrafo3: "The 2026 edition is being organized by the Python community of <1>Florianópolis/SC</1> with the support of APyB (Python Brazil Association)."
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
            },
            carrossel: {
              pelaComunidade: "por la comunidad",
              paraComunidade: "para la comunidad"
            },
            buttonPrincipal : {
                ingressos : "!Entradas!",
                planoDePatrocinio : "Plan de Patrocinio",
            },
            home : {
                section2: {
                  paragrafo1: "La <1>Python Brasil 2026</1> es la mayor conferencia sobre el lenguaje de programación Python en Brasil y América Latina.",
                  paragrafo2: "Serán 5 días de inmersión con actividades que van desde contribuir a proyectos de software libre, participar en capacitaciones y adquirir nuevos conocimientos con profesionales reconocidos de la comunidad.",
                  paragrafo3: "La edición de 2026 está siendo organizada por la comunidad Python de <1>Florianópolis/SC</1> con el apoyo de la APyB (Asociación Python Brasil)."
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
