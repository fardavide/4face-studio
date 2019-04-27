import Project from "../models/Project";
import ProjectsSource from "./ProjectsSource";

import { strings } from "../res/strings";
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
            string(projectFields.title),
            string(projectFields.description),
            string(projectFields.icon),
            string(projectFields.link),
            string(projectFields.type)
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
const source = new ProjectsSource(strings.projects.item);
