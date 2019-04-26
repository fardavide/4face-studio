import React from "react";
import { Box, ResponsiveContext } from "grommet";

/**
 * A {React.Component} for a Container of a Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const SectionContainer = props => {
  /**
   * @return {string} value of pad.horizontal regarding the current screen's size
   * @param size {string} screen size
   */
  const horizontalPad = size => {
    if (size === "medium") return "large";
    if (size === "large") return "xlarge";
  };

  /**
   * @return {string} value of margin.horizontal regarding the current screen's size
   * @param size {string} screen size
   */
  const horizontalMargin = size => {
    if (size === "large") return "xlarge";
  };

  /**
   * @return {string} value of the width regarding the current screen's size
   * @param size {string} screen size
   */
  const width = size => {
    if (size === 'large') return 'xxlarge';
    else return '100%';
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          width={width(size)}
          alignSelf='center'
          pad={{ vertical: "medium", horizontal: horizontalPad(size) }}
          margin={{
            vertical: "none",
            horizontal: horizontalMargin(size)
          }}
          {...props}
        />
      )}
    </ResponsiveContext.Consumer>
  );
};
