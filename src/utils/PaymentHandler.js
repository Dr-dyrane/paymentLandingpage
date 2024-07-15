import { toast } from "react-toastify";
import logo from "../assets/logo.svg";

const payWithSaySwitch = (details) => {
	const publicKey = 'pk_test_xolsnu5dpqpia2a7a8iftygugzyluz2qffkhlid';
	const { email, amount, firstName, lastName, phone } = details;

	if (!publicKey) {
		console.error("API key is not set or is invalid.");
		return;
	}

	SaySwitchCheckout({
		key: publicKey,
		email,
		amount,
		first_name: firstName,
		last_name: lastName,
		phone,
		currency: "NGN",
		reference:
			"" +
			Math.floor(Math.random() * 100000000000 + 1) +
			new Date().getSeconds() +
			new Date().getMilliseconds(),
		logo_url: logo,
		callback: function (response) {
			var reference = response.reference;
			toast.success(
				`Payment complete! Reference: ${reference}, Status: ${response.status}`
			);
		},
		onClose: function () {
			toast.error("Transaction was not completed, window closed.");
		},
	});
};

export default payWithSaySwitch;
