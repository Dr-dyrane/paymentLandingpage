export const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.amount) errors.amount = "Amount is required";
    if (!values.cardNumber) errors.cardNumber = "Card Number is required";
    if (!values.expiryDate) errors.expiryDate = "Expiry Date is required";
    if (!values.cvc) errors.cvc = "CVC is required";
    return errors;
  };
  