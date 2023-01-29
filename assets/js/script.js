// context div element
let div = document.createElement("div")
// first ul
let firstList = document.createElement("ul")

let liPreview = document.createElement("li")
let previewIcon = document.createElement("i")
let liOpenWith = document.createElement("li")
let openWithIcon = document.createElement("i")

let firstHr = document.createElement("hr")
// second ul
let secondList = document.createElement("ul")

let liShare = document.createElement("li")
let shareIcon = document.createElement("i")
let liGetLink = document.createElement("li")
let GetLinkIcon = document.createElement("i")
let liAddToWorkSpace = document.createElement("li")
let AddToWorkSpaceIcon = document.createElement("i")
let liShowFileLocation = document.createElement("li")
let ShowFileLocationIcon = document.createElement("i")
let liAddShortcutToDrive = document.createElement("li")
let AddShortcutToDriveIcon = document.createElement("i")
let liMoveTo = document.createElement("li")
let MoveToIcon = document.createElement("i")
let liAddToStarred = document.createElement("li")
let AddToStarredIcon = document.createElement("i")
let liRename = document.createElement("li")
let RenameIcon = document.createElement("i")

let secondHr = document.createElement("hr")
// third list
let thirdList = document.createElement("ul")

let liViewCaptionTracks = document.createElement("li")
let ViewCaptionTracksIcon = document.createElement("i")
let liManageVersions = document.createElement("li")
let ManageVersionsIcon = document.createElement("i")
let liMakeCopy = document.createElement("li")
let MakeCopyIcon = document.createElement("i")
let liReportAbuse = document.createElement("li")
let ReportAbuseIcon = document.createElement("i")
let liDownload = document.createElement("li")
let DownloadIcon = document.createElement("i")

let thirdHr = document.createElement("hr")
// fourth ul
let fourthList = document.createElement("ul")

let liMoveToTrash = document.createElement("li")
let MoveToTrashIcon = document.createElement("i")
let liNotHelpfulSuggestion = document.createElement("li")
let NotHelpfulSuggestionIcon = document.createElement("i")

window.oncontextmenu = function (event) {
    event.preventDefault()
    // context div style
    document.body.append(div); 
    div.style.width = "350px"
    div.style.height = "450px"
    div.style.overflow = "scroll"
    div.style.overflowX = "hidden"
    div.style.backgroundColor = "white"
    div.style.boxShadow = "0px 0px 5px gray"
    div.style.borderRadius = "4px"
    div.style.paddingTop = "20px"
    div.style.paddingBottom = "20px"
    div.style.position = "fixed"
    div.style.top = `${event.clientY}px`
    div.style.left = `${event.clientX}px`
    div.id = "context"
    
    // first ul
    div.append(firstList)
    firstList.style.listStyleType = "none" 
    
    // first li of first ul
    firstList.append(liPreview)
    liPreview.innerText = "Preview"

    liPreview.prepend(previewIcon)
    previewIcon.className = "fa-solid fa-eye"

    // second li of first ul
    firstList.append(liOpenWith)
    liOpenWith.innerText = "Open with"

    liOpenWith.prepend(openWithIcon)
    openWithIcon.className = "fa-solid fa-up-down-left-right"

    firstList.append(firstHr)

    // second ul
    div.append(secondList)
    secondList.style.listStyleType = "none"

    // first li of second ul
    secondList.append(liShare)
    liShare.innerText = "Share"

    liShare.prepend(shareIcon)
    shareIcon.className = "fa-solid fa-user-plus"
    // second li of second ul
    secondList.append(liGetLink)
    liGetLink.innerText = "Get link"

    liGetLink.prepend(GetLinkIcon)
    GetLinkIcon.className = "fa-solid fa-link"
    // third li of second ul
    secondList.append(liAddToWorkSpace)
    liAddToWorkSpace.innerText = "Add to workspace"

    liAddToWorkSpace.prepend(AddToWorkSpaceIcon)
    AddToWorkSpaceIcon.className = "fa-solid fa-plus"
    // fourth li of second ul
    secondList.append(liShowFileLocation)
    liShowFileLocation.innerText = "Show file location"

    liShowFileLocation.prepend(ShowFileLocationIcon)
    ShowFileLocationIcon.className = "fa-solid fa-folder"
    // fifth li of second ul
    secondList.append(liAddShortcutToDrive)
    liAddShortcutToDrive.innerText = "Add shortcut to drive"

    liAddShortcutToDrive.prepend(AddShortcutToDriveIcon)
    AddShortcutToDriveIcon.className = "fa-brands fa-google-drive"
    // sixth li of second ul
    secondList.append(liMoveTo)
    liMoveTo.innerText = "Move to"

    liMoveTo.prepend(MoveToIcon)
    MoveToIcon.className = "fa-solid fa-folder-plus"
    // seventh li of second ul
    secondList.append(liAddToStarred)
    liAddToStarred.innerText = "Add to starred"

    liAddToStarred.prepend(AddToStarredIcon)
    AddToStarredIcon.className = "fa-solid fa-star"
    // eighth li of second ul
    secondList.append(liRename)
    liRename.innerText = "Rename"

    liRename.prepend(RenameIcon)
    RenameIcon.className = "fa-solid fa-pen-to-square"

    secondList.append(secondHr)

    // third ul
    div.append(thirdList)
    thirdList.style.listStyleType = "none" 

    // first li of third ul
    thirdList.append(liViewCaptionTracks)
    liViewCaptionTracks.innerText = "View caption tracks"

    liViewCaptionTracks.prepend(ViewCaptionTracksIcon)
    ViewCaptionTracksIcon.className = "fa-solid fa-closed-captioning"
    // second li of third ul
    thirdList.append(liManageVersions)
    liManageVersions.innerText = "Manage versions"

    liManageVersions.prepend(ManageVersionsIcon)
    ManageVersionsIcon.className = "fa-solid fa-clock-rotate-left"
    // third li of third ul
    thirdList.append(liMakeCopy)
    liMakeCopy.innerText = "Make a copy"

    liMakeCopy.prepend(MakeCopyIcon)
    MakeCopyIcon.className = "fa-solid fa-copy"
    // fourth li of third ul
    thirdList.append(liReportAbuse)
    liReportAbuse.innerText = "Report abuse"

    liReportAbuse.prepend(ReportAbuseIcon)
    ReportAbuseIcon.className = "fa-solid fa-circle-info"
    // fifth li of third ul
    thirdList.append(liDownload)
    liDownload.innerText = "Download"

    liDownload.prepend(DownloadIcon)
    DownloadIcon.className = "fa-solid fa-download"

    thirdList.append(thirdHr)
    // fourth ul
    div.append(fourthList)
    fourthList.style.listStyleType = "none"

    // first li of fourth ul
    fourthList.append(liMoveToTrash)
    liMoveToTrash.innerText = "Move to trash"

    liMoveToTrash.prepend(MoveToTrashIcon)
    MoveToTrashIcon.className = "fa-solid fa-trash"
    // second li of fourth ul
    fourthList.append(liNotHelpfulSuggestion)
    liNotHelpfulSuggestion.innerText = "Not helpful suggestion"

    liNotHelpfulSuggestion.prepend(NotHelpfulSuggestionIcon)
    NotHelpfulSuggestionIcon.className = "fa-solid fa-thumbs-down"
}

let colorSelect = document.createElement("div")
let colorSelectInput = document.createElement("input")
let exit = document.createElement("div") 
let x = document.createElement("i")

liPreview.onmouseenter = function () {
    liPreview.style.backgroundColor = "#e8e8e8"
    liPreview.style.cursor = "pointer"
}
liPreview.onmouseleave = function () {
    liPreview.style.backgroundColor = "#FFFFFF"
}

liPreview.onclick = function (event) {
    
    document.body.append(colorSelect)
    colorSelect.style.position = "absolute"
    colorSelect.style.top = "20px"
    colorSelect.style.left = "20px"
    colorSelect.style.borderRadius = "7px"
    colorSelect.append(colorSelectInput)
    colorSelect.style.backgroundColor = "white"
    colorSelect.style.boxShadow = "0px 0px 5px gray"
    colorSelect.style.width = "150px"
    colorSelect.style.height = "70px"
    colorSelect.style.display = "flex"
    colorSelect.style.alignItems = "center"
    colorSelect.style.justifyContent = "center"
    colorSelect.style.position = "fixed"

    colorSelectInput.style.width = "120px"
    colorSelectInput.style.height = "20px"
    colorSelectInput.style.outline = "none"
    colorSelectInput.style.fontSize = "10px"
    colorSelectInput.style.border = "none"
    colorSelectInput.style.borderRadius = "5px"
    colorSelectInput.style.boxShadow = "0px 0px 5px gray"
    colorSelectInput.style.paddingLeft = "5px"
    colorSelectInput.style.paddingRight = "5px"
    colorSelectInput.placeholder = "Paste HEX code here"
    colorSelect.append(exit)
    x.className = "fa-solid fa-x"

    exit.style.width = "15px"
    exit.style.height = "15px"
    exit.style.backgroundColor = "#c20a0a"
    exit.style.position = "absolute"
    exit.style.top = "5px"
    exit.style.left = "5px"
    exit.style.cursor = "pointer"
    exit.style.display = "flex"
    exit.style.justifyContent = "center"
    exit.style.alignItems = "center"
    exit.style.borderRadius = "50%"

    exit.append(x)
    x.style.color = "white"
    x.style.fontSize = "8px"
}

window.onclick = function () {
   div.remove()
}

colorSelectInput.onkeydown = function (event) {
    let color = colorSelectInput.value
    if(event.keyCode === 13 && color.includes("#")){
        document.body.style.backgroundColor = color
        colorSelect.style.backgroundColor = color
        colorSelect.style.boxShadow = "none"
        colorSelect.style.borderRadius = "7px"
        colorSelect.style.boxShadow = "0px 0px 50px white"
        colorSelectInput.style.boxShadow = "0px 0px 5px white"
        colorSelectInput.style.border = "none"
    }
}

x.onclick = function () {
    colorSelect.remove()
    document.body.style.backgroundColor = "transparent"
}

//preview
liPreview.style.fontFamily = "Verdana"
liPreview.style.fontSize = "15px"
liPreview.style.color = "#424242"
liPreview.style.display = "flex"
liPreview.style.alignItems = "center"
liPreview.style.height = "30px"
liPreview.style.paddingLeft = "15px"
liPreview.style.paddingRight = "15px"

previewIcon.style.marginRight = "20px"
previewIcon.style.fontSize = "20px"

//open with
liOpenWith.style.fontFamily = "Verdana"
liOpenWith.style.fontSize = "15px"
liOpenWith.style.color = "#424242"
liOpenWith.style.display = "flex"
liOpenWith.style.alignItems = "center"
liOpenWith.style.height = "30px"
liOpenWith.style.paddingLeft = "15px"
liOpenWith.style.paddingRight = "15px"

openWithIcon.style.marginRight = "20px"
openWithIcon.style.fontSize = "20px"

//share
liShare.style.fontFamily = "Verdana"
liShare.style.fontSize = "15px"
liShare.style.color = "#424242"
liShare.style.display = "flex"
liShare.style.alignItems = "center"
liShare.style.height = "30px"
liShare.style.paddingLeft = "15px"
liShare.style.paddingRight = "15px"

shareIcon.style.marginRight = "20px"
shareIcon.style.fontSize = "20px"

//get link
liGetLink.style.fontFamily = "Verdana"
liGetLink.style.fontSize = "15px"
liGetLink.style.color = "#424242"
liGetLink.style.display = "flex"
liGetLink.style.alignItems = "center"
liGetLink.style.height = "30px"
liGetLink.style.paddingLeft = "15px"
liGetLink.style.paddingRight = "15px"

GetLinkIcon.style.marginRight = "20px"
GetLinkIcon.style.fontSize = "20px"

//workspace
liAddToWorkSpace.style.fontFamily = "Verdana"
liAddToWorkSpace.style.fontSize = "15px"
liAddToWorkSpace.style.color = "#424242"
liAddToWorkSpace.style.display = "flex"
liAddToWorkSpace.style.alignItems = "center"
liAddToWorkSpace.style.height = "30px"
liAddToWorkSpace.style.paddingLeft = "15px"
liAddToWorkSpace.style.paddingRight = "15px"

AddToWorkSpaceIcon.style.marginRight = "20px"
AddToWorkSpaceIcon.style.fontSize = "20px"

//file location
liShowFileLocation.style.fontFamily = "Verdana"
liShowFileLocation.style.fontSize = "15px"
liShowFileLocation.style.color = "#424242"
liShowFileLocation.style.display = "flex"
liShowFileLocation.style.alignItems = "center"
liShowFileLocation.style.height = "30px"
liShowFileLocation.style.paddingLeft = "15px"
liShowFileLocation.style.paddingRight = "15px"

ShowFileLocationIcon.style.marginRight = "20px"
ShowFileLocationIcon.style.fontSize = "20px"

//shortcut
liAddShortcutToDrive.style.fontFamily = "Verdana"
liAddShortcutToDrive.style.fontSize = "15px"
liAddShortcutToDrive.style.color = "#424242"
liAddShortcutToDrive.style.display = "flex"
liAddShortcutToDrive.style.alignItems = "center"
liAddShortcutToDrive.style.height = "30px"
liAddShortcutToDrive.style.paddingLeft = "15px"
liAddShortcutToDrive.style.paddingRight = "15px"

AddShortcutToDriveIcon.style.marginRight = "20px"
AddShortcutToDriveIcon.style.fontSize = "20px"

//move to
liMoveTo.style.fontFamily = "Verdana"
liMoveTo.style.fontSize = "15px"
liMoveTo.style.color = "#424242"
liMoveTo.style.display = "flex"
liMoveTo.style.alignItems = "center"
liMoveTo.style.height = "30px"
liMoveTo.style.paddingLeft = "15px"
liMoveTo.style.paddingRight = "15px"

MoveToIcon.style.marginRight = "20px"
MoveToIcon.style.fontSize = "20px"

//add starred
liAddToStarred.style.fontFamily = "Verdana"
liAddToStarred.style.fontSize = "15px"
liAddToStarred.style.color = "#424242"
liAddToStarred.style.display = "flex"
liAddToStarred.style.alignItems = "center"
liAddToStarred.style.height = "30px"
liAddToStarred.style.paddingLeft = "15px"
liAddToStarred.style.paddingRight = "15px"

AddToStarredIcon.style.marginRight = "20px"
AddToStarredIcon.style.fontSize = "20px"

//rename
liRename.style.fontFamily = "Verdana"
liRename.style.fontSize = "15px"
liRename.style.color = "#424242"
liRename.style.display = "flex"
liRename.style.alignItems = "center"
liRename.style.height = "30px"
liRename.style.paddingLeft = "15px"
liRename.style.paddingRight = "15px"

RenameIcon.style.marginRight = "20px"
RenameIcon.style.fontSize = "20px"

//caption tracks
liViewCaptionTracks.style.fontFamily = "Verdana"
liViewCaptionTracks.style.fontSize = "15px"
liViewCaptionTracks.style.color = "#424242"
liViewCaptionTracks.style.display = "flex"
liViewCaptionTracks.style.alignItems = "center"
liViewCaptionTracks.style.height = "30px"
liViewCaptionTracks.style.paddingLeft = "15px"
liViewCaptionTracks.style.paddingRight = "15px"

ViewCaptionTracksIcon.style.marginRight = "20px"
ViewCaptionTracksIcon.style.fontSize = "20px"

//manage versions
liManageVersions.style.fontFamily = "Verdana"
liManageVersions.style.fontSize = "15px"
liManageVersions.style.color = "#424242"
liManageVersions.style.display = "flex"
liManageVersions.style.alignItems = "center"
liManageVersions.style.height = "30px"
liManageVersions.style.paddingLeft = "15px"
liManageVersions.style.paddingRight = "15px"

ManageVersionsIcon.style.marginRight = "20px"
ManageVersionsIcon.style.fontSize = "20px" 

//make a copy
liMakeCopy.style.fontFamily = "Verdana"
liMakeCopy.style.fontSize = "15px"
liMakeCopy.style.color = "#424242"
liMakeCopy.style.display = "flex"
liMakeCopy.style.alignItems = "center"
liMakeCopy.style.height = "30px"
liMakeCopy.style.paddingLeft = "15px"
liMakeCopy.style.paddingRight = "15px"

MakeCopyIcon.style.marginRight = "20px"
MakeCopyIcon.style.fontSize = "20px"

//report abuse
liReportAbuse.style.fontFamily = "Verdana"
liReportAbuse.style.fontSize = "15px"
liReportAbuse.style.color = "#424242"
liReportAbuse.style.display = "flex"
liReportAbuse.style.alignItems = "center"
liReportAbuse.style.height = "30px"
liReportAbuse.style.paddingLeft = "15px"
liReportAbuse.style.paddingRight = "15px"

ReportAbuseIcon.style.marginRight = "20px"
ReportAbuseIcon.style.fontSize = "20px"

//download
liDownload.style.fontFamily = "Verdana"
liDownload.style.fontSize = "15px"
liDownload.style.color = "#424242"
liDownload.style.display = "flex"
liDownload.style.alignItems = "center"
liDownload.style.height = "30px"
liDownload.style.paddingLeft = "15px"
liDownload.style.paddingRight = "15px"

DownloadIcon.style.marginRight = "20px"
DownloadIcon.style.fontSize = "20px"

//move to trash
liMoveToTrash.style.fontFamily = "Verdana"
liMoveToTrash.style.fontSize = "15px"
liMoveToTrash.style.color = "#424242"
liMoveToTrash.style.display = "flex"
liMoveToTrash.style.alignItems = "center"
liMoveToTrash.style.height = "30px"
liMoveToTrash.style.paddingLeft = "15px"
liMoveToTrash.style.paddingRight = "15px"

MoveToTrashIcon.style.marginRight = "20px"
MoveToTrashIcon.style.fontSize = "20px"

//no helpful
liNotHelpfulSuggestion.style.fontFamily = "Verdana"
liNotHelpfulSuggestion.style.fontSize = "15px"
liNotHelpfulSuggestion.style.color = "#424242"
liNotHelpfulSuggestion.style.display = "flex"
liNotHelpfulSuggestion.style.alignItems = "center"
liNotHelpfulSuggestion.style.height = "30px"
liNotHelpfulSuggestion.style.paddingLeft = "15px"
liNotHelpfulSuggestion.style.paddingRight = "15px"

NotHelpfulSuggestionIcon.style.marginRight = "20px"
NotHelpfulSuggestionIcon.style.fontSize = "20px"

//hr
firstHr.style.marginTop = "10px"
firstHr.style.marginBottom = "10px"
firstHr.style.borderStyle = "ridge"

secondHr.style.marginTop = "10px"
secondHr.style.marginBottom = "10px"
secondHr.style.borderStyle = "ridge"

thirdHr.style.marginTop = "10px"
thirdHr.style.marginBottom = "10px"
thirdHr.style.borderStyle = "ridge"