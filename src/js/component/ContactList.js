import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const ContactList = index => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Add Contact</button>
				</Link>
			</div>
			<div className="text-center mt-5">
				<div>
					<ul>
						{store.list &&
							store.list.map((item, index) => {
								const id = item.id;

								return (
									<>
										<li className="ContactDiv" key={index}>
											<div>
												<div>
													<h1>{item.full_name}</h1>
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
									</>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ContactList;
