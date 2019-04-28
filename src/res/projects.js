import freshTvIcon from "./images/fresh_tv.svg";

/**
 * The available types of Project
 * @type {{app: string, lib: string}}
 */
const projectType = { app: "App", lib: "Lib" };

/**
 * The actual list of projects
 *
 * @author Davide Giuseppe Farella
 */
const projects = {
  /** Fresh Tv app */
  freshTv: {
    title: {
      en: "Fresh Tv",
      it: "Fresh Tv"
    },
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
  }

  /** Theia library */
  // theia: {
  //   title: {
  //     en: "",
  //     it: ""
  //   },
  //   description: {
  //     en: "",
  //     it: ""
  //   },
  //   icon: {
  //     en: "",
  //     it: ""
  //   },
  //   link: {
  //     en: "",
  //     it: ""
  //   },
  //   type: {
  //     en: projectType.Lib,
  //     it: projectType.Lib
  //   }
  // },

  /** View State Store library */
  // viewStateStore: {
  //   title: {
  //     en: "",
  //     it: ""
  //   },
  //   description: {
  //     en: "",
  //     it: ""
  //   },
  //   icon: {
  //     en: "",
  //     it: ""
  //   },
  //   link: {
  //     en: "",
  //     it: ""
  //   },
  //   type: {
  //     en: projectType.Lib,
  //     it: projectType.Lib
  //   }
  // },

  /** Material Bottom Bar library */
  // materialBottomBar: {
  //   title: {
  //     en: "",
  //     it: ""
  //   },
  //   description: {
  //     en: "",
  //     it: ""
  //   },
  //   icon: {
  //     en: "",
  //     it: ""
  //   },
  //   link: {
  //     en: "",
  //     it: ""
  //   },
  //   type: {
  //     en: projectType.Lib,
  //     it: projectType.Lib
  //   }
  // },

  /** Fluent Notifications library */
  // fluentNotifications: {
  //   title: {
  //     en: "",
  //     it: ""
  //   },
  //   description: {
  //     en: "",
  //     it: ""
  //   },
  //   icon: {
  //     en: "",
  //     it: ""
  //   },
  //   link: {
  //     en: "",
  //     it: ""
  //   },
  //   type: {
  //     en: projectType.Lib,
  //     it: projectType.Lib
  //   }
  // }
};

export default projects;
