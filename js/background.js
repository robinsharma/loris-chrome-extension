(function renderPageAction () {
	chrome.tabs.onUpdated.addListener(showPageAction);
	function showPageAction (tabId, data, tab) {
		if (tabId) { //TODO check if on loris only
			chrome.pageAction.show(tabId);
		}
	}
}(chrome));