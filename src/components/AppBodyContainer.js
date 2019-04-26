import React from "react";
import { Box } from "grommet";

import { color } from "../res/colors";

/**
 * A {React.Component} for a Container the App body
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const AppBodyContainer = props => (
  <Box
    fill={true}
    overflow={{ horizontal: "hidden" }}
    pad={{ horizontal: "large", vertical: "small" }}
    background={color.background}
    {...props}
  />
);
