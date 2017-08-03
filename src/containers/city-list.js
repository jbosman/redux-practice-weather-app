import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import { Sparklines, SparklinesLine } from 'react-sparklines';
>>>>>>> db50ce4b28d4e6279692fb1ddc16dd174cc3338b

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
						<Graph data={temperatures} color='red' />
					</td>
					<td>
						<Graph data={pressures} color='blue' />
					</td>
					<td>
						<Graph data={humidity} color='green' />
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
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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