import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import payWithSaySwitch from "../utils/PaymentHandler";

const PaymentHandler = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const handlePayment = async (details) => {
		const { email, amount, firstName, lastName, phone } = details;

		setLoading(true);
		setMessage(null);

		try {
			const response = await payWithSaySwitch({
				email,
				amount,
				firstName,
				lastName,
				phone,
			});

			if (response && response.status === "success") {
				setMessage({
					type: "success",
					text: `Payment successful! Reference: ${response.reference}`,
				});
			} else {
				setMessage({
					type: "error",
					text: "Payment failed. Please try again.",
				});
			}
		} catch (error) {
			setMessage({ type: "error", text: "Payment failed. Please try again." });
			console.error(error)
		}

		setLoading(false);
	};

	return (
		<div>
			{message && (
				<div
					className={`mb-4 p-2 rounded ${
						message.type === "success" ? "bg-green-200" : "bg-red-200"
					}`}
				>
					<p
						className={`text-sm ${
							message.type === "success" ? "text-green-800" : "text-red-800"
						}`}
					>
						{message.text}
					</p>
				</div>
			)}
			<PaymentForm handlePayment={handlePayment} loading={loading} />
		</div>
	);
};

export default PaymentHandler;
