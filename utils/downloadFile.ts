export function downloadFile(
  fileName: string,
  fileType: string,
  content: string,
) {
  const blob = new Blob([content], { type: fileType });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const url = window.URL.createObjectURL(blob);

    const downloadEl = document.createElement('a');
    document.body.appendChild(downloadEl);
    downloadEl.href = url;
    downloadEl.download = fileName;
    downloadEl.click();

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(downloadEl);
    }, 0);
  }
}