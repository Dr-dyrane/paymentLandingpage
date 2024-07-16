

const payWithSaySwitch = (details) => {
	const {
		email,
		amount,
		firstName,
		lastName,
		phone,
		onSuccess,
		onFailure,
		onClose,
	} = details;

	SaySwitchCheckout({
		key: import.meta.env.VITE_SAYS_SWITCH_PUBLIC_KEY,
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
		logo_url:
			"https://raw.githubusercontent.com/Dr-dyrane/paymentLandingpage/ce6419fc7c1cf36ef79b1435b71f7fe17b45464a/public/logo.svg?token=GHSAT0AAAAAACUL4ZIOA4FLDSPZWF4GD2OSZUWIJSQ",
		callback: function (response) {
			if (response.status === "success") {
				onSuccess(response);
			} else {
				onFailure(response);
			}
		},
		onClose: function () {
			onClose();
		},
	});
};

export default payWithSaySwitch;
