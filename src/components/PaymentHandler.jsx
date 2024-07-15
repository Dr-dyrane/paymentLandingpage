import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import payWithSaySwitch from "../utils/PaymentHandler";

const PaymentHandler = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const handlePayment = async (details) => {
		setLoading(true);
		setMessage(null);
		try {
			payWithSaySwitch(details);
			setMessage({ type: "success", text: "Payment successful!" });
		} catch (error) {
			setMessage({ type: "error", text: "Payment failed. Please try again." });
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
