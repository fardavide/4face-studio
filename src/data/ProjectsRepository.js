import Project from "../models/Project";
import ProjectsSource from "./ProjectsSource";

import projects from "../res/projects";
import string from "../res/strings";

/**
 * A repository for the Projects.
 *
 * @author Davide Giuseppe Farella
 */
export default class ProjectsRepository {
  /** @return {Project[]} of all the available projects */
  all() {
    return source
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
  /** @return {number} count of total projects */
  count() {
    return source.count();
  }
}

/**
 * A reference to {ProjectSource} for retrieve Projects
 * @type {ProjectsSource}
 */
const source = new ProjectsSource(projects);
