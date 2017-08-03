import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Graph({ color, data }){
	return (
		<div className='graph'>
			<Sparklines data={data} >
				<SparklinesLine color={color} />
			</Sparklines>
		</div>
	)
}