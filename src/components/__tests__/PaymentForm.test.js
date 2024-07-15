// src/__tests__/PaymentForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaymentForm from "../../components/PaymentForm";

test("renders PaymentForm and handles submit", () => {
	const handlePayment = jest.fn();
	render(<PaymentForm handlePayment={handlePayment} loading={false} />);

	// Set form values
	fireEvent.change(screen.getByLabelText(/email/i), {
		target: { value: "test@example.com" },
	});
	fireEvent.change(screen.getByLabelText(/amount/i), {
		target: { value: "50" },
	});
	fireEvent.change(screen.getByLabelText(/first name/i), {
		target: { value: "John" },
	});
	fireEvent.change(screen.getByLabelText(/last name/i), {
		target: { value: "Doe" },
	});
	fireEvent.change(screen.getByLabelText(/phone/i), {
		target: { value: "1234567890" },
	});

	// Submit form
	fireEvent.click(screen.getByText(/pay/i));

	// Debugging logs
	console.log("Form Values:", {
		email: "test@example.com",
		amount: "50",
		firstName: "John",
		lastName: "Doe",
		phone: "1234567890",
	});
	console.log("Handle Payment Mock:", handlePayment.mock);

	// Assertion
	expect(handlePayment).toHaveBeenCalledWith({
		email: "test@example.com",
		amount: "50",
		firstName: "John",
		lastName: "Doe",
		phone: "1234567890",
	});
});
