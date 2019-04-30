import React from "react";
import { Markdown, ResponsiveContext, Text } from "grommet";

import { color } from "../res/colors";

/**
 * A {React.Component} for Caption Text
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const CaptionText = props => {
  /**
   * @return {string} size of the text
   * @param size {string} screen size
   */
  const textSize = size => {
    if (size === "small") return "xsmall";
    else return "small";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Text
          alignSelf="center"
          textAlign="center"
          size={textSize(size)}
          {...props}
        >
          <Markdown {...props} />
        </Text>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A {React.Component} for Content Text
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const ContentText = props => {
  /**
   * @return {string} size of the text
   * @param size {string} screen size
   */
  const textSize = size => {
    if (size === "small") return "small";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Text
          alignSelf="center"
          textAlign="center"
          size={textSize(size)}
          {...props}
        >
          <Markdown {...props} />
        </Text>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A {React.Component} for Title Text
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const HeaderText = props => {
  /**
   * @return {string} size of the text
   * @param size {string} screen size
   */
  const textSize = size => {
    if (size === "small") return "xlarge";
    else return "xxlarge";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Text
          alignSelf="center"
          textAlign="center"
          size={textSize(size)}
          weight="bold"
          color={color.onBackground}
        >
          <Markdown {...props} />
        </Text>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A {React.Component} for Caption Text
 * @inherit from {CaptionText}
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const LabelText = props => <CaptionText weight="bold" {...props} />;

/**
 * A {React.Component} for Subtitle Text
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const SubtitleText = props => {
  /**
   * @return {string} size of the text
   * @param size {string} screen size
   */
  const textSize = size => {
    if (size === "small") return "small";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Text
          alignSelf="center"
          textAlign="center"
          size={textSize(size)}
          weight="bold"
          color={color.tertiary}
          {...props}
        >
          <Markdown {...props} />
        </Text>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A {React.Component} for Title Text
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const TitleText = props => {
  /**
   * @return {string} size of the text
   * @param size {string} screen size
   */
  const textSize = size => {
    if (size === "small") return "large";
    else return "xlarge";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Text
          alignSelf="center"
          textAlign="center"
          size={textSize(size)}
          weight="bold"
          color={color.onSurface}
          {...props}
        >
          <Markdown {...props} />
        </Text>
      )}
    </ResponsiveContext.Consumer>
  );
};
