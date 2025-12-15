import { useState } from "react";
import StripeCheckout from "./StripeCheckout";
import BkashCheckout from "./BkashCheckout";
import CodCheckout from "./CodCheckout";

const Checkout = () => {
	const [method, setMethod] = useState("");

	return (
		<div className="max-w-md mx-auto mt-10 p-6 border rounded">
			<h2 className="text-xl font-bold mb-4">Checkout</h2>

			<div className="space-y-3">
				<button
					onClick={() => setMethod("stripe")}
					className="w-full border p-2 rounded">
					💳 Pay with Card (Stripe)
				</button>

				<button
					onClick={() => setMethod("bkash")}
					className="w-full border p-2 rounded">
					📱 Pay with bKash
				</button>

				<button
					onClick={() => setMethod("cod")}
					className="w-full border p-2 rounded">
					🚚 Cash on Delivery
				</button>
			</div>

			<div className="mt-6">
				{method === "stripe" && <StripeCheckout />}
				{method === "bkash" && <BkashCheckout />}
				{method === "cod" && <CodCheckout />}
			</div>
		</div>
	);
};

export default Checkout;
