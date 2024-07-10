import React from "react";

const FormInput = ({
	label,
	type,
	value,
	onChange,
	error,
	name,
	placeholder,
	children,
}) => (
	<div className="mb-4">
		<label className="block text-contrast font-semibold mb-2">{label}</label>
		<div className="relative flex">
			<input
				type={type}
				value={value}
				onChange={onChange}
				name={name}
				placeholder={placeholder}
				className={`w-full p-2 border rounded-lg ${
					error ? "border-red-500" : "border-gray-300"
				}`}
				required
			/>
			{children}
		</div>
		{error && <p className="text-red-500 text-sm">{error}</p>}
	</div>
);

export default FormInput;
