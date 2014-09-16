chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '(?i)((GDG)[-]?(Kansas)[-]?(City)|(gdgkc)|(116015988631052616691))' }
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

var id = 100;
function takeScreenshot() {
  chrome.tabs.captureVisibleTab(null, function(img) {
    var screenshotUrl = img;
    var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)

    chrome.tabs.create({url: viewTabUrl}, function(tab) {
      var targetId = tab.id;

      var addSnapshotImageToTab = function(tabId, changedProps) {
        // We are waiting for the tab we opened to finish loading.
        // Check that the the tab's id matches the tab we opened,
        // and that the tab is done loading.
        if (tabId != targetId || changedProps.status != 'complete')
          return;

        // Passing the above test means this is the event we were waiting for.
        // There is nothing we need to do for future onUpdated events, so we
        // use removeListner to stop geting called when onUpdated events fire.
        chrome.tabs.onUpdated.removeListener(addSnapshotImageToTab);

        // Look through all views to find the window which will display
        // the screenshot.  The url of the tab which will display the
        // screenshot includes a query parameter with a unique id, which
        // ensures that exactly one view will have the matching URL.
        var views = chrome.extension.getViews();
        for (var i = 0; i < views.length; i++) {
          var view = views[i];
          if (view.location.href == viewTabUrl) {
            view.setScreenshotUrl(screenshotUrl);
            break;
          }
        }
      };
      chrome.tabs.onUpdated.addListener(addSnapshotImageToTab);
    });
  });
}

// Called when the user clicks on the page action.
chrome.pageAction.onClicked.addListener(function(tab) {
  takeScreenshot();
});