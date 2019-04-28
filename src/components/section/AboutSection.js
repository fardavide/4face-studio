import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { ContentText, SubtitleText } from "../typography";
import { SectionContainer } from "./SectionContainer";
import RoundedImage from "../widget/RoundedImage";

import { SectionCard } from "../widget/SectionCard";

import me from "../../res/images/me.jpg";
import string from "../../res/strings";

/**
 * A {React.Component} for About Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const AboutSection = props => {
  /**
   * @return {string} width of the `image` section regarding the screen's size
   * @param size {string} screen size
   */
  const imageWidth = size => {
    if (size === "small") return "1/3";
    else return "1/4";
  };

  /**
   * @return {string} vertical pad on the `image` section regarding the screen's size
   * @param size {string} screen size
   */
  const imageVerticalPad = size => {
    if (size === "small") return "xlarge";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <SectionContainer>
          <SectionCard>
            <Grid
              fill="horizontal"
              rows={["xxsmall", "small"]}
              columns={[imageWidth(size), "auto"]}
              gap="medium"
              areas={[
                { name: "image", start: [0, 0], end: [0, 1] },
                { name: "header", start: [1, 0], end: [1, 0] },
                { name: "content", start: [1, 1], end: [1, 1] }
              ]}
            >
              <Box gridArea="image" pad={{ vertical: imageVerticalPad(size) }}>
                <RoundedImage src={me} fit="cover" />
              </Box>
              <Box gridArea="header" alignSelf="end">
                <SubtitleText>{string("about.headline")}</SubtitleText>
              </Box>
              <Box gridArea="content">
                <ContentText>{string("about.bio")}</ContentText>
              </Box>
            </Grid>
          </SectionCard>
        </SectionContainer>
      )}
    </ResponsiveContext.Consumer>
  );
};
