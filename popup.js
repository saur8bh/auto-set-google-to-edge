// Script for popup UI
document.addEventListener('DOMContentLoaded', function() {
  // Get the change button
  const changeButton = document.getElementById('changeSearchEngine');
  
  // Add click event listener to the button
  changeButton.addEventListener('click', function() {
    // Open the search engine settings page in a new tab
    chrome.tabs.create({ url: 'edge://settings/searchEngines' });
    
    // Clear the notification badge after clicking the button
    chrome.action.setBadgeText({ text: '' });
  });
  
  // Clear the badge when popup is opened
  chrome.action.setBadgeText({ text: '' });
}); 