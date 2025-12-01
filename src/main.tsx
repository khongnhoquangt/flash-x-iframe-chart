import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import "@orderly.network/ui/dist/styles.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { OrderlyConfigProvider } from "@orderly.network/hooks";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderlyConfigProvider brokerId="FLASH_X" networkId="mainnet">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </OrderlyConfigProvider>
  </React.StrictMode>,
);
