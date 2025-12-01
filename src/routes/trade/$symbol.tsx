import { createFileRoute } from "@tanstack/react-router";
import {
  TradingviewUI,
  useTradingviewScript,
} from "@orderly.network/ui-tradingview";

function TradePage() {
  const { symbol } = Route.useParams();

  console.log("Trade page rendered with symbol:", symbol);

  const tradingViewProps = useTradingviewScript({
    scriptSRC: "/charting_library/charting_library.js",
    customCssUrl: "/charting_library/custom.css",
    libraryPath: "/charting_library/",
    symbol: symbol,
    theme: "dark",
    locale: "en",
    disabled_features: [
      "create_volume_indicator_by_default",
      "header_symbol_search",
      "header_compare",
      "display_market_status",
    ],
    enabled_features: [
      "study_templates",
      "save_chart_properties_to_local_storage",
    ],
    overrides: {
      "paneProperties.background": "#131722",
      "paneProperties.vertGridProperties.color": "#363c4e",
      "paneProperties.horzGridProperties.color": "#363c4e",
      "scalesProperties.textColor": "#AAA",
      "mainSeriesProperties.candleStyle.upColor": "#089981",
      "mainSeriesProperties.candleStyle.downColor": "#f23645",
      "mainSeriesProperties.candleStyle.borderUpColor": "#089981",
      "mainSeriesProperties.candleStyle.borderDownColor": "#f23645",
      "mainSeriesProperties.candleStyle.wickUpColor": "#089981",
      "mainSeriesProperties.candleStyle.wickDownColor": "#f23645",
    },
    studiesOverrides: {
      "volume.volume.color.0": "#f23645",
      "volume.volume.color.1": "#089981",
    },
    loadingScreen: {
      backgroundColor: "#131722",
      foregroundColor: "#089981",
    },
    classNames: {
      root: "w-screen h-screen",
      content: "w-screen h-screen",
    },
  });

  return (
    <TradingviewUI
      chartRef={tradingViewProps.chartRef}
      tradingViewScriptSrc={tradingViewProps.tradingViewScriptSrc}
      interval={tradingViewProps.interval}
      changeDisplaySetting={tradingViewProps.changeDisplaySetting}
      displayControlState={tradingViewProps.displayControlState}
      changeInterval={tradingViewProps.changeInterval}
      lineType={tradingViewProps.lineType}
      changeLineType={tradingViewProps.changeLineType}
      openChartSetting={tradingViewProps.openChartSetting}
      openChartIndicators={tradingViewProps.openChartIndicators}
      symbol={tradingViewProps.symbol}
      onFullScreenChange={tradingViewProps.onFullScreenChange}
      classNames={tradingViewProps.classNames}
      fullscreen={tradingViewProps.fullscreen}
    />
  );
}

export const Route = createFileRoute("/trade/$symbol")({
  component: TradePage,
});
