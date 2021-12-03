import React, { useContext, useState, nextID } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ImportContact = () => {
	const { actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAdress] = useState("");
	const [phone, setPhone] = useState("");

	const handleOnClickButton = e => {
		e.preventDefault();
	};

	return (
		<>
			<form>
				<div className="text-center mt-5">
					<div>
						<ul>
							<li>
								<div>
									<div>
										<label>Full Name: </label>

										<input
											name="full_name"
											type="text"
											placeholder="Enter Full Name"
											value={fullName}
											onChange={e => setFullName(e.target.value)}
										/>
										<div>
											<label>Email: </label>
											<input
												name="email"
												type="text"
												placeholder="Email@gmail.com"
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<div>
											<label>Address: </label>
											<input
												name="address"
												type="text"
												placeholder="47568 NW 34ST, 33434 FL, USA"
												value={address}
												onChange={e => setAdress(e.target.value)}
											/>
										</div>
										<div>
											<label>Phone: </label>
											<input
												name="phone"
												type="text"
												placeholder="(555)555-1234"
												value={phone}
												onChange={e => setPhone(e.target.value)}
											/>
										</div>

										<Link to="/">
											<button name="leaveAddContact" type="button">
												<i className="fas fa-undo-alt" />
											</button>
											<button
												className="btn-success "
												type="button"
												onClick={() => {
													actions.newListItem(fullName, email, address, phone);
												}}>
												Add New Contact
											</button>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</form>
		</>
	);
};

export default ImportContact;
