import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormEditUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [role, setRole] = useState("");
	const [msg, setMsg] = useState("");
	const navigate = useNavigate();

	const saveUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/users", {
				name: name,
				email: email,
				password: password,
				confPassword: confPassword,
				role: role,
			});
			navigate("/users");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	return (
		<div>
			<h1 className="title">Users</h1>
			<h2 className="subtitle">Update User</h2>
			<div className="card is-shadowless">
				<card-content>
					<div className="content">
						<form>
							<div className="field">
								<label className="label">Name</label>
								<div className="control">
									<input type="text" className="input" placeholder="Name" />
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control">
									<input type="text" className="input" placeholder="Email" />
								</div>
							</div>
							<div className="field">
								<label className="label">Password</label>
								<div className="control">
									<input
										type="password"
										className="input"
										placeholder="******"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Confirm Password</label>
								<div className="control">
									<input
										type="password"
										className="input"
										placeholder="******"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Role</label>
								<div className="control">
									<div className="select is-fullwidth">
										<select>
											<option value="admin">Admin</option>
											<option value="user">User</option>
										</select>
									</div>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<button className="button is-success is-fullwidth">
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</card-content>
			</div>
		</div>
	);
};

export default FormEditUser;
