import React from "react";
import { Image } from "grommet";

import Card from "./Card";

/**
 * A custom {Image} that has rounded corners
 *
 * @author Davide Giuseppe Farella
 */
const RoundedImage = props => {
  return (
    <Card height={props.height} width={props.width} overflow="auto">
      <Image src={props.src} fit={props.fit} />
    </Card>
  );
};

export default RoundedImage;
