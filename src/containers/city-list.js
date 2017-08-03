import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
					   
class CityList extends Component {

	renderCityRows(){
		return this.props.cityWeatherData.map( cityData => {
			const{ 
				name,
				id
			 } = cityData.city;

			 const temperatures = 	cityData.list.map( listItem => listItem.main.temp );
			 const pressures = 		cityData.list.map( listItem => listItem.main.pressure );
			 const humidty = 		cityData.list.map( listItem => listItem.main.humidity );

			 console.log(temperatures)
			 console.log(pressures)
			 console.log(humidty)

			return (
				<tr key={id}>
					<td>{ name }</td>
					<td>
						<Sparklines height={120} width={180} data={temperatures} >
							<SparklinesLine color='red' />
						</Sparklines>
					</td>
					<td>pressure</td>
					<td>humidty</td>
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