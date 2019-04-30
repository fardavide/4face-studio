import React, { Component, useRef } from "react";
import { Box, Grommet } from "grommet";
import { useToggle, useTopDetector } from "./hooks";

import { Drawer } from "./components/Drawer";
import { AppBar } from "./components/AppBar";

import { AppBodyContainer } from "./components/AppBodyContainer";
import { AboutSection } from "./components/section/AboutSection";
import { ProjectsSection } from "./components/section/ProjectsSection";
import { ContactSection } from "./components/section/ContactSection";
import { Footer } from "./components/Footer";
import { ReferencesSection } from "./components/section/ReferencesSection";

const theme = {
  button: {
    border: {
      radius: "999px"
    }
  },
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

/**
 * The App component
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
const App = () => {
  /** Reference to {ReferencesSection} */
  const referencesRef = useRef(null);
  /** Reference to {ProjectsSection} */
  const projectsRef = useRef(null);
  /** Reference to {ContactSection} */
  const contactsRef = useRef(null);

  /**
   * Whether the website is at the top position or scrolled down
   * @type {boolean}
   */
  const isAtTop = useTopDetector(true);

  /**
   * Whether the side menu is open
   * @type {boolean}
   */
  const [isMenuOpen, flipValue] = useToggle(false);

  /**
   * Callback when a Menu item is clicked
   * @param sectionName {string} name of the section where to scroll
   */
  const onMenuItemClick = sectionName => {
    let ref;
    if (sectionName === "ReferencesSection") ref = referencesRef;
    else if (sectionName === "ProjectsSection") ref = projectsRef;
    else if (sectionName === "ContactSection") ref = contactsRef;
    else throw Error(`Invalid section name: '${sectionName}'`);

    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <Grommet theme={theme}>
      <Box fill flex>
        <Drawer
          isMenuOpen={isMenuOpen}
          onMenuClose={flipValue}
          onItemClick={onMenuItemClick}
        />
        <AppBar
          isAtTop={isAtTop}
          isMenuOpen={isMenuOpen}
          onMenuClick={flipValue}
        />
        <AppBodyContainer>
          <AboutSection />
          <ReferencesSection ref={referencesRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactsRef} />
        </AppBodyContainer>
        <Footer />
      </Box>
    </Grommet>
  );
};

export default App;
