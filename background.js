// Background script for auto-set-google-to-edge extension

// Listen for browser startup event
chrome.runtime.onStartup.addListener(() => {
  checkDefaultSearchEngine();
});

// Also check when extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  checkDefaultSearchEngine();
});

// Function to check if Google is the default search engine
function checkDefaultSearchEngine() {
  // Since we can't directly check the default search engine in Manifest V3,
  // we'll use localStorage to ensure we only show the popup once per browser session
  chrome.storage.local.get(['notificationShown'], (result) => {
    if (!result.notificationShown) {
      // Set flag to prevent showing the notification multiple times
      chrome.storage.local.set({ notificationShown: true });
      
      // Update the extension's badge to indicate action is needed
      chrome.action.setBadgeText({ text: '!' });
      chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
    }
  });
}

// Reset the notification flag when the browser closes
// This is approximate since there's no direct onShutdown event
chrome.runtime.onSuspend.addListener(() => {
  chrome.storage.local.remove('notificationShown');
}); 