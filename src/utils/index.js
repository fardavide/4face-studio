/**
 * Open the given {url} into a new browser's tab
 * @param url {string} url to open
 */
export const openUrlInNewTab = url => {
  const win = window.open(url, "_blank");
  win.focus();
};
