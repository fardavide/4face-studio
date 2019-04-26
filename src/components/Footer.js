import React from "react";
import { Box, Button, Heading } from "grommet";

import { Close, Menu } from "grommet-icons";

import { color } from "../res/colors";
import string from "../res/strings";
import { CaptionText } from "./typography";

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
    pad='large'
    style={{ zIndex: "1" }}
    {...props}
  >
    <CaptionText>{string("footer.credits")}</CaptionText>
    <CaptionText>{string("footer.copyright")}</CaptionText>
  </Box>
);
