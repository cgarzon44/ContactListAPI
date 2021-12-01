import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditText } from "react-edit-text";
import { Link } from "react-router-dom";

const EditContact = item => {
	const { store, actions } = useContext(Context);
	const [newFullName, setNewFullName] = useState();
	const [newEmail, setNewEmail] = useState();
	const [newAddress, setNewAddress] = useState();
	const [newPhone, setNewPhone] = useState();

	return (
		<div className="text-center mt-5">
			<div>
				<ul>
					{store.list &&
						store.list.map(item => {
							const index = item.id;

							return (
								<li key={index}>
									<div>
										<div>
											<label>Full Name: </label>
											<input
												placeholder={item.full_name}
												value={newFullName}
												onChange={e => setNewFullName(e.target.value)}
											/>
										</div>

										<div>
											<label>Email: </label>
											<input
												placeholder={item.email}
												value={newEmail}
												onChange={e => setNewEmail(e.target.value)}
											/>
										</div>

										<div>
											<label>Address: </label>
											<input
												placeholder={item.address}
												value={newAddress}
												onChange={e => setNewAddress(e.target.value)}
											/>
										</div>

										<div>
											<label>Phone: </label>
											<input
												placeholder={item.phone}
												value={newPhone}
												onChange={e => setNewPhone(e.target.value)}
											/>
										</div>
									</div>
									<Link to="/demo">
										<button name="leaveEdit" type="button">
											<i className="fas fa-times-circle" />
										</button>
									</Link>

									<button
										name="saveButton"
										type="button"
										onClick={() => {
											actions.UpdateCurrentUser(
												index,
												newFullName,
												newEmail,
												newAddress,
												newPhone
											);
										}}>
										<i className="fas fa-save" />
									</button>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default EditContact;
