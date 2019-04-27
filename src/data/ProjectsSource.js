/**
 * A Data Source for the Projects.
 *
 * @author Davide Giuseppe Farella
 */
export default class ProjectsSource {
  /**
   * @constructor for {ProjectsSource}
   * @param root {*} containing the projects' {string}s
   */
  constructor(root) {
    this.root = root;
  }

  /** @return array of fields for every project */
  all() {
    return Object.values(this.root);
  }

  /** @return {number} count of total projects */
  count() {
    return Object.keys(this.root).length;
  }
}
