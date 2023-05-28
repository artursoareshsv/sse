import { useEffect, useState } from 'react';
import './App.css';
import { tickerEvent } from './client/sse';

function App() {
	const [ticker, setTicker] = useState();

	useEffect(() => {
		tickerEvent.onmessage = (e) => {
			const { ticker } = JSON.parse(e.data);
			setTicker(ticker);
		};
	}, []);

	return <>{ticker}</>;
}

export default App;
