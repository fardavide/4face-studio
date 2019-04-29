import React from "react";
import PropTypes from "prop-types";
import { Box, Image, ResponsiveContext } from "grommet";

import { HeaderText } from "../typography";

/**
 * A {React.Component} for Header of Section. Must be inside {SectionBody}
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

  const iconSize = size => {
    if (size === "small") return "xxsmall";
    else return "xsmall";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          alignSelf="center"
          fill="horizontal"
          pad="small"
          margin={{ vertical: "medium" }}
        >
          <Box alignSelf="center" direction="row" gap={gap(size)}>
            <Box width={iconSize(size)} height={iconSize(size)}>
              <Image src={props.image} fit="cover" {...props} />
            </Box>
            <HeaderText {...props}>{props.title}</HeaderText>
          </Box>
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
