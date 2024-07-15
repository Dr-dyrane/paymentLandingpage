import React, { useState } from "react";
import FormInput from "./FormInput";
import { validate } from "../utils/validation";

const PaymentForm = ({ handlePayment, loading }) => {
	const [formValues, setFormValues] = useState({
		email: "",
		amount: "",
		firstName: "",
		lastName: "",
		phone: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validate(formValues); // validate function checks form values
		if (Object.keys(validationErrors).length === 0) {
			handlePayment(formValues); // invoke handlePayment with form values
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			className="bg-white p-8 rounded-3xl shadow-lg space-y-4"
		>
			<FormInput
				label="Email"
				type="email"
				value={formValues.email}
				onChange={handleChange}
				error={errors.email}
				name="email"
			/>
			<FormInput
				label="Amount"
				type="number"
				value={formValues.amount}
				onChange={handleChange}
				error={errors.amount}
				name="amount"
			/>
			<FormInput
				label="First Name"
				type="text"
				value={formValues.firstName}
				onChange={handleChange}
				error={errors.firstName}
				name="firstName"
			/>
			<FormInput
				label="Last Name"
				type="text"
				value={formValues.lastName}
				onChange={handleChange}
				error={errors.lastName}
				name="lastName"
			/>
			<FormInput
				label="Phone"
				type="text"
				value={formValues.phone}
				onChange={handleChange}
				error={errors.phone}
				name="phone"
			/>
			<button
				type="submit"
				className="bg-primary text-white mt-4 p-2.5 rounded-xl w-full"
				disabled={loading}
			>
				{loading ? "Processing..." : "Pay"}
			</button>
		</form>
	);
};

export default PaymentForm;
