# Flash X Trading Chart

A React-based trading interface with TradingView charts integration using Orderly Network.

## Features

- TradingView charting library integration
- Orderly Network trading functionality
- React Router for navigation
- Tailwind CSS styling

## Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Access the trading interface:**
   Navigate to: `http://localhost:5174/trade/PERP_ETH_USDC`

## CORS Issues in Development

The application may encounter CORS errors when accessing Orderly Network APIs in development. This is normal and doesn't prevent the core functionality from working.

### Solutions for CORS Issues:

**Option 1: Use Chrome with disabled web security (Recommended for development)**
```bash
npm run dev:chrome
```
This will launch Chrome with disabled web security flags.

**Option 2: Manual Chrome launch**
```bash
# macOS
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security --disable-features=VizDisplayCompositor

# Linux
google-chrome --disable-web-security --disable-features=VizDisplayCompositor --user-data-dir="/tmp/chrome_dev_test"

# Windows
chrome.exe --disable-web-security --disable-features=VizDisplayCompositor --user-data-dir="C:\tmp\chrome_dev_test"
```

**Option 3: Browser Extension**
Install a CORS-disabling extension like "CORS Unblock" for development.

## Project Structure

```
├── public/charting_library/     # TradingView charting library files
├── src/
│   ├── routes/
│   │   ├── trade/$symbol.tsx    # Trading page component
│   │   ├── __root.tsx          # Root layout
│   │   └── index.tsx           # Home page
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles
├── vite.config.ts              # Vite configuration
├── .env                        # Environment variables
└── launch-dev-chrome.sh        # Chrome launcher script
```

## Configuration

- **Network:** Configured for Orderly Network testnet
- **Broker ID:** FLASH_X
- **TradingView:** Uses local charting library files

## Scripts

- `npm run dev` - Start development server
- `npm run dev:chrome` - Start dev server and launch Chrome with CORS disabled
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes

- CORS errors in console are expected in development
- TradingView chart functionality works despite API CORS errors
- In production, CORS issues will not occur when served from proper domain
- The application is configured for development with appropriate CORS handling

For more details, see [DEVELOPMENT_SETUP.md](./DEVELOPMENT_SETUP.md).