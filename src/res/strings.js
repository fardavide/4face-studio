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
    cn: "4face Studio",
    jp: "4face Studio"
  },

  /** Strings related to common actions. Sorted alphabetically */
  action: {
    send: {
      en: "Send",
      it: "Invia",
      cn: "发送",
      jp: "送信"
    },
    gitHub: {
      en: "Open on GitHub",
      it: "Apri su GitHub",
      cn: "在GitHub打开",
      jp: "Githubで開く"
    },
    useMarkdown: {
      en: "Use Markdown",
      it: "Usa Markdown",
      cn: "使用Markdown",
      jp: "Markdownを使う"
    }
  },

  /** A set of common messages */
  message: {
    completed:{
      en: 'Completed',
      it: 'Completato',
      cn: '完成',
      jp: '完成'
    },
    error:{
      en: 'Error',
      it: 'Errore',
      cn: '错误',
      jp: 'エラー'
    },
    sending:{
      en: 'Sending',
      it: 'Inviando',
      cn: '发送中',
      jp: '送信中'
    },
  },

  /** About section */
  about: {
    /** Title of the About section */
    title: {
      en: "About me",
      it: "Su di me",
      cn: "关于我",
      jp: "私について"
    },

    /** A short description of the developer */
    headline: {
      en: "Freelance Android developer and Kotlin lover ❤️",
      it: "Sviluppatore Android freelance ed amante di Kotlin ❤️",
      cn: "安卓自主者 kotlin爱好者❤️",
      jp: "アンドロイドのフリーランス＆Kotlin好き❤️"
    },

    /** A long description about the developer */
    bio: {
      en: `I'm _Davide Giuseppe Farella_, I'm 27 years old and I'm a **freelance Android developer** from Italy. I also have so knowledge about _Javascript_, in fact I developed this website with _React JS_. I am a **Kotlin** lover and I love to play it for take it to the limit. I believe in the **Open Source** and I released few libraries on **Github**`,
      it: `Sono _Davide Giuseppe Farella_, ho 27 anni e sono uno **sviluppatore Android freelance** dall'Italia. Ho anche qualche competenza circa _Javascript_, infatti ho scritto questo sito con _React JS_. Sono un amante di **Kotlin** ed amo giocarci per portarlo fino al limite. Credo nell'**Open Source** ed ho rilasciato qualche libreria su **Github**`,
      cn: `我是_Davide Giuseppe Farella_,今年27岁，是一名来自意大利的**安卓程序开发员**。并且我也懂得使用_Javascript_，事实上我运用_React JS_开发了这个网站。我热衷于**Kotlin**，并且运用它发挥到极致。并且我乐意在**Github**上创建**Open Source**供大家分享`,
      jp: "私は_Davide Giuseppe Farella_です。今年は２７歳、イタリア人です。私はアンドロイド開発者としてフリーランスのエンジニアをしてます。_Javascript_も使えますし、実は_React JS_で私がこのホームページを作成した。**Kotlin**好きで、それを極めて使います。そして**Github**上で**Open Source**を作って、皆さんとシェアすることも楽しみです。"
    }
  },

  /** References section */
  references: {
    /** Title of References section */
    title: {
      en: "Where to find me",
      it: "Dove trovarmi",
      cn: "如何找到我",
      jp: "コミュニティ"
    }
  },

  /** Projects section */
  projects: {
    /** Title of Projects section */
    title: {
      en: "My Projects",
      it: "I miei progetti",
      cn: "我的项目",
      jp: "マイプロジェクト"
    }
  },

  /** Contact section */
  contact: {
    /** Title of Contact section */
    title: {
      en: "Contact me",
      it: "Contattami",
      cn: "联系我",
      jp: "連絡"
    },

    /** Strings related to the Contact form */
    form: {
      /** Name of the writing user */
      name: {
        en: "Name",
        it: "Nome",
        cn: "名字",
        jp: "名前",

        /** Errors of Name */
        error: {
          /** When Name is empty */
          empty: {
            en: "Name is required",
            it: "Il nome è richiesto",
            cn: "名字必须填写",
            jp: "名前が必須"
          },
          fullName: {
            en: "Insert name and surname",
            it: "Inserisci nome e cognome",
            cn: "填写姓名",
            jp: "名前を入力してください"
          },
          /** When Name is too short */
          short: {
            en: "Name too short",
            it: "Nome troppo corto",
            cn: "用户名太短",
            jp: "名前数が足りません"
          }
        },
        /** Hint for Name */
        hint: {
          en: "Type your full name",
          it: "Inserisci il tuo nome completo",
          cn: "填写全名",
          jp: "フルネームを入力してください"
        }
      },

      /** Email of the writing user */
      email: {
        en: "Email",
        it: "Email",
        cn: "邮箱",
        jp: "メールアドレス",
     

        /** Errors of Email */
        error: {
          /** When Email is empty */
          empty: {
            en: "Email il required",
            it: "L'email è richiesta",
            cn: "必须填写邮箱",
            jp: "メールアドレスが必須"
          },
          /** When Email has a bad format */
          badFormat: {
            en: "Check the format of Email",
            it: "Controlla il formato dell'Email",
            cn: "请填写正确的邮箱格式",
            jp: "メールアドレスを正しく入力してください"
          }
        },

        /** Hint for Email */
        hint: {
          en: "Type your email",
          it: "Inserisci la tua email",
          cn: "填写你的邮箱",
          jp: "メールアドレスを入力してください"
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
        cn: "电话号码",
        jp:
          "電話番号",

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
            cn: "请检查电话号码的格式",
            jp: "電話番号のフォーマットを確認してください"
          }
        },

        /** Hint for Phone */
        hint: {
          en: "Type your phone number",
          it: "Inserisci il tuo numero di telefono",
          cn: "请填写你的电话号码",
          jp: "電話番号を入力してください"
        }
      },

      /** Content of the message */
      message: {
        en: "Message",
        it: "Messaggio",
        cn: "信息",
        jp:
          "メッセージ",

        /** Errors of Message */
        error: {
          /** When Message is empty */
          empty: {
            en: "Message is required",
            it: "Il messaggio è richiesto",
            cn: "必须填写信息",
            jp: "メッセージが必須"
          },
          /** When Message is too short */
          short: {
            plural: {
              en: "More %d characters required",
              it: "Altri %d caratteri richiesti",
              cn: "还剩 %d 字数",
              jp: "残り %d 字"
            },
            singular: {
              en: "One more character required",
              it: "Un altro carattere richiesto",
              cn: "再加1个字数",
              jp: "もう一つ目"
            }
          }
        },
        /** Hint for Message */
        hint: {
          en: "Type a message",
          it: "Inserisci un messaggio",
          cn: "输入信息",
          jp: "メッセージを入力してください"
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
      cn: "由4face Studio运用React js制作与设计",
      jp: "Developed and designed by 4face Studio with React js"
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
  if (!lang) lang = currentLang.value;

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
 * {Array} of supported languages
 * @type { { value: string, name: strings }[] }
 */
export const supportedLang = [
  { value: "en", name: "English" },
  { value: "it", name: "Italiano" },
  { value: "cn", name: "中文" },
  { value: "jp", name: "日本語" }
];

/**
 * The default language
 * @type { { value: string, name: strings } }
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

/**
 * Return language of the user if in {supportedLang}, else {defaultLang}
 * @return { { value: string, name: strings } }
 */
const userLang = () => {
  // Create an array with all the values declared in navigator
  const userLanguages = [...navigator.languages] || [];
  if (navigator.language) userLanguages.push(navigator.language);

  // From all the languages found, match with supportedLang
  let foundLang = null;
  userLanguages
    .map(lang => lang.substring(0, 2))
    .forEach(user => {
      const found = supportedLang.find(supported => supported.value === user);
      if (found) {
        foundLang = found;
      }
    });
  // Return the found language or the default one
  return foundLang || defaultLang;
};

/**
 * The current language, default value is {userLang}
 * @return { { value: string, name: strings } }
 */
export let currentLang = userLang();

/**
 * Update {currentLang}
 * @param lang { { name: string, value: string } } new language to set
 */
export const setCurrentLang = lang => {
  currentLang = lang;
};
