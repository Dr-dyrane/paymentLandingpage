import React, { useState } from "react";
import FormInput from "./FormInput";
import { validate } from "../utils/validation";

const PaymentForm = ({ handlePayment, loading }) => {
	const [formValues, setFormValues] = useState({
		email: "",
		amount: "",
		cardNumber: "",
		expiryDate: "",
		cvc: "",
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
		const validationErrors = validate(formValues);
		if (Object.keys(validationErrors).length === 0) {
			handlePayment(formValues);
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
				label="Card Number"
				type="text"
				value={formValues.cardNumber}
				onChange={handleChange}
				error={errors.cardNumber}
				name="cardNumber"
			/>
			<FormInput
				label="Expiry Date"
				type="text"
				value={formValues.expiryDate}
				onChange={handleChange}
				error={errors.expiryDate}
				placeholder="MM/YY"
				name="expiryDate"
			/>
			<FormInput
				label="CVC"
				type="text"
				value={formValues.cvc}
				onChange={handleChange}
				error={errors.cvc}
				name="cvc"
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
