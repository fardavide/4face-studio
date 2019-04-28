import React from "react";
import { Button } from "grommet";

import { color } from "../../res/colors";

/**
 * A primary Button {Component}
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
const PrimaryButton = props => (
  <Button
    color={color.tertiary}
    margin="small"
    alignSelf="end"
    {...props}
    style={{ zIndex: "1", background: color.surface }}
  />
);

export default PrimaryButton;
