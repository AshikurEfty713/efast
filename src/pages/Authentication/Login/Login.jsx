import React from "react";
import { useForm } from "react-hook-form";

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
				<fieldset className="fieldset">
					<label className="label">Email</label>
					<input
						type="email"
						{...register("email", { required: "Email address is required" })}
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
					<button className="btn btn-neutral mt-4">Login</button>
					<a className="link link-hover" href="/register">
						Create An Account?
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
