/**
 * A Model for a Project item
 *
 * @author Davide Giuseppe Farella
 */
export default class Project {
  /**
   * @constructor for {Project}
   *
   * @param title {string} title of the Project
   * @param description {string} description of the Project
   * @param icon {string} icon of the Project
   * @param link {string} link of the Project
   * @param type {string} type of the Project ( 'App' or 'Lib' )
   */
  constructor(title, description, icon, link, type) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.link = link;
    this.type = type;
  }
}
