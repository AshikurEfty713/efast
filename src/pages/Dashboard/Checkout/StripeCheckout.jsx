import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeCheckout = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handlePay = async () => {
		const res = await fetch("http://localhost:5000/api/stripe/create-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: 500 }),
		});

		const { clientSecret } = await res.json();

		const result = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (result.error) {
			alert(result.error.message);
		} else {
			alert("Stripe Payment Success");
		}
	};

	return (
		<div>
			<CardElement />
			<button onClick={handlePay}>Pay ৳500</button>
		</div>
	);
};

export default StripeCheckout;
