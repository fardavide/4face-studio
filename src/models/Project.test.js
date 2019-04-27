import expect from "expect";
import Project from "./Project";

it("Project object has right values", () => {
  const title = "title";
  const description = "desc";
  const icon = "icon";
  const link = "link";

  const project = new Project(title, description, icon, link);

  expect(project.title).toStrictEqual(title);
  expect(project.description).toStrictEqual(description);
  expect(project.icon).toStrictEqual(icon);
  expect(project.link).toStrictEqual(link);
});
