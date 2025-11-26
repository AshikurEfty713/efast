import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { createUser } = useAuth();

	const formSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body p-4 lg:p-10">
						<h1 className="lg:text-4xl text-3xl font-bold">
							Create An Account
						</h1>
						<fieldset className="fieldset">
							<label className="label">Email</label>
							<input
								type="email"
								{...register("email", { required: "Please enter the email" })}
								className="input"
								placeholder="Email"
							/>
							{errors.email && (
								<p className="text-red-500">{errors.email.message}</p>
							)}
							<label className="label">Password</label>
							<input
								type="password"
								{...register("password", { required: true, minLength: 6 })}
								className="input"
								placeholder="Password"
							/>
							{errors.password?.type === "required" && (
								<p className="text-red-500">Password is required</p>
							)}
							{errors.password?.type === "minLength" && (
								<p className="text-red-500">
									Password enter 6 characters or longer
								</p>
							)}
							<button className="btn bg-orange-500 lg:text-base text-sm text-white rounded-full lg:mt-4 mt-2">
								Register
							</button>
							<div>
								<p>
									Have An Accoung?{" "}
									<Link to="/login" className="text-orange-400 link">
										login
									</Link>
								</p>
							</div>
							<h5 className="text-center">or</h5>
							<div>
								<SocialLogin></SocialLogin>
							</div>
						</fieldset>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;
