const gotMessage = () => {
    let paragraphs = document.body.getElementsByTagName('p')

    for (const item of paragraphs) {
        item.style.backgroundColor = 'black'
        item.style.color = 'white'
    }
}

chrome.runtime.onMessage.addListener(gotMessage)