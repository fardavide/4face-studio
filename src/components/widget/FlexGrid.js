import React from "react";
import PropTypes from "prop-types";

import { Box, Grid } from "grommet";

/**
 * @return {React.Component} for a Grid that disposes items dynamically for achieve the best UI result
 *
 * @param props
 * @see FlexGrid.props
 *
 * @constructor
 */
const FlexGrid = props => {
  /**
   * A cache value for {gridFrame} functions
   * @type { { rows: string[], columns: string[], areas: { name: string, start: number[], end: number[] }[], boxes: Box[] } }
   */
  let cachedGridFrame;

  /**
   * Create a frame for the {Grid}.
   * It uses {cachedGridFrame} for avoid to make calculations multiple times
   * @return { { rows: string[], columns: string[], areas: { name: string, start: number[], end: number[] }[], boxes: Box[] } }
   */
  const gridFrame = () => {
    if (cachedGridFrame) return cachedGridFrame;
    else {
      const { items, columnsLimit, rowHeight } = props;

      // Calculate actual cells and item's disposition
      const cells = gridCellsCount(items.length, columnsLimit);
      const disposition = balanceDisposition(
        itemsDisposition(items.length, cells.rowsCount)
      );

      // Declare actual cells
      const rows = [];
      for (let i = 0; i < cells.rowsCount; i++) rows.push(rowHeight);

      // Declare actual columns
      const columns = [];
      for (let i = 0; i < cells.columnsCount; i++) columns.push("auto");

      // Declare actual areas and Box's Components
      const areas = [];
      const boxes = [];
      // For each row in disposition
      for (let i = 0; i < disposition.length; i++) {
        const rowIndex = i;
        const rowItemCount = disposition[i];
        // Get the index of the first item on a row
        let rowStartIndex;
        const sqrt = cells.columnsCount / rowItemCount;
        if (sqrt === 2) rowStartIndex = 0;
        else if (sqrt === 1) rowStartIndex = 1;
        else rowStartIndex = columnsLimit - rowItemCount;

        for (let x = 0; x < rowItemCount; x++) {
          const itemIndex = x;
          // Create an identifier for the item, composed by the row's index and item's index on the row
          const name = `row${rowIndex}-item${itemIndex}`;
          const fromColumn = itemIndex * itemSpan + rowStartIndex;
          const toColumn = fromColumn + 1;
          areas.push({
            name,
            start: [fromColumn, rowIndex],
            end: [toColumn, rowIndex]
          });
          boxes.push(<Box gridArea={name}>{items[rowIndex * itemIndex]}</Box>);
        }
      }

      cachedGridFrame = { rows, columns, areas, boxes };
      return cachedGridFrame;
    }
  };

  return (
    <Grid
      rows={gridFrame().rows}
      columns={gridFrame().columns}
      areas={gridFrame().areas}
      {...props}
    >
      {gridFrame().boxes}
    </Grid>
  );
};

/** @type {number} span size of every item on a row */
const itemSpan = 2;

/**
 * @return {{columnsCount: number, rowsCount: number}} count of columns and rows for {FlexGrid}
 * @param itemCount {number} count of items to dispose in the {Grid}
 * @param columnsLimit {number} max items to dispose for each row
 */
export const gridCellsCount = (itemCount, columnsLimit) => {
  // Get the actual count of columns, it's twice the columnsLimit since items will be disposed on a sub-grid
  const actualColumns = columnsLimit * itemSpan;

  // Get the actual count of rows
  const actualRows = Math.ceil(itemCount / columnsLimit);

  return { columnsCount: actualColumns, rowsCount: actualRows };
};

/**
 * @return {number[]} containing how many items must be disposed for each row
 * @param itemsCount {number} total count of items to dispose
 * @param rowsCount {number} count of rows where to dispose items
 */
export const itemsDisposition = (itemsCount, rowsCount) => {
  // Calculate how many items can be in a single row. The number is a raw decimal number.
  const averageItemsPerRow = itemsCount / rowsCount;

  // Create a number[] where every entry is represented by the real number of items per row.
  const disposition = [];
  // Define an accumulator that will be used for calculate how many items will be in the last row
  let accumulator = 0;

  // iterate every hypothetical row
  for (let i = 0; i < rowsCount; i++) {
    // Get the real integer of item for this row, we take the ceil of averageItemsPerRow
    const realItemCount = Math.ceil(averageItemsPerRow);
    // Calculate "how much of the item" has been add for reach the integer realItemCount.
    // This value will be added to accumulator and removed from the last row.
    accumulator += realItemCount - averageItemsPerRow;

    // If it's not the last row
    if (i !== rowsCount - 1) {
      // push realItemCount into disposition
      disposition.push(realItemCount);

      // If it's the last row
    } else {
      // Remove the value of accumulator from realItemCount and push it to disposition, as last element
      disposition.push(Math.round(realItemCount - accumulator));
    }
  }
  return disposition;
};

/**
 * Balance a disposition
 * @param disposition {number[]} disposition to balance
 * @return {number[]} balanced disposition
 */
export const balanceDisposition = disposition => {
  // If has less than 2 elements, return the same array
  if (disposition.length < 2) return disposition;

  const lastIndex = disposition.length - 1;
  const penultimateIndex = disposition.length - 2;

  // If difference between last and penultimate index is greater than 1, remove needed amount to penultimate items and
  // add it to last item
  const difference = disposition[penultimateIndex] - disposition[lastIndex];
  if (difference > 1) {
    disposition[penultimateIndex] -= Math.floor(difference / 2);
    disposition[lastIndex] += Math.ceil(difference / 2);
  }

  return disposition;
};

export default FlexGrid;

/**
 * {PropTypes} for {FlexGrid}
 * @params {{columnsLimit: *, items: number, rowHeight: string}}
 */
FlexGrid.props = {
  items: PropTypes.any.isRequired,
  columnsLimit: PropTypes.number.isRequired,
  rowHeight: PropTypes.string
};
