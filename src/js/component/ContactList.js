import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditText } from "react-edit-text";
import { Link } from "react-router-dom";

const ContactList = index => {
	const { store, actions } = useContext(Context);
	const [newFullName, setNewFullName] = useState();

	return (
		<>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
			<div className="text-center mt-5">
				<div>
					<ul>
						{store.list &&
							store.list.map((item, index) => {
								const id = item.id;

								return (
									<li key={index}>
										<div>
											<div>
												<label>Full Name: </label>

												{item.full_name}
											</div>

											<div>
												<label>Email: </label>
												{item.email}
											</div>

											<div>
												<label>Address: </label>
												{item.address}
											</div>

											<div>
												<label>Phone: </label>
												{item.phone}
											</div>
										</div>
										<Link to={"/single/" + index}>
											<button
												name="editUser"
												type="button"
												onClick={() => {
													actions.getCurrentUser(index);
												}}>
												<i className="fas fa-user-edit" />
											</button>
										</Link>

										<button
											name="deleteButton"
											type="button"
											onClick={() => {
												actions.deleteItem(id);
											}}>
											<i className="far fa-trash-alt" />
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ContactList;
