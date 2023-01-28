import React, { useEffect, useRef } from 'react';
import './TradingView.css';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ symbol }) {
	const onLoadScriptRef = useRef();

	useEffect(() => {
		onLoadScriptRef.current = createWidget;

		if (!tvScriptLoadingPromise) {
			tvScriptLoadingPromise = new Promise((resolve) => {
				const script = document.createElement('script');
				script.id = 'tradingview-widget-loading-script';
				script.src = 'https://s3.tradingview.com/tv.js';
				script.type = 'text/javascript';
				script.onload = resolve;

				document.head.appendChild(script);
			});
		}

		tvScriptLoadingPromise.then(
			() => onLoadScriptRef.current && onLoadScriptRef.current()
		);

		return () => (onLoadScriptRef.current = null);

		function createWidget() {
			if (
				document.getElementById('tradingview_288b8') &&
				'TradingView' in window
			) {
				new window.TradingView.widget({
					autosize: true,
					symbol: symbol || 'AAPL',
					interval: 'D',
					timezone: 'Etc/UTC',
					theme: 'dark',
					style: '1',
					locale: 'en',

					enable_publishing: false,
					withdateranges: true,
					hide_side_toolbar: false,
					container_id: 'tradingview_288b8',
				});
			}
		}
	}, [symbol]);

	return (
		<div className="tradingview-widget-container">
			<div id="tradingview_288b8" />
		</div>
	);
}
