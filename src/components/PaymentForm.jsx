import React, { useState } from "react";
import FormInput from "./FormInput";
import { validate } from "../utils/validation";
import { detectCardType } from "../utils/cardUtils";
import {
	FaCcVisa,
	FaCcMastercard,
	FaCcAmex,
	FaCcDiscover,
	FaCreditCard,
} from "react-icons/fa";

const cardIcons = {
	visa: (
		<FaCcVisa className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-600" />
	),
	mastercard: (
		<FaCcMastercard className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-red-600" />
	),
	amex: (
		<FaCcAmex className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-800" />
	),
	discover: (
		<FaCcDiscover className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-orange-600" />
	),
	unknown: (
		<FaCreditCard className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-600" />
	),
};

const PaymentForm = ({ handlePayment, loading }) => {
	const [formValues, setFormValues] = useState({
		email: "",
		amount: "",
		currency: "USD",
		cardNumber: "",
		expiryDate: "",
		cvc: "",
	});
	const [errors, setErrors] = useState({});
	const [cardType, setCardType] = useState("unknown");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});

		if (name === "cardNumber") {
			setCardType(detectCardType(value));
		}
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
			>
				<select
					name="currency"
					value={formValues.currency}
					onChange={handleChange}
          className="bg-transparent border-none text-contrast">
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="GBP">GBP</option>
					<option value="NGN">NGN</option>
				</select>
			</FormInput>
			<FormInput
				label="Card Number"
				type="text"
				value={formValues.cardNumber}
				onChange={handleChange}
				error={errors.cardNumber}
				name="cardNumber"
			>
				{cardIcons[cardType]}
			</FormInput>
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
