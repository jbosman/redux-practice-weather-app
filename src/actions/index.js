import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = '9de876f66db1c3a4aa0a70e5be81a6ec';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: 		FETCH_WEATHER,
		payload: 	request
	}
}