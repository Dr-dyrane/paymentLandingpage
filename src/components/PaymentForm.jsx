import React, { useState } from "react";
import FormInput from "./FormInput";
import { validate } from "../utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiPhone } from "react-icons/bi";

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
		const validationErrors = validate(formValues);
		if (Object.keys(validationErrors).length === 0) {
			handlePayment(formValues);
		} else {
			setErrors(validationErrors);
			Object.values(validationErrors).forEach((error) => {
				//toast.error(error);
			});
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			id="paymentForm"
			className="bg-white p-8 rounded-3xl shadow-lg space-y-4 text-sm"
		>
			<FormInput
				label="Email"
				type="email"
				value={formValues.email}
				onChange={handleChange}
				error={errors.email}
				name="email"
				placeholder="Enter your email"
				icon={<FaRegEnvelope />}
			/>
			<FormInput
				label="Amount"
				type="number"
				value={formValues.amount}
				onChange={handleChange}
				error={errors.amount}
				name="amount"
				placeholder="Enter the amount"
				icon={<TbCurrencyNaira />}
			/>
			<FormInput
				label="First Name"
				type="text"
				value={formValues.firstName}
				onChange={handleChange}
				error={errors.firstName}
				name="firstName"
				placeholder="Enter your first name"
				icon={<FaRegUser />}
			/>
			<FormInput
				label="Last Name"
				type="text"
				value={formValues.lastName}
				onChange={handleChange}
				error={errors.lastName}
				name="lastName"
				placeholder="Enter your last name"
				icon={<FaRegUser />}
			/>
			<FormInput
				label="Phone"
				type="text"
				value={formValues.phone}
				onChange={handleChange}
				error={errors.phone}
				name="phone"
				placeholder="Enter your phone number"
				icon={<BiPhone />}
			/>
			<button
				type="submit"
				className="bg-primary text-white mt-4 p-3 rounded-xl w-full"
				disabled={loading}
			>
				{loading ? "Processing..." : "Pay"}
			</button>
		</form>
	);
};

export default PaymentForm;
