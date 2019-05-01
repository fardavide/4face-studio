import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Box, Button, DropButton, Heading } from "grommet";

import { Close, Language, Menu } from "grommet-icons";
import { ContentText } from "./typography";

import color from "../res/colors";
import string, { setCurrentLang, supportedLang } from "../res/strings";
import { useToggle } from "../hooks";

/**
 * A {React.Component} for Top bar of the App
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const AppBar = props => {
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

  /** Whether the language drop menu should be open */
  const [isLanguageMenuOpen, toggleLanguageMenu] = useToggle(false);

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
      <Box flex>
        <DropButton
          alignSelf="end"
          icon={<Language />}
          dropAlign={{ top: "bottom", right: "right" }}
          open={isLanguageMenuOpen}
          onClick={toggleLanguageMenu}
          dropContent={
            <LanguageMenu
              onLanguageChange={props.onLanguageChange}
              closeMenu={toggleLanguageMenu}
            />
          }
        />
      </Box>
    </Box>
  );
};

/**
 * @return {React.Component} menu for select the language
 * @param onLanguageChange {function} that will be invoked when the language changes
 * @param closeMenu {function} for close the drop menu
 * @constructor
 */
const LanguageMenu = ({ onLanguageChange, closeMenu }) => (
  <Box width="small" justify="center" height="small" gap="small">
    {supportedLang.map(entry => (
      <ContentText
        justify="center"
        flex
        onClick={() => {
          onLanguageChange(entry);
          closeMenu();
        }}
      >
        {entry.name}
      </ContentText>
    ))}
  </Box>
);

/** {PropTypes} for {AppBar} */
AppBar.propTypes = {
  isAtTop: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func.isRequired
};
