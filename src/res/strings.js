import {
  StringNotDefinedError,
  TranslationNotDefinedError
} from "../errors/errors";

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
    it: "4face Studio"
  },

  /** Strings related to common actions. Sorted alphabetically */
  action: {
    send: {
      en: "Send",
      it: "Invia"
    }
  },

  /** About section */
  about: {
    /** Title of the About section */
    title: {
      en: "About me",
      it: "Su di me"
    },

    /** A short description of the developer */
    headline: {
      en: "Freelance Android developer and Kotlin lover ❤️",
      it: "Sviluppatore Android freelance ed amante di Kotlin ❤️"
    },

    /** A long description about the developer */
    bio: {
      en: `I'm _Davide Giuseppe Farella_, I'm 27 years old and I'm a **freelance Android developer** from Italy. I also have so knowledge about _Javascript_, in fact I developed this website with _React JS_. I am a **Kotlin** lover and I love to play it for take it to the limit. I believe in the **Open Source** and I released few libraries on **Github**`,
      it: `Sono _Davide Giuseppe Farella_, ho 27 anni e sono uno **sviluppatore Android freelance** dall'Italia. Ho anche qualche competenza circa _Javascript_, infatti ho scritto questo sito con _React JS_. Sono un amante di **Kotlin** ed amo giocarci per portarlo fino al limite. Credo nell'**Open Source** ed ho rilasciato qualche libreria su **Github**`
    }
  },

  /** Projects section */
  projects: {
    /** Title of Projects section */
    title: {
      en: "My Projects",
      it: "I miei progetti"
    },

    /** The actual list of projects */
    item: {
      /** Fresh Tv app */
      freshTv: {
        title: {
          en: "",
          it: ""
        },
        description: {
          en: "",
          it: ""
        },
        icon: {
          en: "",
          it: ""
        },
        link: {
          en: "",
          it: ""
        },
        type: {
          en: "App",
          it: "App"
        }
      },

      /** Theia library */
      theia: {
        title: {
          en: "",
          it: ""
        },
        description: {
          en: "",
          it: ""
        },
        icon: {
          en: "",
          it: ""
        },
        link: {
          en: "",
          it: ""
        },
        type: {
          en: "Lib",
          it: "Lib"
        }
      },

      /** View State Store library */
      viewStateStore: {
        title: {
          en: "",
          it: ""
        },
        description: {
          en: "",
          it: ""
        },
        icon: {
          en: "",
          it: ""
        },
        link: {
          en: "",
          it: ""
        },
        type: {
          en: "Lib",
          it: "Lib"
        }
      },

      /** Material Bottom Bar library */
      materialBottomBar: {
        title: {
          en: "",
          it: ""
        },
        description: {
          en: "",
          it: ""
        },
        icon: {
          en: "",
          it: ""
        },
        link: {
          en: "",
          it: ""
        },
        type: {
          en: "Lib",
          it: "Lib"
        }
      },

      /** Fluent Notifications library */
      fluentNotifications: {
        title: {
          en: "",
          it: ""
        },
        description: {
          en: "",
          it: ""
        },
        icon: {
          en: "",
          it: ""
        },
        link: {
          en: "",
          it: ""
        },
        type: {
          en: "Lib",
          it: "Lib"
        }
      }
    }
  },

  /** Contact section */
  contact: {
    /** Title of Contact section */
    title: {
      en: "Contact me",
      it: "Contattami"
    },

    /** Strings related to the Contact form */
    form: {
      /** Name of the writing user */
      name: {
        en: "Name",
        it: "Nome",

        /** Errors of Name */
        error: {
          /** When Name is empty */
          empty: {
            en: "Name is required",
            it: "Il nome è richiesto"
          },
          fullName: {
            en: "Insert name and surname",
            it: "Inserisci nome e cognome"
          },
          /** When Name is too short */
          short: {
            en: "Name too short",
            it: "Nome troppo corto"
          }
        },
        /** Hint for Name */
        hint: {
          en: "Type your full name",
          it: "Inserisci il tuo nome completo"
        }
      },

      /** Email of the writing user */
      email: {
        en: "Email",
        it: "Email",

        /** Errors of Email */
        error: {
          /** When Email is empty */
          empty: {
            en: "Email il required",
            it: "L'email è richiesta"
          },
          /** When Email has a bad format */
          badFormat: {
            en: "Check the format of Email",
            it: "Controlla il formato dell'Email"
          }
        },

        /** Hint for Email */
        hint: {
          en: "Type your email",
          it: "Inserisci la tua email"
        },

        /** A regex for validate the email */
        regex: {
          en: "\\w+@\\w+\\.\\w{2}",
          it: "\\w+@\\w+\\.\\w{2}"
        }
      },

      /** Phone number of the writing user */
      phone: {
        en: "Phone Number ( optional )",
        it: "Numero di telefono ( opzionale )",

        /** Errors of Phone */
        error: {
          short: {
            en: "",
            it: ""
          },
          /** When Phone has a bad format */
          badFormat: {
            en: "Check the format of Phone",
            it: "Controlla il formato del Numero"
          }
        },

        /** Hint for Phone */
        hint: {
          en: "Type your phone number",
          it: "Inserisci il tuo numero di telefono"
        }
      },

      /** Content of the message */
      message: {
        en: "Message",
        it: "Messaggio",

        /** Errors of Message */
        error: {
          /** When Message is empty */
          empty: {
            en: "Message is required",
            it: "Il messaggio è richiesto"
          },
          /** When Message is too short */
          short: {
            plural: {
              en: "More %d characters required",
              it: "Altri %d caratteri richiesti"
            },
            singular: {
              en: "One more character required",
              it: "Un altro carattere richiesto"
            }
          }
        },
        /** Hint for Message */
        hint: {
          en: "Type a message",
          it: "Inserisci un messaggio"
        }
      }
    }
  },

  /** Footer section */
  footer: {
    /** Credits about the website */
    credits: {
      en: "Developed and designed by 4face Studio with React js",
      it: "Sviluppato e disegnato da 4face Studio con React js"
    },

    /** Copyright info */
    copyright: {
      en: "Copyright © 4face Studio 2019",
      it: "Copyright © 4face Studio 2019"
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
  if (!lang) lang = "en";

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

/**
 * Get whether the given {obj} is a {string}
 * @param obj the object to check
 * @return {boolean} `true` if {obj} is a {string}
 */
const isString = obj => typeof obj === "string" || obj instanceof String;
