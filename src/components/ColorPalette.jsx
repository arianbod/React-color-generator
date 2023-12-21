import React from 'react';
import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';
const ColorPalette = ({ colorsList }) => {
	console.log(colorsList);
	return (
		<section className='colors'>
			{colorsList.map((color, index) => {
				return (
					<SingleColor
						key={nanoid()}
						color={color}
						index={index}
					/>
				);
			})}
		</section>
	);
};

export default ColorPalette;
