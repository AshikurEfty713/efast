const BkashCheckout = () => {
	const payBkash = async () => {
		const res = await fetch("http://localhost:5000/api/bkash/create");
		const data = await res.json();
		window.location.href = data.bkashURL;
	};

	return <button onClick={payBkash}>Pay with bKash</button>;
};

export default BkashCheckout;
