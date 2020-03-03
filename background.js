const buttonClicked = tab => {
    chrome.tabs.sendMessage(tab.id, {
        id: tab.id,
    })
}

chrome.browserAction.onClicked.addListener(buttonClicked)

