import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import GoogleMap from '../components/google-map';
import Graph from '../components/graph';
					
class CityList extends Component {

	renderCityRows(){
		return this.props.cityWeatherData.map( cityData => {
			const{ name, id, coord } = cityData.city;
			const{ lat, lon } = coord;

			 const temperatures = 	cityData.list.map( listItem => 
			 											this.kelvinToFahrenheit(listItem.main.temp) );
			 const pressures = 		cityData.list.map( listItem => listItem.main.pressure );
			 const humidity = 		cityData.list.map( listItem => listItem.main.humidity );

			return (
				<tr key={id}>
					<td><GoogleMap lat={lat} lon={lon} /></td>
					<td><Graph data={temperatures} color='red' units='F' /></td>
					<td><Graph data={pressures} color='blue' units='hPa' /></td>
					<td><Graph data={humidity} color='green' units='%' /></td>
				</tr>
			)
		})
	}

	kelvinToFahrenheit(kelvin){
		return ( (9/5) * (kelvin - 273) + 32 );
	}

	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.renderCityRows() }
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ cityWeatherData }){
	return { cityWeatherData }
}

export default connect(mapStateToProps)(CityList);