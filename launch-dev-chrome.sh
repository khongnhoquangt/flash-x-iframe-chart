#!/bin/bash
# Launch Chrome with disabled web security for development testing
# This resolves CORS issues when testing locally

echo "Launching Chrome with disabled web security for development..."
echo "Navigate to: http://localhost:5174/trade/PERP_ETH_USDC"
echo ""
echo "WARNING: Only use this for development. Do not browse other websites with this instance."
echo ""

# For macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security --disable-features=VizDisplayCompositor
# For Linux
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    google-chrome --disable-web-security --disable-features=VizDisplayCompositor --user-data-dir="/tmp/chrome_dev_test" &
else
    echo "For Windows, run:"
    echo 'chrome.exe --disable-web-security --disable-features=VizDisplayCompositor --user-data-dir="C:\tmp\chrome_dev_test"'
fi