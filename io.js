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

function importFromFile(event){
  let reader = new FileReader();
  reader.onload = (event)=>{
    let result = JSON.parse(event.target.result)
    MINDMAPID = result.mindMapId
    FILE_NAME = result.fileName
    CREATED_AT = result.createdAt
    UPDATED_AT = result.updatedAt
    AUTHOR = result.author
    AUTHOR_MAIL = result.authorEmail
    TITLE = result.title
    DESCRIPTION = result.description
    TAGS = result.tags
    DATA = result.data

    CURRENT_MAP = CURRENT_MAP.fromJSON(DATA)
    CURRENT_MAP.show(MAIN_PORT)
    document.body.click()
  }
  reader.onerror = (error)=>{
    window.alert(error);
  }
  let file = document.querySelector('#file_importer_1').files[0]
  if (file){
    reader.readAsText(file)
  }
  else{
    alert("No files selected")
  }
}

function saveToFile(filename) {
    filename = filename+".mindmap";
    let content = CURRENT_MAP.toJSON();
    result = {
      "mindMapId": getMindMapId(),
      "fileName": filename,
      "createdAt": getCreatedAt(),
      "updatedAt": getUpdatedAt(),
      "author":AUTHOR,
      "authorEmail":AUTHOR_MAIL,
      "title":TITLE,
      "description":DESCRIPTION,
      "tags":TAGS,
      "data":content
    }
    let blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
    let blobUrl = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.style.display = "none";
    link.download = filename;

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

  function removeFileExtension(filename) {
    return filename.replace(/\.[^/.]+$/, "");
  }