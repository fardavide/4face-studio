import expect from "expect";
import {
  balanceDisposition,
  gridCellsCount,
  itemsDisposition
} from "./FlexGrid";

it("gridCellsCount returns right counts", () => {
  expect(gridCellsCount(10, 3)).toStrictEqual({
    columnsCount: 6,
    rowsCount: 4
  });
});

it("itemsDisposition return right disposition", () => {
  expect(itemsDisposition(10, 4)).toStrictEqual([3, 3, 3, 1]);
  expect(itemsDisposition(10, 3)).toStrictEqual([4, 4, 2]);
  expect(itemsDisposition(10, 2)).toStrictEqual([5, 5]);
});

it("balanceDisposition return correctly balanced disposition", () => {
  expect(balanceDisposition([3, 3, 3, 1])).toStrictEqual([3, 3, 2, 2]);
  expect(balanceDisposition([4, 4, 2])).toStrictEqual([4, 3, 3]);
  expect(balanceDisposition([5, 5])).toStrictEqual([5, 5]);
  expect(balanceDisposition([5, 5, 1])).toStrictEqual([5, 3, 3]);
});
