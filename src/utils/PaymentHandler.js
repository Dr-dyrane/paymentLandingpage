import { toast } from "react-toastify";

const payWithSaySwitch = (details) => {
	const publicKey = import.meta.env.VITE_SAY_SWITCH_PUBLIC_KEY;
	const {
		email,
		amount,
		firstName,
		lastName,
		phone,
	} = details;

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
