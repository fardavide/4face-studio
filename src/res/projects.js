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
 *
 * @author Davide Giuseppe Farella
 */
const projects = {
  /** Fresh Tv app */
  freshTv: {
    title: "Fresh Tv",
    description: {
      en:
        '**Fresh TV** is a project born from a single developer, with the goal of create a new app, simple for every one and with a very _"FRESH" design!_\n' +
        "The app is built following the guidelines of the **Google Material Design®**.",
      it:
        '**Fresh TV** è un progetto nato da un singolo sviluppatore, con l\'obiettivo di creare una nuova app, semplice per chiunque e con uno stile molto _"FRESH"!_\n' +
        "L'app è creata seguendo le linee guida del **Material Design® di Google©**."
    },
    icon: freshTvIcon,
    link: "https://github.com/4face-studi0/FreshTv-android",
    type: projectType.app
  },

  /** Theia library */
  theia: {
    title: "Theia",
    description: {
      en: "a",
      it: "a"
    },
    link: "https://github.com/4face-studi0/Theia",
    type: projectType.lib
  },

  /** View State Store library */
  viewStateStore: {
    title: "View State Store",
    description: {
      en: "a",
      it: "a"
    },
    link: "https://github.com/4face-studi0/ViewStateStore",
    type: projectType.lib
  },

  /** Material Bottom Bar library */
  materialBottomBar: {
    title: "Material Bottom Bar",
    description: {
      en: "a",
      it: "a"
    },
    link: "https://github.com/4face-studi0/MaterialBottomBar",
    type: projectType.lib
  },

  /** Fluent Notifications library */
  fluentNotifications: {
    title: "Fluent Notifications",
    description: {
      en: "a",
      it: "a"
    },
    link: "https://github.com/4face-studi0/FluentNotifications",
    type: projectType.lib
  }
};

export default projects;
