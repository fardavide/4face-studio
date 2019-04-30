import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer, ResponsiveContext } from "grommet";

import {HeaderText, TitleText} from "./typography";

import { FormClose } from "grommet-icons";

import { color } from "../res/colors";
import string, { strings } from "../res/strings";

import email from "../res/images/email.svg";
import location from "../res/images/location.svg";
import projects from "../res/images/projects.svg";

/**
 * The Drawer menu
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
export const Drawer = props => {
  /**
   * When the {Drawer} requires to be closed
   * @type function
   */
  const onMenuClose = () => {
    props.onMenuClose();
  };

  /**
   * @return {string|boolean} `full` prop for {Layer}. `true` if {size} is `small`, else {vertical}
   * @param size {string} screen size
   */
  const full = size => {
    if (size === "small") return true;
    else return "vertical";
  };

  /**
   * @return {React.Component} for Button for close for `small` display size
   * @constructor
   */
  const CloseButton = () => (
    <Box tag="header" justify="end" align="center" direction="row">
      <Button icon={<FormClose />} onClick={onMenuClose} />
    </Box>
  );

  /**
   * @return {React.Component} for the Drawer's Items
   * @param props
   * @constructor
   */
  const Items = props => (
    <Box pad="large" gap="large">
      <PrimaryItem
        name={string(strings.references.title)}
        icon={location}
        sectionName="ReferencesSection"
        {...props}
      />
      <PrimaryItem
        name={string(strings.projects.title)}
        icon={projects}
        sectionName='ProjectsSection'
        {...props}
      />
      <PrimaryItem
        name={string(strings.contact.title)}
        icon={email}
        sectionName="ContactSection"
        {...props}
      />
    </Box>
  );

  /**
   * @return {React.Component} for a Primary Item of the {Drawer} menu
   * @param onItemClick a callback for when the Item is clicked
   * @param name {string} name of the Item
   * @param icon {*} icon of the Item
   * @param sectionName {string} Name of the Section
   * @constructor
   */
  const PrimaryItem = ({ onItemClick, name, icon, sectionName }) => (
    <Box
      direction="row"
      gap="large"
      onClick={() => {
        onItemClick(sectionName);
      }}
    >
      <Box width="xxsmall" height="xxsmall">
        <Image src={icon} fit="content" />
      </Box>
      <TitleText>{name}</TitleText>
    </Box>
  );

  return (
    <ResponsiveContext.Consumer>
      {size =>
        props.isMenuOpen && (
          <Layer
            animate={true}
            full={full(size)}
            position="left"
            onEsc={onMenuClose}
            onClickOutside={onMenuClose}
            style={{ zIndex: "10" }}
          >
            <Box
              flex
              width="large"
              background={color.surface}
              elevation="medium"
            >
              {size === "small" && <CloseButton />}
              <Items {...props} />
            </Box>
          </Layer>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

/**
 * {PropTypes} for {Drawer}
 * @type { onMenuClose: function, isMenuOpen: boolean, onMenuClick: function }
 */
Drawer.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired
};
