# Facebook Reels Hider

A Chrome extension that automatically hides Facebook Reels and unwanted posts for a cleaner Facebook experience.

## Features

- Automatically hides Facebook Reels
- Removes unwanted posts from your Facebook feed
- Lightweight and fast
- Works seamlessly in the background

## Installation Instructions

Since this extension is not published on the Chrome Web Store, you'll need to install it manually in Developer Mode. Follow these steps:

### Step 1: Download the Extension
1. Download or clone this repository to your computer
2. Make sure all files (`manifest.json`, `content.js`, and `icons/icon.png`) are in the same folder

### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome
2. Navigate to `chrome://extensions/` (or go to Chrome menu → More tools → Extensions)
3. In the top-right corner, toggle **Developer mode** to ON

### Step 3: Load the Extension
1. Click the **"Load unpacked"** button that appears after enabling Developer mode
2. Browse to the folder containing your extension files
3. Select the folder and click **"Select Folder"** (or **"Open"** on some systems)

### Step 4: Verify Installation
1. You should see the "Facebook Reels Hider" extension appear in your extensions list
2. Make sure the extension is **enabled** (toggle switch should be blue/on)
3. You should see the extension icon in your Chrome toolbar

### Step 5: Use the Extension
1. Navigate to [Facebook.com](https://facebook.com)
2. The extension will automatically start hiding Reels and unwanted content
3. No additional configuration is needed!

## Troubleshooting

### Extension Not Working?
- Make sure you're on Facebook.com (the extension only works on Facebook)
- Check that the extension is enabled in `chrome://extensions/`
- Try refreshing the Facebook page
- Ensure Developer mode is still enabled

### Extension Disappeared?
- Extensions loaded in Developer mode may be disabled when Chrome updates
- Simply re-enable it in `chrome://extensions/`
- You may need to reload the extension if Chrome was updated

### Need to Update the Extension?
1. Make your changes to the extension files
2. Go to `chrome://extensions/`
3. Find your extension and click the **refresh/reload** button (circular arrow icon)

## File Structure

```
faceboo-hider/
├── manifest.json      # Extension configuration
├── content.js         # Main functionality script
├── icons/
│   └── icon.png      # Extension icon
└── README.md         # This file
```

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: Scripting (to modify Facebook pages)
- **Content Script**: Runs on all Facebook.com pages
- **Execution**: Runs when page is fully loaded (document_idle)

## Privacy

This extension:
- Only works on Facebook.com
- Does not collect or transmit any personal data
- Does not access your Facebook account information
- Only modifies the visual display of Facebook content

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure you're using the latest version of Google Chrome
3. Try disabling other extensions to check for conflicts

---

**Note**: This extension is for personal use and is not affiliated with Facebook/Meta.