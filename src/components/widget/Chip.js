import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Image } from "grommet";

import { ContentText } from "../typography";
import PrimaryButton from "./PrimaryButton";

/**
 * A Chip {Component}
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
const Chip = props => {
  return (
    <PrimaryButton
      alignSelf="start"
      label={<ContentText>{props.label}</ContentText>}
      icon={
        <Box fill="vertical" width="30px" margin={{ vertical: "xsmall" }}>
          <Image src={props.iconSrc} fit="cover" />
        </Box>
      }
      {...props}
    />
  );
};

export default Chip;

/**
 * {PropTypes} for {Chip}
 * @type { iconSrc: *, label: string }
 */
Chip.props = {
  label: PropTypes.string.isRequired,
  iconSrc: PropTypes.any.isRequired
};
