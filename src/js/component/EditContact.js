import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EditText } from "react-edit-text";
import { Link } from "react-router-dom";

const EditContact = () => {
	const { store, actions } = useContext(Context);
	const [newFullName, setNewFullName] = useState();

	return (
		<div className="text-center mt-5">
			<div>
				<ul>
					{store.list &&
						store.list.map(item => {
							const index = item.id;

							return (
								<li key={index}>
									<h1>HEllO</h1>
									<div>
										<div>
											<label>Full Name: </label>
											<EditText defaultValue={item.full_name} />
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
										name="saveButton"
										type="button"
										onClick={() => {
											actions.UpdateCurrentUser(index, fullname, email, address, phone);
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
