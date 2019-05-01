import githubIcon from "./images/github.svg";
import linkedInIcon from "./images/linkedin.svg";
import mediumIcon from "./images/medium.svg";
import redditIcon from "./images/reddit.svg";
import slackIcon from "./images/slack.svg";
import twitterIcon from "./images/twitter.svg";

/**
 * The actual list of references
 * @type { { { string }, string, string } }
 *
 * @author Davide Giuseppe Farella
 */
const references = {
  /** LinkedIn */
  linkedIn: {
    name: {
      en: "LikedIn profile",
      it: "Profilo LinkedIn",
      cn: "HELE"
    },
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/davide-giuseppe-farella-ba81a861/"
  },

  /** Twitter */
  twitter: {
    name: {
      en: "Twitter profile",
      it: "Profilo Twitter",
      cn: "HELE"
    },
    icon: twitterIcon,
    link: "https://twitter.com/4face91"
  },

  /** Github */
  github: {
    name: {
      en: "GitHub projects",
      it: "Progetti su GitHub",
      cn: "HELE"
    },
    icon: githubIcon,
    link: "https://github.com/4face-studi0"
  },

  /** Medium */
  medium: {
    name: {
      en: "Medium Stories",
      it: "Storie su Medium",
      cn: "HELE"
    },
    icon: mediumIcon,
    link: "https://medium.com/@fardavide"
  },

  /** ADI Slack */
  adiSlack: {
    name: {
      en: "Android community on Slack",
      it: "Comunità Android su Slack",
      cn: "HELE"
    },
    icon: slackIcon,
    link: "https://androiddevsitaly.slack.com"
  },

  /** Kotlin Slack */
  kotlinSlack: {
    name: {
      en: "Kotlin community on Slack",
      it: "Comunità Kotlin su Slack",
      cn: "HELE"
    },
    icon: slackIcon,
    link: "https://kotlinlang.slack.com"
  },

  /** Reddit */
  reddit: {
    name: {
      en: "Reddit profile",
      it: "Profilo Reddit",
      cn: "HELE"
    },
    icon: redditIcon,
    link: "https://www.reddit.com/user/4face91"
  }
};

export default references;
