import React from "react";
import { Box, Image, ResponsiveContext } from "grommet";

import { SectionCard } from "../widget/SectionCard";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";

import { Card } from "../widget/Card";

import ProjectsRepository from "../../data/ProjectsRepository";
import {
  CaptionText,
  ContentText,
  SubtitleText,
  HeaderText,
  TitleText
} from "../typography";

import projects from "../../res/images/projects.svg";
import placeholder_github from "../../res/images/placeholder-github.svg";
import string from "../../res/strings";

/**
 * A {React.Component} for Projects Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const ProjectsSection = props => {
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
          <Box gap="small" orientation="row">
            {repository.all().map(project => (
              <Project project={project} />
            ))}
          </Box>
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
          <Box direction="row" gap="xsmall" justify='center'>
            {type()}
            {title()}
          </Box>
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
        <Box width={iconSize(size)} height={iconSize(size)} alignSelf="center">
          <Image fit="cover" {...props} />
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
