import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../hooks";

import { Box, Button, Drop, Heading } from "grommet";
import { SubtitleText } from "./typography";

import { Close, Language, Menu } from "grommet-icons";
import color from "../res/colors";
import string from "../res/strings";

/**
 * A {React.Component} for Top bar of the App
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const AppBar = props => {
  /** Reference to language's menu button */
  const languageButtonRef = useRef();

  /** Whether the language's menu needs to be shown */
  const [showLanguageMenu, setShowLanguageMenu] = useToggle(false);

  /**
   * Elevation for {AppBar}
   * @type {string}
   */
  const elevation = props.isAtTop ? "none" : "small";

  /**
   * Item color for the {AppBar}
   * @type {string} item color for the {AppBar}
   */
  const itemColor = color.onBackground;

  /**
   * @return the right menu icon whether the menu is open or close
   * @see props.isMenuOpen
   */
  const menuIcon = () => {
    if (props.isMenuOpen) return <Close color={itemColor} />;
    else return <Menu color={itemColor} />;
  };

  /** When the {menuIcon} is clicked */
  const onMenuClick = () => {
    props.onMenuClick();
  };

  return (
    <Box
      className="sticky"
      tag="header"
      direction="row"
      align="center"
      justify="start"
      background={color.background}
      elevation={elevation}
      pad={{ horizontal: "medium", vertical: "small" }}
      style={{ zIndex: "9" }}
      {...props}
    >
      <Button icon={menuIcon()} onClick={onMenuClick} />
      <Heading
        level="3"
        margin={{ left: "medium", vertical: "none" }}
        color={itemColor}
      >
        {string("appName")}
      </Heading>
      <Box flex ref={languageButtonRef} >
          <Button alignSelf="end" icon={<Language />} onClick={setShowLanguageMenu} />
          {showLanguageMenu && <LanguageMenu target={languageButtonRef} />}
      </Box>
    </Box>
  );
};

/**
 * @return {React.Component} menu for select the language
 * @param target {*} target of the {Drop}
 * @constructor
 */
const LanguageMenu = target => (
  <Drop target={target.current}>
    <Box width="small" height="small" background="red">
      <SubtitleText>BANANA</SubtitleText>
    </Box>
  </Drop>
);

/** {PropTypes} for {AppBar} */
AppBar.propTypes = {
  isAtTop: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired
};
