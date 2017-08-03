import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default function Graph({ color, data, units }){
	return (
		<div className='graph'>
			<Sparklines data={data} >
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{`${average(data)} ${units}`}</div>
		</div>
	)
}