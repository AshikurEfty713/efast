import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

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
		<div className="w-full">
			<form onSubmit={handleSubmit(formSubmit)}>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body p-4 lg:p-10">
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

						<div className="lg:flex lg:gap-6 items-baseline">
							<button className="lg:btn bg-orange-500 text-sm lg:text-base text-white rounded-full lg:px-7 px-5 py-1 lg:mt-4 mt-0 mb-2 lg:mb-0">
								Login
							</button>
							<p>
								Create An Account?{" "}
								<Link to="/register" className="text-orange-400 link">
									Register
								</Link>
							</p>
						</div>
						<h5 className="text-center">or</h5>
						<div>
							<SocialLogin></SocialLogin>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
