/* eslint-disable no-extend-native */
/**
 * Balance the chunks into an {Array} of {Array}s
 * @param unbalancedArray {Array[]} array to balance
 * @return {Array[]} balanced array
 */
export const balanceArrayChunks = unbalancedArray => {
  const balancedArray = [...unbalancedArray];

  // If has less than 2 elements, return the same array
  if (balancedArray.length < 2) return balancedArray;

  const lastIndex = balancedArray.length - 1;
  const penultimateIndex = balancedArray.length - 2;

  // If difference between last and penultimate index is greater than 1, remove needed items to penultimate item and
  // add it to last item
  const difference =
    balancedArray[penultimateIndex].length - balancedArray[lastIndex].length;
  if (difference > 1) {
    // Calculate the amount of item to remove from penultimate items and add to the last item
    const balanceCount = Math.floor(difference / 2);

    // Calculate the index where the penultimate item need to be split
    const penultimate = balancedArray[penultimateIndex];
    const penultimateLength = penultimate.length;
    const splitIndex = penultimateLength - balanceCount;

    // Get the items to move, remove them from penultimate item and add to the last one
    const itemsToMove = penultimate.slice(splitIndex, penultimateLength);
    balancedArray[penultimateIndex] = penultimate.slice(0, splitIndex);
    balancedArray[lastIndex] = itemsToMove.concat(balancedArray[lastIndex]);
  }

  return balancedArray;
};


/**
 * Get whether the given {obj} is a {string}
 * @param obj the object to check
 * @return {boolean} `true` if {obj} is a {string}
 */
export const isString = obj => typeof obj === "string" || obj instanceof String;

/**
 * Open the given {url} into a new browser's tab
 * @param url {string} url to open
 */
export const openUrlInNewTab = url => {
  const win = window.open(url, "_blank");
  win.focus();
};

/**
 * Split the given {Array} into chunks
 * @param array {Array} to split
 * @param chunkSize {number} size of evey chunk
 * @return {Array[]}
 */
export const splitArrayInChunks = (array, chunkSize) => {
  const chunks = [];
  let i, j;
  for (i = 0, j = array.length; i < j; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};


/**
 * Replace all the occurrences in a {string}
 * @param search {string} to replace
 * @param replacement {string}
 * @return {string}
 */
String.prototype.replaceAll = function(search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};
