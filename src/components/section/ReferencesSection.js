import React from "react";

import { Box, ResponsiveContext } from "grommet";
import { SectionBody } from "./SectionBody";
import { SectionHeader } from "./SectionHeader";
import Chip from "../widget/Chip";

import Repository from "../../data/Repository";
import Reference from "../../models/Reference";

import {
  balanceArrayChunks,
  openUrlInNewTab,
  splitArrayInChunks
} from "../../utils";

import string, { strings } from "../../res/strings";
import location from "../../res/images/location.svg";

/**
 * @return {React.Component} for References Section
 * @param props
 * @constructor
 *
 * @author Davide Giuseppe Farella
 */
export const ReferencesSection = props => {

  /**
   * @return {number} of max {Reference} items for every row
   * @param size {string} screen size
   */
  const itemsPerRow = size => {
    if (size === "small") return 1;
    else if (size === "medium") return 4;
    else if (size === "large") return 6;
  };

  /**
   * @return {React.Component[]} for a group of References
   * @param size {string} screen size
   * @constructor
   */
  const ReferencesGroup = size => {
    const unbalancedReferencesRowsItems = splitArrayInChunks(
      repository.references(),
      itemsPerRow(size)
    );
    const referencesRowsItems = balanceArrayChunks(
      unbalancedReferencesRowsItems
    );
    return referencesRowsItems.map(referencesRow =>
      ReferencesRow(referencesRow)
    );
  };

  /**
   * @return {React.Component} for a row of {Reference}s model
   * @param references {Reference[]}
   * @constructor
   */
  const ReferencesRow = references => (
    <Box direction="row" alignSelf="center">
      {references.map(ref => ReferenceItem(ref))}
    </Box>
  );

  /**
   * @return {React.Component} for a {Reference} model
   * @param ref {Reference}
   * @constructor
   */
  const ReferenceItem = ref => (
    <Chip
      label={ref.name}
      iconSrc={ref.icon}
      onClick={() => openUrlInNewTab(ref.link)}
    />
  );

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          <SectionHeader
            image={location}
            title={string(strings.references.title)}
          />
          <SectionBody>
            {ReferencesGroup(size)}
          </SectionBody>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A reference to {Repository} for retrieve the Projects
 * @type {Repository}
 */
const repository = new Repository();
