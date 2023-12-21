import React from 'react';

const Form = ({ handleSubmit, handleChange, selectedColor }) => {
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='color-form'>
				<input
					type='color'
					onChange={handleChange}
					value={selectedColor}
				/>
				<input
					type='text'
					placeholder='#2222'
					onChange={handleChange}
					value={selectedColor}
				/>
				<button
					className='btn'
					style={{ backgroundColor: selectedColor }}
					type='submit'>
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
