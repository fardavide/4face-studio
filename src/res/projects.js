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
      it: `è un app per guardare l'**IPTV**, nata con l'obiettivo di creare una nuova app, semplice per chiunque e con uno stile _"FRESH"_!`,
      cn: `是一个可以观看**IPTV**的手机软件, 以创建新应用程序为目标而生,_"FRESH"_ 的设计更简单更实用`,
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
        "è un **leggerissimo image loader** con un _sistema di cache_ e con **Kotlin DSL** integrato",
      cn: 
        "是一个**轻巧型图像加载程序** 适用于带有高速缓存系统以及**Kotlin DSL**的安卓系统",
      
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
        "permette di gestire un **flusso dati unidirezionale** verso la UI, wrappando un _LiveData_.",
      cn: 
        "允许处理**单向数据流**进入用户界面，包装_LiveData_.",
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
        "permette di implmentare una _BottomAppBar_ custom con un **bottom drawer** in pochi semplici step.",
      cn:
        "让你实现自定义的_BottomAppBar_ 以及只需简单的几个步骤就可以完成**底部菜单** 
    },
    link: "https://github.com/4face-studi0/MaterialBottomBar",
    type: projectType.lib
  },

  /** Fluent Notifications library */
  fluentNotifications: {
    title: "Fluent Notifications",
    description: {
      en: "is an idiomatic **Kotlin DSL** for create _Android's Notification_",
      it: "è un **Kotlin DSL** idiomatico per creare _Notifiche su Android_",
      cn: "是为了制作安卓提示的一个**Kotlin DSL**语言
    },
    link: "https://github.com/4face-studi0/FluentNotifications",
    type: projectType.lib
  }
};

export default projects;
