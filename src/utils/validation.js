export const validate = (values) => {
	let errors = {};

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	if (!values.amount) {
		errors.amount = "Amount is required";
	} else if (isNaN(values.amount) || values.amount <= 0) {
		errors.amount = "Amount must be a positive number";
	}

	if (!values.firstName) {
		errors.firstName = "First Name is required";
	}

	if (!values.lastName) {
		errors.lastName = "Last Name is required";
	}

	if (!values.phone) {
		errors.phone = "Phone number is required";
	} else if (!/^\d{10,15}$/.test(values.phone)) {
		errors.phone = "Phone number is invalid";
	}

	return errors;
};
