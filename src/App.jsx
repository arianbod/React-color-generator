import { useState } from 'react';
import { Title, Form, ColorPalette } from './components';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
	const [selectedColorState, setSelectedColorState] = useState('');
	const [colorsState, setColorsState] = useState([]);
	const [copyColorState, setCopyColorState] = useState('');
	const handleChange = (e) => {
		setSelectedColorState(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!selectedColorState) return;
		let colorsList = new Values(selectedColorState).all(10);
		toast.success('Color palette generated');
		setColorsState(colorsList);
	};
	return (
		<main>
			<section className='container'>
				<Title />
				<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					selectedColor={selectedColorState}
				/>
			</section>
			<ColorPalette colorsList={colorsState} />
			<ToastContainer position='top-center' />
		</main>
	);
};
export default App;
