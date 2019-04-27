import React from "react";
import { Box, Image, ResponsiveContext } from "grommet";

import { SectionCard } from "../widget/SectionCard";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";

import projects from "../../res/images/projects.svg";
import placeholder_github from "../../res/images/placeholder-github.svg";
import string from "../../res/strings";
import {Card} from "../widget/Card";

/**
 * A {React.Component} for Projects Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const ProjectsSection = props => {
  /**
   * @return {React.Component} of a placeholder image showing the GitHub logo.
   * @constructor
   */
  const GithubPlaceHolder = () => (
    <ProjectIcon src={placeholder_github} opacity="medium" />
  );

  /**
   * @return {string} horizontal pad of the Form
   * @param size {string} screen size
   */
  const horizontalPad = size => {
    if (size === "large") return "25%";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <SectionContainer>
          <SectionHeader image={projects} title={string("projects.title")} />
          <Box gap='small' orientation='row'>
            <Project icon={GithubPlaceHolder()} />
            <Project icon={GithubPlaceHolder()} />
            <Project icon={GithubPlaceHolder()} />
          </Box>
        </SectionContainer>
      )}
    </ResponsiveContext.Consumer>
  );
};

const Project = props => {

  const boxHeight = size => 'medium';

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Card height={boxHeight(size)} pad='small'>
          {props.icon}
        </Card>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * @return {React.Component} of Icon of a Project
 * @param props
 * @constructor
 */
const ProjectIcon = props => (
  <Box width="xsmall" height="xsmall" alignSelf='center'>
    <Image fit="cover" {...props} />
  </Box>
);
