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

	const logoUrl = "/favicon.ico";
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
		logo_url: logoUrl,
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
