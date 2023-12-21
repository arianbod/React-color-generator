import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
	const { hex, weight } = color;
	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success(`#${hex} copied to clipboard successfully`);
			} catch (error) {}
		} else {
			toast.error('Clipboard access not available');
		}
	};
	return (
		<article
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ backgroundColor: `#${hex}`, textAlign: 'center' }}
			onClick={saveToClipboard}>
			<p style={{ color: index > 10 && '#fff' }}>{weight}%</p>
			<p>#{hex}</p>
		</article>
	);
};

export default SingleColor;
