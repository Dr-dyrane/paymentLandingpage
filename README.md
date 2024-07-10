
# SaySwitch Payment Gateway Frontend

A sophisticated and responsive frontend for the SaySwitch payment gateway, designed to simulate the functionality of well-known payment systems like Stripe and Paystack.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

![SaySwitch Demo](./src/assets/demo.png)

## Features

- Responsive design
- Modular and maintainable codebase
- Secure payment form
- Real-time validation
- Customizable with Tailwind CSS

## Tech Stack

- Vite
- React
- Tailwind CSS
- Axios

## Installation

### Clone the repository

```sh
git clone https://github.com/Dr-dyrane/paymentLandingpage.git
cd sayswitch-payment-frontend
```

### Install dependencies

```sh
npm install
```

or with `yarn`

```sh
yarn install
```

## Usage

### Start the development server

```sh
npm run dev
```

or with `yarn`

```sh
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Folder Structure

```
src/
├── assets/
│   ├── demo.png
│   └── logo.svg
├── components/
│   ├── FormInput.jsx
│   ├── PaymentForm.jsx
│   └── PaymentHandler.jsx
├── pages/
│   └── LandingPage.jsx
├── utils/
│   ├── constants.js
│   └── validation.js
├── App.jsx
├── index.css
└── main.jsx
tailwind.config.js
```

### Description of Key Files

- **components/FormInput.jsx**: A reusable input component for the payment form.
- **components/PaymentForm.jsx**: The main form component that collects payment details.
- **components/PaymentHandler.jsx**: Handles the payment logic, making API calls and managing the form state.
- **pages/LandingPage.jsx**: The landing page that integrates all components and presents the UI.
- **utils/constants.js**: Contains constants like `BASE_URL` and `SAYS_SWITCH_PUBLIC_KEY`.
- **utils/validation.js**: Provides validation logic for the form inputs.

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Created with ❤️ by [Dr Dyrane](https://github.com/Dr-dyrane).
```