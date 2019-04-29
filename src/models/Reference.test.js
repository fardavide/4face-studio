import expect from "expect";
import Reference from "./Reference";

it("Reference object has right values", () => {
  const name = "name";
  const icon = "icon";
  const link = "link";

  const project = new Reference(name, icon, link);

  expect(project.name).toStrictEqual(name);
  expect(project.icon).toStrictEqual(icon);
  expect(project.link).toStrictEqual(link);
});
