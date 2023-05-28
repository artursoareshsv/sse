const apiUrl = import.meta.env.VITE_API_URL;

export const tickerEvent = new EventSource(`${apiUrl}/ticker`);
