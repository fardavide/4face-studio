import Project from "../models/Project";
import ProjectsSource from "./ProjectsSource";
import Reference from "../models/Reference";
import ReferencesSource from "./ReferencesSource";

import projects from "../res/projects";
import references from "../res/references";
import string from "../res/strings";

/**
 * A repository for the App.
 *
 * @author Davide Giuseppe Farella
 */
export default class Repository {
  /** @return {Project[]} of all the available projects */
  projects() {
    return projectsSource
      .all()
      .map(
        projectFields =>
          new Project(
            projectFields.title,
            string(projectFields.description),
            projectFields.icon,
            projectFields.link,
            projectFields.type
          )
      );
  }

  /** @return {Reference[]} of all the available references */
  references() {
    return referencesSource
      .all()
      .map(
        referenceFields =>
          new Reference(
            string(referenceFields.name),
            referenceFields.icon,
            referenceFields.link
          )
      );
  }
}

/**
 * A reference to {ProjectSource} for retrieve {Project}s
 * @type {ProjectsSource}
 */
const projectsSource = new ProjectsSource(projects);

/**
 * A reference to {ReferencesSource} for retrieve {Reference}s
 * @type {ReferencesSource}
 */
const referencesSource = new ReferencesSource(references);
