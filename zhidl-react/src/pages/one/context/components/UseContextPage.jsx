import React, { useContext } from 'react';
import { ThemeContext } from '../context';

export default function UseContext(props) {
	const { color } = useContext(ThemeContext);
	return <div>useContext color: {color}</div>;
}
