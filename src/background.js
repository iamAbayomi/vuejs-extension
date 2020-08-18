// global.browser = require('webextension-polyfill')
// alert('Hello world!')


chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse){
        console.log(request.message)
        console.log(request)
        chrome.browserAction.setPopup({ popup: 'popup/App.html' })
        // text.innerHTML = request.message
        sendResponse('Search js worked')
    }
  )