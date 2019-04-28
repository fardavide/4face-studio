import React from "react";
import PropTypes from "prop-types";

import { Box, Image, ResponsiveContext } from "grommet";

import Card from "../widget/Card";
import FlexGrid from "../widget/FlexGrid";
import PrimaryButton from "../widget/PrimaryButton";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";

import { ContentText, LabelText, SubtitleText } from "../typography";

import ProjectsRepository from "../../data/ProjectsRepository";

import projects from "../../res/images/projects.svg";
import placeholder_github from "../../res/images/placeholder-github.svg";
import string, { strings } from "../../res/strings";
import { openUrlInNewTab } from "../../utils";

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
    if (size === "small") return 2;
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
    return size;
    // if (size === "small") return "small";
    // else if (size === "medium") return "medium";
    // else return "large";
  };

  /**
   * @return {string} size of a single row of {Project}s, regarding the screen's size
   * @param size {string} screen size
   */
  const projectsRowSize = size => {
    if (size === "small") return "medium";
    else if (size === "medium") return "medium";
    else return "medium";
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
   * @return {string} size of the pad {Project}s {Box}
   * @param size {string} screen size
   */
  const boxPad = size => {
    if (size === "small") return "small";
    else if (size === "medium") return "small";
    else return "medium";
  };

  /**
   * @return {string} direction for {Card}
   * @param size {string} screen size
   */
  const cardDirection = size => {
    if (size === "small") return "column";
    else return "column";
  };

  /**
   * @return {string} justify type of Text items
   * @param size {string} screen size
   */
  const textJustify = size => {
    if (size === "small") return "center";
    else return "center";
  };

  /** @return {React.Component} icon for {Project} */
  function icon() {
    const i = props.project.icon;
    if (i) return <ProjectIcon src={i} />;
    else return <GithubPlaceHolder />;
  }

  /**
   * @return {string} top margin for {title} text
   * @param size {string} screen size
   */
  const titleTopMargin = size => {
    if (size === "small") return "xxsmall";
    else return "xsmall";
  };

  /**
   * @return {React.Component} title for {Project}
   * @param size {string} screen size
   */
  const title = size => {
    return (
      <SubtitleText truncate margin={{ top: titleTopMargin() }}>
        {props.project.title}
      </SubtitleText>
    );
  };

  /**
   * @return {React.Component} description for {Project}
   * @param size {string} screen size
   */
  const description = size => {
    /**
     * // TODO size should be inherited from {ContentText}, why it doesn't?
     * @return {string} size of the {description} text
     */
    const textSize = () => {
      if (size === "small") return "small";
    };

    return (
      <ContentText size={textSize(size)}>
        {props.project.description}
      </ContentText>
    );
  };

  /** @return {React.Component} type for {Project} */
  function type() {
    return (
      <LabelText color={props.project.type.color} alignSelf="start">
        {props.project.type.text}
      </LabelText>
    );
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Card
          flex
          direction={cardDirection(size)}
          pad={boxPad(size)}
          fill={false}
          justify="center"
        >
          {icon()}
          <Box flex>
            <Box
              direction="row"
              gap="xsmall"
              margin={{ top: titleTopMargin() }}
              justify={textJustify(size)}
            >
              {type()}
              {title()}
            </Box>
            <Box flex fill='vertical'>{description(size)}</Box>
            <PrimaryButton
              type="button"
              label={string(strings.action.gitHub)}
              margin="xsmall"
              alignSelf="end"
              onClick={() => {
                openUrlInNewTab(props.project.link);
              }}
            />
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
   * @return {string} height of the icon.
   * @param size {string} screen size
   */
  const iconHeight = size => {
    if (size === "small") return "xsmall";
    else return "small";
  };

  /**
   * @return {string} width of the icon.
   * @param size {string} screen size
   */
  const iconWidth = size => {
    if (size === "small") return "auto";
    else return "auto";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box width={iconWidth(size)} height={iconHeight(size)} flex>
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
