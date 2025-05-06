# Auto Set Google to Edge

A Microsoft Edge extension that checks if Google is set as the default search engine when the browser launches.

## Features

- Checks the default search engine when Edge starts
- Displays a notification if Google is not set as the default
- Provides a simple UI to redirect users to the search engine settings
- Minimal performance impact (only runs on browser startup)
- Uses Manifest V3

## Installation

1. Clone this repository or download the source files
2. Open Microsoft Edge and navigate to `edge://extensions/`
3. Enable "Developer mode" using the toggle in the bottom-left corner
4. Click "Load unpacked" and select the folder containing the extension
5. The extension should now be installed and will run on the next browser start

## How It Works

When Edge starts up, the extension will:
1. Set a notification flag to ensure it only checks once per browser session
2. Show a red badge on the extension icon if the user needs to update their search engine
3. When the user clicks the extension, it displays a clean UI with instructions
4. The user can click the button to go directly to Edge's search engine settings

## Files

- `manifest.json`: Extension configuration
- `background.js`: Background script that runs on browser startup
- `popup.html`: UI that appears when clicking the extension icon
- `popup.js`: Script that handles the UI interaction

## Notes

- This extension suggests Google as the default search engine but doesn't force it
- The extension can't directly check the current search engine due to security restrictions
- The notification only appears once per browser session for minimal disruption

## Icons

Replace the placeholder icons in the `images` folder with actual icons before distributing the extension. 