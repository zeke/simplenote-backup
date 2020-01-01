# SimpleNote Backup

[SimpleNote](https://simplenote.com/) is a delightful open-source notetaking app from the folks at Automattic. It has a web client, mobile apps, and desktop apps.

This project contains a script that can be used to back up all your SimpleNote data. This script **only works on the macOS version of SimpleNote**. SimpleNote for macOS is an Electron app that uses Google Chromium's built-in IndexedDB implmentation to store your data. The script included in this repo finds that database and exports all of its contents into a single structured JSON file.

## Usage

1. Open the SimpleNote app on macOS
1. Hit <kbd>command</kbd><kbd>option</kbd><kbd>i</kbd> to open the Chromium developer tools
1. Click on the `Console` tab in the developer tools
1. Paste the contents of this repo's `index.js` file into the console
1. Hit <kbd>enter</kbd>.

You should now have a `simplenote-backup.json` file on your Desktop!

## Troubleshooting

Didn't work? Please [file an issue](https://github.com/zeke/simplenote-backup/issues).
