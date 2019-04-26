import React, { Component } from "react";
import { Box, Grommet } from "grommet";

import { AboutSection } from "./components/section/AboutSection";
import { AppBar } from "./components/AppBar";
import { AppBodyContainer } from "./components/AppBodyContainer";
import { ContactSection } from "./components/section/ContactSection";
import { Drawer } from "./components/Drawer";
import { Footer } from "./components/Footer";

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
class App extends Component {
  /** State of the {App} component */
  state = {
    /**
     * Whether the website is at the top position or scrolled down
     * @type {boolean}
     */
    isAtTop: true,
    /**
     * Whether the side menu is open
     * @type {boolean}
     */
    isMenuOpen: false
  };

  render() {
    const { isAtTop, isMenuOpen } = this.state;

    return (
      <Grommet theme={theme}>
        <Box fill flex>
          <Drawer
            isMenuOpen={isMenuOpen}
            onMenuClose={() => this.setState({ isMenuOpen: false })}
          />
          <AppBar
            isAtTop={isAtTop}
            isMenuOpen={isMenuOpen}
            onMenuClick={() => this.setState({ isMenuOpen: !isMenuOpen })}
          />
          <AppBodyContainer>
            <AboutSection />
            <ContactSection />
          </AppBodyContainer>
          <Footer />
        </Box>
      </Grommet>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      isAtTop: !scrolled
    });
  };
}

export default App;
