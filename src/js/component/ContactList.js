import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditText } from "react-edit-text";

const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div>
				<ul>
					{store.list &&
						store.list.map(item => {
							const index = item.id;
							let fullname = item.full_name;
							let email = item.email;
							let address = item.address;
							let phone = item.phone;

							return (
								<li key={index}>
									<div>
										<div>
											<label>Full Name: </label>

											{fullname}
										</div>

										<div>
											<label>Email: </label>
											{email}
										</div>

										<div>
											<label>Address: </label>
											{address}
										</div>

										<div>
											<label>Phone: </label>
											{phone}
										</div>
									</div>
									<button
										name="editUser"
										type="button"
										onClick={() => {
											actions.getCurrentUser(index, fullname, email, address, phone);
										}}>
										<i className="fas fa-user-edit" />
									</button>

									<button
										name="saveButton"
										type="button"
										onClick={() => {
											actions.UpdateCurrentUser(index, fullname);
										}}>
										<i className="fas fa-save" />
									</button>

									<button
										name="deleteButton"
										type="button"
										onClick={() => {
											actions.deleteItem(index);
										}}>
										<i className="far fa-trash-alt" />
									</button>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default ContactList;
