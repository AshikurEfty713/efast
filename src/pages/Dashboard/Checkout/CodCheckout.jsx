const CodCheckout = () => {
	const confirmOrder = async () => {
		await fetch("http://localhost:5000/api/cod/order", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: 500 }),
		});

		alert("Order placed. Pay on delivery.");
	};

	return <button onClick={confirmOrder}>Confirm COD Order</button>;
};

export default CodCheckout;
