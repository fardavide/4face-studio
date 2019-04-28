import React from "react";
import PropTypes from "prop-types";

import { Box, Image, ResponsiveContext } from "grommet";

import { Card } from "../widget/Card";
import FlexGrid from "../widget/FlexGrid";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";

import { ContentText, SubtitleText, TitleText } from "../typography";

import ProjectsRepository from "../../data/ProjectsRepository";

import projects from "../../res/images/projects.svg";
import placeholder_github from "../../res/images/placeholder-github.svg";
import string from "../../res/strings";

/**
 * @return {React.Component} for Projects Section
 * @param props
 * @constructor
 *
 * @author Davide Giuseppe Farella
 */
export const ProjectsSection = props => {
  /**
   * @return {number} number of max columns for the {Project}s {FlexGrid} depending on the screen's size
   * @param size {string} screen size
   */
  const maxColumns = size => {
    if (size === "small") return 1;
    else if (size === "medium") return 3;
    else if (size === "large") return 4;
  };

  /**
   * @return {Project[]} from {ProjectsRepository}
   */
  const projectItems = () =>
    repository.all().map(project => <Project project={project} />);

  /**
   * @return {string} size of the gap between {Project}s for {FlexGrip}
   * @param size {string} screen size
   */
  const projectsGap = size => {
    if (size === "small") return "small";
    else return "large";
  };

  /**
   * @return {string} size of a single row of {Project}s, regarding the screen's size
   * @param size {string} screen size
   */
  const projectsRowSize = size => {
    return "auto";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <SectionContainer>
          <SectionHeader image={projects} title={string("projects.title")} />
          <FlexGrid
            gap={projectsGap(size)}
            items={projectItems()}
            columnsLimit={maxColumns(size)}
            rowHeight={projectsRowSize(size)}
          />
        </SectionContainer>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * A reference to {ProjectsRepository} for retrieve the Projects
 * @type {ProjectsRepository}
 */
const repository = new ProjectsRepository();

/**
 * @return {React.Component} for a single {Project}
 * @param props
 * @constructor
 */
const Project = props => {
  /**
   * @return {string} size of the gap between items for the {Project}s {Box}
   * @param size {string} screen size
   */
  const boxGap = size => {
    if (size === "small") return "small";
    else return "medium";
  };

  /** @return {React.Component} icon for {Project} */
  function icon() {
    const i = props.project.icon;
    if (i) return <ProjectIcon src={i} />;
    else return <GithubPlaceHolder />;
  }

  /** @return {React.Component} title for {Project} */
  function title() {
    return <TitleText>{props.project.title}</TitleText>;
  }

  /**
   * @return {string} size of the {description} text // TODO size should be inherited from {ContentText}, why it doesn't?
   * @param size {string} screen size
   */
  const descriptionTextSize = size => {
    if (size === "small") return "small";
  };

  /** @return {React.Component} description for {Project} */
  const description = size => (
    <ContentText size={descriptionTextSize(size)}>
      {props.project.description}
    </ContentText>
  );

  /** @return {React.Component} type for {Project} */
  function type() {
    return <SubtitleText alignSelf="start">{props.project.type}</SubtitleText>;
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Card pad={boxGap(size)} gap={boxGap(size)} fill={false}>
          {icon()}
          <Box direction="row" gap="xsmall" justify="center">
            {type()}
            {title()}
          </Box>
        </Card>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * {PropTypes} for {Project}
 * @params {{project: Project[]}}
 */
Project.props = {
  project: PropTypes.any.isRequired
};

/**
 * @return {React.Component} of Icon of a Project
 * @param props
 * @constructor
 */
const ProjectIcon = props => {
  /**
   * @return {string} size of the icon.
   * @param size {string} screen size
   */
  const iconSize = size => {
    if (size === "small") return "xsmall";
    else return "small";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box width="auto" height={iconSize(size)} flex alignSelf="center">
          <Image fit="center" {...props} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * @return {React.Component} of a placeholder image showing the GitHub logo.
 * @constructor
 */
const GithubPlaceHolder = () => (
  <ProjectIcon src={placeholder_github} opacity="medium" />
);
