import React from "react";

const FormInput = ({
	label,
	type,
	value,
	onChange,
	error,
	name,
	placeholder,
	icon,
}) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-normal mb-2">
				{label}
			</label>
			<div
				className={`flex items-center border rounded-lg appearance-none py-2 px-3 text-gray-700 leading-tight hover:border-gray-500 focus:outline-none focus:shadow-outline ${
					error ? "border-red-500" : "border-gray-300"
				}`}
			>
				{icon && <div className="mr-2 text-slate-600">{icon}</div>}
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`w-full py-2 px-3 bg-transparent focus:outline-none rounded-lg`}
				/>
			</div>
			{error && <p className="text-red-500 text-xs mt-2">{error}</p>}
		</div>
	);
};

export default FormInput;
