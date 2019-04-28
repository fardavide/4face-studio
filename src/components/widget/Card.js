import React from "react";
import { Box } from "grommet";

import { color } from "../../res/colors";

/**
 * A Card {Component}
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
const Card = props => (
  <Box
    round="medium"
    background={color.surface}
    elevation="medium"
    {...props}
  />
);
 export default Card