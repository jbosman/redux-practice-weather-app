import { combineReducers } from 'redux';
import CityWeatherDataReducer from './city-data-reducer';

const rootReducer = combineReducers({
  cityWeatherData: CityWeatherDataReducer
});

export default rootReducer;
