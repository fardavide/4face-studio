import React from "react";
import PropTypes from "prop-types";
import { Box, Image, ResponsiveContext } from "grommet";

import { TitleText } from "../typography";

/**
 * A {React.Component} for Header of Section. Must be inside {SectionContainer}
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const SectionHeader = props => {
  /**
   * @return {string} the gap between the Image and the Title regarding the screen's size
   * @param size {string} screen size
   */
  const gap = size => {
    if (size === "small") return "large";
    else return "xlarge";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="row"
          alignSelf="center"
          gap={gap(size)}
          margin={{ bottom: "medium" }}
        >
          <Box width="xsmall" height="xsmall">
            <Image src={props.image} fit="cover" {...props} />
          </Box>
          <TitleText {...props}>{props.title}</TitleText>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

/** {PropTypes} for {SectionHeader} */
SectionHeader.props = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
