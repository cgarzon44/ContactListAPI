import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const ImportContact = () => {
	const { actions } = useContext(Context);

	const [newItem, setNewItem] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [agenda, setAgenda] = useState("");
	const [address, setAdress] = useState("");
	const [phone, setPhone] = useState("");

	const handleOnClickButton = e => {
		e.preventDefault();
	};

	return (
		<>
			<form>
				<div className="text-center mt-5">
					<input
						type="text"
						placeholder="New Task"
						value={newItem}
						onChange={e => setNewItem(e.target.value)}
					/>
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
					<label>Agenda: </label>
					<input
						name="agenda_slug"
						type="text"
						placeholder="my_super_agenda"
						value={agenda}
						onChange={e => setAgenda(e.target.value)}
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
						actions.newListItem(newItem, fullName, email, agenda, address, phone);
						setNewItem("");
						setFullName("");

						handleOnClickButton;
					}}>
					Add New Contact
				</button>
			</form>
		</>
	);
};

export default ImportContact;
