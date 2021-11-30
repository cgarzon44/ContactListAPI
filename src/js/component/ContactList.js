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

							return (
								<form key={index}>
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

										<button
											type="button"
											onClick={() => {
												actions.deleteItem(index);
											}}>
											<i className="far fa-trash-alt" />
										</button>
									</li>
								</form>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default ContactList;
