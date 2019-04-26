import React from "react";
import { Button } from "grommet";

import { color } from "../../res/colors";

/**
 * A primary Button {Component}
 * @extends {Component}
 *
 * @author Davide Giuseppe Farella
 */
export const PrimaryButton = props => (
  <Button color={color.tertiary} margin="small" alignSelf="end" {...props} />
);
