/**
 * A Data Source for the References.
 *
 * @author Davide Giuseppe Farella
 */
export default class ReferencesSource {
  /**
   * @constructor for {ReferencesSource}
   * @param root {*} containing the references' {string}s
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
