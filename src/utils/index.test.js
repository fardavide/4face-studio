import expect from "expect";
import { balanceArrayChunks, splitArrayInChunks } from "./index";

it("balanceArrayChunks executes correctly", () => {
  const source = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]];
  const result = balanceArrayChunks(source);
  expect(result).toStrictEqual([[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]);
});

it("splitArrayInChunks executes correctly", () => {
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = splitArrayInChunks(source, 2);
  expect(result).toStrictEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
});
