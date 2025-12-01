import { createFileRoute } from "@tanstack/react-router";
import { TradingviewWidget } from "@orderly.network/ui-tradingview";
import { useWsStatus } from "@orderly.network/hooks";

function TradePage() {
  const { symbol } = Route.useParams();
  const status = useWsStatus();

  console.log("Trade page rendered with:", { symbol, status });

  return (
    <div className="h-screen w-full bg-gray-900">
      <TradingviewWidget
        classNames={{
          root: "w-full h-full",
        }}
        scriptSRC="/charting_library/charting_library.js"
        customCssUrl="/charting_library/custom.css"
        library_path="/charting_library"
        symbol={symbol}
        theme="dark"
        locale="en"
        // Additional properties that might help
        disabled_features={[]}
        enabled_features={[
          "study_templates",
          "use_localstorage_for_settings",
          "save_chart_properties_to_local_storage",
        ]}
        overrides={{
          "mainSeriesProperties.candleStyle.upColor": "#089981",
          "mainSeriesProperties.candleStyle.downColor": "#f23645",
          "mainSeriesProperties.candleStyle.borderUpColor": "#089981",
          "mainSeriesProperties.candleStyle.borderDownColor": "#f23645",
          "mainSeriesProperties.candleStyle.wickUpColor": "#089981",
          "mainSeriesProperties.candleStyle.wickDownColor": "#f23645",
        }}
      />
    </div>
  );
}

export const Route = createFileRoute("/trade/$symbol")({
  component: TradePage,
});
