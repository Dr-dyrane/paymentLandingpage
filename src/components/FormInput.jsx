// components/FormInput.js

import React from "react";

const FormInput = ({ label, type, value, onChange, error, name }) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block text-contrast font-semibold mb-2">
				{label}
			</label>
			<div className="relative flex">
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					className="w-full p-2 border rounded-lg border-gray-300"
				/>
			</div>
			{error && <div className="text-red-500">{error}</div>}
		</div>
	);
};

export default FormInput;
