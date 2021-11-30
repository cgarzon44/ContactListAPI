import React, { useContext, useState, nextID } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

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
					<label>Full Name: </label>
					<input
						name="full_name"
						type="text"
						placeholder="Enter First Name"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
					/>
					<label>Email: </label>
					<input
						name="email"
						type="text"
						placeholder="dave@gmail.com"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label>Address: </label>
					<input
						name="address"
						type="text"
						placeholder="47568 NW 34ST, 33434 FL, USA"
						value={address}
						onChange={e => setAdress(e.target.value)}
					/>
					<label>Phone: </label>
					<input
						name="phone"
						type="text"
						placeholder="(555)555-1234"
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<button
					className="btn-primary "
					type="button"
					onClick={() => {
						actions.newListItem(fullName, email, address, phone);
						handleOnClickButton;
						setFullName("");
						setEmail("");
						setAdress("");
						setPhone("");
					}}>
					Add New Contact
				</button>
			</form>
		</>
	);
};

export default ImportContact;
