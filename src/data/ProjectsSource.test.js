import expect from "expect";
import projects from "../res/projects";
import ProjectsSource from "./ProjectsSource";

const source = new ProjectsSource(projects);

it("right projects count", () => {
  expect(source.count()).toStrictEqual(Object.keys(projects).length);
});

it("'all' function does not crash", () => {
  source.all();
});
