import expect from "expect";
import references from "../res/references";
import ReferencesSource from "./ReferencesSource";

const source = new ReferencesSource(references);

it("right projects count", () => {
  expect(source.count()).toStrictEqual(Object.keys(references).length);
});

it("'all' function does not crash", () => {
  source.all();
});
