import React, { Component } from "react";
import { Box, Grommet } from "grommet";

import { AboutSection } from "./components/section/AboutSection";
import { AppBar } from "./components/AppBar";
import { AppBodyContainer } from "./components/AppBodyContainer";
import { ContactSection } from "./components/section/ContactSection";
import { Drawer } from "./components/Drawer";
import { Footer } from "./components/Footer";
import { useTopDetector } from "./hooks"

const theme = {
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
  const isAtTop = useTopDetector(true)

  /**
 * Whether the side menu is open
 * @type {boolean}
 */
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Grommet theme={theme}>
      <Box fill flex>
        <Drawer
          isMenuOpen={isMenuOpen}
          onMenuClose={() => setIsMenuOpen(false)}
        />
        <AppBar
          isAtTop={isAtTop}
          isMenuOpen={isMenuOpen}
          onMenuClick={() => setIsMenuOpen(true)}
        />
        <AppBodyContainer>
          <AboutSection />
          <ContactSection />
        </AppBodyContainer>
        <Footer />
      </Box>
    </Grommet>
  )
}

export default App;
