/**
 * A Model for a Reference item
 *
 * @author Davide Giuseppe Farella
 */
export default class Reference {
  /**
   * @constructor for {Reference}
   *
   * @param name {string} name of the Project
   * @param icon {string} icon of the Project
   * @param link {string} link of the Project
   */
  constructor(name, icon, link) {
    this.name = name;
    this.icon = icon;
    this.link = link;
  }
}
