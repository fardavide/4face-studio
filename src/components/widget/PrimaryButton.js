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
    type='button'
    color={color.primary}
    margin="small"
    fill={false}
    alignSelf="end"
    {...props}
    style={{ zIndex: "1", background: color.surface }}
  />
);

export default PrimaryButton;
