import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div>
				<ul>
					{store.list &&
						store.list.map((item, index) => {
							return (
								<li key={index}>
									{item.full_name}
									{item.email}
									{item.agenda_slug}
									{item.address}
									{item.phone}
									<button
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
