import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const formSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<h1 className="text-4xl font-bold">Login</h1>
						<fieldset className="fieldset">
							<label className="label">Email</label>
							<input
								type="email"
								{...register("email", {
									required: "Email address is required",
								})}
								className="input"
								placeholder="Email"
							/>
							{errors.email && (
								<p className="text-red-500" role="alert">
									{errors.email.message}
								</p>
							)}

							<label className="label">Password</label>
							<input
								type="password"
								{...register("password", { required: true, minLength: 6 })}
								className="input"
								placeholder="Password"
							/>
							{errors.password?.type === "minLength" && (
								<p className="text-red-500">
									Password must be 6 charecters or longer
								</p>
							)}

							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
						</fieldset>

						<div className="flex gap-10 items-baseline">
							<button className="btn bg-lime-300 text-black mt-4">Login</button>
							<p>
								Create An Account?{" "}
								<Link to="/register" className="text-lime-300 link">
									Register
								</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
