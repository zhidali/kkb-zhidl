import React from 'react';
import useForm from './useForm.jsx';

import FieldContext from './FieldContext';

export default function Form(props) {
	// console.log(props.children);
  const [ formInstance ] = useForm();
	return (
		<form>
			<FieldContext.Provider value={formInstance}>{props.children}</FieldContext.Provider>
		</form>
	);
}
