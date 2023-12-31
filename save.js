/**
 * 
 * Save Format JSON
 * mindMapId:
 * fileName: 
 * createdAt:
 * updatedAt:
 * author:
 * authorEmail:
 * title:
 * description:
 * tags: 
 * data: 
 */
function saveToFile(filename) {
    // Get the content of the div
    var content = document.querySelector('main').innerHTML;
    var blob = new Blob([content], { type: 'text/xml' });
    var blobUrl = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.style.display = "none";
    link.download = filename+".mindmap";

    // Set the href attribute to the Blob URL
    link.href = blobUrl;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    // Revoke the Blob URL to free up resources
    URL.revokeObjectURL(blobUrl);
  }