import React from "react";
import { Box } from "grommet";

import { CaptionText } from "./typography";

import { color } from "../res/colors";
import string from "../res/strings";

/**
 * A {React.Component} for Footer of the App
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const Footer = props => (
  <Box
    flex
    align="center"
    background={color.background}
    pad="large"
    style={{ zIndex: "1" }}
    {...props}
  >
    <CaptionText>{string("footer.credits")}</CaptionText>
    <CaptionText>{string("footer.copyright")}</CaptionText>
  </Box>
);
