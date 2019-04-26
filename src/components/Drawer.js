import React, { Component } from "react";
import { Box, Button, Layer, ResponsiveContext } from "grommet";

import { FormClose } from "grommet-icons";

import { color } from "../res/colors";

/**
 * The Drawer menu
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
export class Drawer extends Component {

  /** When the {Drawer} requires to be closed */
  onMenuClose = () => {
    this.props.onMenuClose();
  };

  /**
   * @return {*} `full` prop for {Layer}. `true` if {size} is `small`, else {vertical}
   * @param size {string} screen size
   */
  full = size => {
    if (size === "small") return true;
    else return "vertical";
  };

  render() {
    const { isMenuOpen } = this.props;

    return (
      <ResponsiveContext.Consumer>
        {size =>
          isMenuOpen && (
            <Layer
              animate={true}
              full={this.full(size)}
              position="left"
              onEsc={this.onMenuClose}
              onClickOutside={this.onMenuClose}
            >
              <Box
                flex
                width="large"
                background={color.surface}
                elevation="medium"
              >
                {size === "small" && (
                  <Box
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button icon={<FormClose />} onClick={this.onMenuClose} />
                  </Box>
                )}
                <Box flex align="center" justify="center">
                  Drawer menu
                </Box>
              </Box>
            </Layer>
          )
        }
      </ResponsiveContext.Consumer>
    );
  }
}
