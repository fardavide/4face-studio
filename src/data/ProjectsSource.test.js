import expect from "expect";
import { strings } from "../res/strings";
import ProjectsSource from "./ProjectsSource";

const source = new ProjectsSource(strings.projects.item);

it("right projects count", () => {
  expect(source.count()).toStrictEqual(5);
});

it("'all' function does not crash", () => {
  source.all();
});
