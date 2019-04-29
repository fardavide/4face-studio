import freshTvIcon from "./images/fresh_tv.svg";

/**
 * The available types of Project
 * @type {{app: {color: string, text: string}, lib: {color: string, text: string}}}
 */
const projectType = {
  app: { text: "App", color: "red" },
  lib: { text: "Lib", color: "orange" }
};

/**
 * The actual list of projects
 * @type { { string, { string, string}, string, { string, string } } }
 *
 * @author Davide Giuseppe Farella
 */
const projects = {
  /** Fresh Tv app */
  freshTv: {
    title: "Fresh Tv",
    description: {
      en: `is an app for watch **IPTV**, born with the goal of create a new app, simple for every one and with a _"FRESH"_ design!`,
      it: `è un app per guardare l'**IPTV**, nata con l'obiettivo di creare una nuova app, semplice per chiunque e con uno stile _"FRESH"_!`
    },
    icon: freshTvIcon,
    link: "https://github.com/4face-studi0/FreshTv-android",
    type: projectType.app
  },

  /** Theia library */
  theia: {
    title: "Theia",
    description: {
      en:
        "is a **lightweight image loader** for Android with a _cache system_ and built-in **Kotlin DSL**",
      it:
        "è un **leggerissimo image loader** con un _sistema di cache_ e con **Kotlin DSL** integrato"
    },
    link: "https://github.com/4face-studi0/Theia",
    type: projectType.lib
  },

  /** View State Store library */
  viewStateStore: {
    title: "View State Store",
    description: {
      en:
        "permits to handle an **unidirectional data-flow** to la UI, wrapping a _LiveData_.",
      it:
        "permette di gestire un **flusso dati unidirezionale** verso la UI, wrappando un _LiveData_."
    },
    link: "https://github.com/4face-studi0/ViewStateStore",
    type: projectType.lib
  },

  /** Material Bottom Bar library */
  materialBottomBar: {
    title: "Material Bottom Bar",
    description: {
      en:
        "lets you implement a customized _BottomAppBar_ and a **bottom drawer** with just few simple steps.",
      it:
        "permette di implmentare una _BottomAppBar_ custom con un **bottom drawer** in pochi semplici step."
    },
    link: "https://github.com/4face-studi0/MaterialBottomBar",
    type: projectType.lib
  },

  /** Fluent Notifications library */
  fluentNotifications: {
    title: "Fluent Notifications",
    description: {
      en: "is an idiomatic **Kotlin DSL** for create _Android's Notification_",
      it: "è un **Kotlin DSL** idiomatico per creare _Notifiche su Android_"
    },
    link: "https://github.com/4face-studi0/FluentNotifications",
    type: projectType.lib
  }
};

export default projects;
