import React, { Component } from "react";
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
      radius: '999px'
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

  return (
    <Grommet theme={theme}>
      <Box fill flex>
        <Drawer isMenuOpen={isMenuOpen} onMenuClose={flipValue} />
        <AppBar
          isAtTop={isAtTop}
          isMenuOpen={isMenuOpen}
          onMenuClick={flipValue}
        />
        <AppBodyContainer>
          <AboutSection />
          <ReferencesSection />
          <ProjectsSection />
          <ContactSection />
        </AppBodyContainer>
        <Footer />
      </Box>
    </Grommet>
  );
};

export default App;
