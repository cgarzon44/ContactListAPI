import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const ContactList = index => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="addContactButton">
				<Link to="/demo">
					<button className="btn btn-success">Add Contact</button>
				</Link>
			</div>
			<div className="mt-5">
				<div>
					<ul>
						{store.list &&
							store.list.map((item, index) => {
								const id = item.id;

								return (
									<>
										<li className="ContactDiv" key={index}>
											<div>
												<img
													src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
													alt="No Picture"
												/>
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
