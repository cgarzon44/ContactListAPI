import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const ContactList = index => {
	const { store, actions } = useContext(Context);

	const [isShownHoverContent, setIsShownHoverContent] = useState(null);

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
										<div
											className="ContactDiv"
											onMouseEnter={() => setIsShownHoverContent(index)}
											onMouseLeave={() => setIsShownHoverContent(-1)}>
											<div className="contactListButtons">
												<Link to={"/single/" + index}>
													<div
														name="editUser"
														onClick={() => {
															actions.getCurrentUser(index);
														}}>
														<i
															className={
																isShownHoverContent === index
																	? "fas fa-edit p-2 flex-shrink-1 "
																	: "fas fa-edit p-2 flex-shrink-1 hide"
															}
														/>
													</div>
												</Link>

												<div
													name="deleteButton"
													onClick={() => {
														actions.deleteItem(id);
													}}>
													<i
														className={
															isShownHoverContent === index
																? "fas fa-ban p-2 flex-shrink-1 "
																: "fas fa-ban p-2 flex-shrink-1 hide"
														}
													/>
												</div>
											</div>

											<li key={index}>
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
											</li>
										</div>
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
