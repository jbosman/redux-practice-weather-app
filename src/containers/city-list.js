import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';


import Graph from '../components/graph';
					   
class CityList extends Component {

	renderCityRows(){
		return this.props.cityWeatherData.map( cityData => {
			const{ 
				name,
				id
			 } = cityData.city;

			 const temperatures = 	cityData.list.map( listItem => listItem.main.temp );
			 const pressures = 		cityData.list.map( listItem => listItem.main.pressure );
			 const humidity = 		cityData.list.map( listItem => listItem.main.humidity );

			return (
				<tr key={id}>
					<td>{ name }</td>
					<td>
						<Graph data={temperatures} color='red' units='K' />
					</td>
					<td>
						<Graph data={pressures} color='blue' units='hPa' />
					</td>
					<td>
						<Graph data={humidity} color='green' units='%' />
					</td>
				</tr>
			)
		})
	}

	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
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