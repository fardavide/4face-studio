import {
  StringNotDefinedError,
  TranslationNotDefinedError
} from "../errors/errors";
import { isString } from "../utils";

/**
 * {string}s for our App.
 * All values are sorted logically, where not specified explicitly
 *
 * @type {Object} of nested {Object}s of {string}
 *
 *
 * @author Davide Giuseppe Farella
 */
export const strings = {
  /** Test purpose only */
  test: {
    en: "english",
    it: "italian",
    nested: {
      en: "nested en",
      it: "nested it"
    },
    noItTranslation: {
      en: "english translation"
    }
  },

  /** The name of our App */
  appName: {
    en: "4face Studio",
    it: "4face Studio",
    cn: "========== ========== ========== HELE ========== ========== ==========",
    jp: "========== ========== ========== HELE ========== ========== =========="
  },

  /** Strings related to common actions. Sorted alphabetically */
  action: {
    send: {
      en: "Send",
      it: "Invia",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },
    gitHub: {
      en: "Open on GitHub",
      it: "Apri su GitHub",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },
    useMarkdown: {
      en: "Use Markdown",
      it: "Usa Markdown",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    }
  },

  /** About section */
  about: {
    /** Title of the About section */
    title: {
      en: "About me",
      it: "Su di me",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },

    /** A short description of the developer */
    headline: {
      en: "Freelance Android developer and Kotlin lover ❤️",
      it: "Sviluppatore Android freelance ed amante di Kotlin ❤️",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },

    /** A long description about the developer */
    bio: {
      en: `I'm _Davide Giuseppe Farella_, I'm 27 years old and I'm a **freelance Android developer** from Italy. I also have so knowledge about _Javascript_, in fact I developed this website with _React JS_. I am a **Kotlin** lover and I love to play it for take it to the limit. I believe in the **Open Source** and I released few libraries on **Github**`,
      it: `Sono _Davide Giuseppe Farella_, ho 27 anni e sono uno **sviluppatore Android freelance** dall'Italia. Ho anche qualche competenza circa _Javascript_, infatti ho scritto questo sito con _React JS_. Sono un amante di **Kotlin** ed amo giocarci per portarlo fino al limite. Credo nell'**Open Source** ed ho rilasciato qualche libreria su **Github**`,
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    }
  },

  /** References section */
  references: {
    /** Title of References section */
    title: {
      en: "Where to find me",
      it: "Dove trovarmi",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    }
  },

  /** Projects section */
  projects: {
    /** Title of Projects section */
    title: {
      en: "My Projects",
      it: "I miei progetti",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    }
  },

  /** Contact section */
  contact: {
    /** Title of Contact section */
    title: {
      en: "Contact me",
      it: "Contattami",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },

    /** Strings related to the Contact form */
    form: {
      /** Name of the writing user */
      name: {
        en: "Name",
        it: "Nome",
        cn: "========== ========== ========== HELE ========== ========== ==========",
        jp: "========== ========== ========== HELE ========== ========== ==========",

        /** Errors of Name */
        error: {
          /** When Name is empty */
          empty: {
            en: "Name is required",
            it: "Il nome è richiesto",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          },
          fullName: {
            en: "Insert name and surname",
            it: "Inserisci nome e cognome",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          },
          /** When Name is too short */
          short: {
            en: "Name too short",
            it: "Nome troppo corto",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          }
        },
        /** Hint for Name */
        hint: {
          en: "Type your full name",
          it: "Inserisci il tuo nome completo",
          cn: "========== ========== ========== HELE ========== ========== ==========",
          jp: "========== ========== ========== HELE ========== ========== =========="
        }
      },

      /** Email of the writing user */
      email: {
        en: "Email",
        it: "Email",
        cn: "========== ========== ========== HELE ========== ========== ==========",
        jp: "========== ========== ========== HELE ========== ========== ==========",

        /** Errors of Email */
        error: {
          /** When Email is empty */
          empty: {
            en: "Email il required",
            it: "L'email è richiesta",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          },
          /** When Email has a bad format */
          badFormat: {
            en: "Check the format of Email",
            it: "Controlla il formato dell'Email",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          }
        },

        /** Hint for Email */
        hint: {
          en: "Type your email",
          it: "Inserisci la tua email",
          cn: "========== ========== ========== HELE ========== ========== ==========",
          jp: "========== ========== ========== HELE ========== ========== =========="
        },

        /** A regex for validate the email */
        regex: {
          en: "\\w+@\\w+\\.\\w{2}",
          it: "\\w+@\\w+\\.\\w{2}",
          cn: "\\w+@\\w+\\.\\w{2}",
          jp: "\\w+@\\w+\\.\\w{2}"
        }
      },

      /** Phone number of the writing user */
      phone: {
        en: "Phone Number ( optional )",
        it: "Numero di telefono ( opzionale )",
        cn: "========== ========== ========== HELE ========== ========== ==========",
        jp: "========== ========== ========== HELE ========== ========== ==========",

        /** Errors of Phone */
        error: {
          short: {
            en: "",
            it: "",
            cn: "",
            jp: ""
          },
          /** When Phone has a bad format */
          badFormat: {
            en: "Check the format of Phone",
            it: "Controlla il formato del Numero",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          }
        },

        /** Hint for Phone */
        hint: {
          en: "Type your phone number",
          it: "Inserisci il tuo numero di telefono",
          cn: "========== ========== ========== HELE ========== ========== ==========",
          jp: "========== ========== ========== HELE ========== ========== =========="
        }
      },

      /** Content of the message */
      message: {
        en: "Message",
        it: "Messaggio",
        cn: "========== ========== ========== HELE ========== ========== ==========",
        jp: "========== ========== ========== HELE ========== ========== ==========",

        /** Errors of Message */
        error: {
          /** When Message is empty */
          empty: {
            en: "Message is required",
            it: "Il messaggio è richiesto",
            cn: "========== ========== ========== HELE ========== ========== ==========",
            jp: "========== ========== ========== HELE ========== ========== =========="
          },
          /** When Message is too short */
          short: {
            plural: {
              en: "More %d characters required",
              it: "Altri %d caratteri richiesti",
              cn: "========== ========== ========== HELE ========== ========== ==========",
              jp: "========== ========== ========== HELE ========== ========== =========="
            },
            singular: {
              en: "One more character required",
              it: "Un altro carattere richiesto",
              cn: "========== ========== ========== HELE ========== ========== ==========",
              jp: "========== ========== ========== HELE ========== ========== =========="
            }
          }
        },
        /** Hint for Message */
        hint: {
          en: "Type a message",
          it: "Inserisci un messaggio",
          cn: "========== ========== ========== HELE ========== ========== ==========",
          jp: "========== ========== ========== HELE ========== ========== =========="
        }
      }
    }
  },

  /** Footer section */
  footer: {
    /** Credits about the website */
    credits: {
      en: "Developed and designed by 4face Studio with React js",
      it: "Sviluppato e disegnato da 4face Studio con React js",
      cn: "========== ========== ========== HELE ========== ========== ==========",
      jp: "========== ========== ========== HELE ========== ========== =========="
    },

    /** Copyright info */
    copyright: {
      en: "Copyright © 4face Studio 2019",
      it: "Copyright © 4face Studio 2019",
      cn: "Copyright © 4face Studio 2019",
      jp: "Copyright © 4face Studio 2019"
    }
  }
};

/**
 * Get a {string} properly translated from {strings}
 *
 * @param field {string/*} value to retrieve
 * It could be {string} name the {string} to get, or direct object pointing to the {string} to get.
 *
 * @param lang {string/undefined} requested language for {name} {string}.
 * Default is 'en'
 *
 * @return {string}
 *
 * @throws StringNotDefinedError
 * @throws TranslationNotDefinedError
 */
export default (field, lang) => {
  // Use 'en' as default if 'lang' is not defined
  if (!lang) lang = currentLang;

  let untranslatedString;
  if (isString(field)) untranslatedString = getByString(field);
  else untranslatedString = getByObject(field);

  // Find the right translation
  const result = untranslatedString[lang];

  // Throw TranslationNotDefinedError if translation is not found
  if (!result) throw TranslationNotDefinedError(field, lang);

  return result;
};

/**
 * Get an untranslated string from a {string} name ( {stringField} )
 * @param stringField {string} name of the {string} to get
 * @return {Object}
 *
 * @throws StringNotDefinedError
 */
const getByString = stringField => {
  // Split name by '.' for find nested objects
  const nameParts = stringField.split(".");
  let untranslatedString = strings;
  nameParts.forEach(part => {
    untranslatedString = untranslatedString[part];

    // Throw StringNotDefinedError if value is not found
    if (!untranslatedString) throw StringNotDefinedError(stringField);

    return untranslatedString;
  });

  return untranslatedString;
};

/**
 * {Array} of {string} of supported languages
 * @type {string[]}
 */
export const supportedLang = ["en", "it"];

/**
 * The default language
 * @type {string}
 */
const defaultLang = supportedLang[0];

/**
 * Get an untranslated string from a {*} field ( {objField} )
 * @param objField {*} field of the {string} to get
 * @return {Object}
 *
 * @throws StringNotDefinedError
 */
const getByObject = objField => {
  // Throw StringNotDefinedError if the given objField does not exist
  if (!objField) throw StringNotDefinedError(objField);

  return objField;
};

/** @return {string} language of the user if in {supportedLang}, else {defaultLang} */
const userLang = () => {
  const userLang =
    navigator.language ||
    navigator.browserLanguage ||
    (navigator.languages || ["en"])[0];

  if (supportedLang.includes(userLang)) return userLang;
  else return defaultLang;
};

/**
 * The current language, default value is {userLang}
 * @type {string}
 */
export let currentLang = userLang();
