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
