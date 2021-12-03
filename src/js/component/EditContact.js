import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditContact, EditText } from "react-edit-text";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EditContacts = (props, i) => {
	const { store, actions } = useContext(Context);
	const edit = store.list[props.index.match.params.index];
	const [isShownHoverContent, setIsShownHoverContent] = useState(null);
	const [newFullName, setNewFullName] = useState(edit.full_name);
	const [newEmail, setNewEmail] = useState(edit.email);
	const [newAddress, setNewAddress] = useState(edit.address);
	const [newPhone, setNewPhone] = useState(edit.phone);
	const id = edit.id;

	return (
		<>
			<form key={i}>
				<Link to="/">
					<div name="leaveAddContact" type="button">
						<i className="fas fa-arrow-left backButton"> BACK</i>
					</div>
				</Link>
				<div
					className={isShownHoverContent === i ? "ContactDiv glow" : "ContactDiv "}
					onMouseEnter={() => setIsShownHoverContent(i)}
					onMouseLeave={() => setIsShownHoverContent(-1)}>
					<div>
						<ul>
							<li>
								<div>
									<div>
										<div className="inputDiv">
											<label>Full Name: </label>
											<input value={newFullName} onChange={e => setNewFullName(e.target.value)} />
										</div>
										<br />
										<div className="inputDiv">
											<label>Email: </label>
											<input value={newEmail} onChange={e => setNewEmail(e.target.value)} />
										</div>
										<br />
										<div className="inputDiv">
											<label>Address: </label>
											<input value={newAddress} onChange={e => setNewAddress(e.target.value)} />
										</div>
										<br />
										<div className="inputDiv">
											<label>Phone: </label>
											<input value={newPhone} onChange={e => setNewPhone(e.target.value)} />
										</div>
										<br />
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</form>
			<div className="addButtondiv">
				<Link to="/">
					<button
						className="btn-success addContactFormButton"
						name="saveButton"
						type="button"
						onClick={() => {
							actions.UpdateCurrentUser(id, newFullName, newEmail, newAddress, newPhone);
						}}>
						Save
					</button>
				</Link>
			</div>
		</>
	);
};

EditContacts.propTypes = {
	match: PropTypes.object,
	index: PropTypes.object
};

export default EditContacts;
