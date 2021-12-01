import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditContact, EditText } from "react-edit-text";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EditContacts = index => {
	const { store, actions } = useContext(Context);

	const [newFullName, setNewFullName] = useState();
	const [newEmail, setNewEmail] = useState();
	const [newAddress, setNewAddress] = useState();
	const [newPhone, setNewPhone] = useState();

	return (
		<div className="text-center mt-5">
			<div>
				<ul>
					<li key={index}>
						<div>
							<div>
								<label>Full Name: </label>
								<input placeholder={index} onChange={e => setNewFullName(e.target.value)} />
							</div>

							<div>
								<label>Email: </label>
								<input value={"value"} onChange={e => setNewEmail(e.target.value)} />
							</div>

							<div>
								<label>Address: </label>
								<input value={newAddress} onChange={e => setNewAddress(e.target.value)} />
							</div>

							<div>
								<label>Phone: </label>
								<input value={newPhone} onChange={e => setNewPhone(e.target.value)} />
							</div>
						</div>
						<Link to="/demo">
							<button name="leaveEdit" type="button">
								<i className="fas fa-undo-alt" />
							</button>
						</Link>

						<button
							name="saveButton"
							type="button"
							onClick={() => {
								actions.UpdateCurrentUser(index, newFullName, newEmail, newAddress, newPhone);

								setNewFullName("");
								setNewEmail("");
								setNewAddress("");
								setNewPhone("");
							}}>
							<i className="fas fa-save" />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

EditContacts.propTypes = {
	match: PropTypes.object
};

export default EditContacts;
