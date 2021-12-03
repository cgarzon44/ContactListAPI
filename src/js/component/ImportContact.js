import React, { useContext, useState, nextID } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ImportContact = index => {
	const { actions } = useContext(Context);
	const [isShownHoverContent, setIsShownHoverContent] = useState(null);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAdress] = useState("");
	const [phone, setPhone] = useState("");

	return (
		<>
			<form key={index}>
				<Link to="/">
					<div name="leaveAddContact" type="button">
						<i className="fas fa-arrow-left backButton"> BACK</i>
					</div>
				</Link>
				<div
					className={isShownHoverContent === index ? "ContactDiv glow" : "ContactDiv "}
					onMouseEnter={() => setIsShownHoverContent(index)}
					onMouseLeave={() => setIsShownHoverContent(-1)}>
					<div>
						<ul>
							<li>
								<div>
									<div>
										<div className="inputDiv">
											<label>Full Name: </label>

											<input
												name="full_name"
												type="text"
												placeholder="Enter Full Name"
												value={fullName}
												onChange={e => setFullName(e.target.value)}
											/>
										</div>
										<br />
										<div className="inputDiv">
											<label>Email: </label>

											<input
												name="email"
												type="text"
												placeholder="Email@gmail.com"
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<br />
										<div className="inputDiv">
											<label>Address: </label>

											<input
												name="address"
												type="text"
												placeholder="47568 NW 34ST, 33434 FL, USA"
												value={address}
												onChange={e => setAdress(e.target.value)}
											/>
										</div>
										<br />
										<div className="inputDiv">
											<label>Phone: </label>

											<input
												name="phone"
												type="text"
												placeholder="(555)555-1234"
												value={phone}
												onChange={e => setPhone(e.target.value)}
											/>
										</div>
										<br />
									</div>
									<div className="addButtondiv">
										<Link to="/">
											<button
												className="btn-success addContactFormButton"
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
