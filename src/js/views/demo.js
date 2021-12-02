import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import ContactList from "../component/ContactList";
import ImportContact from "../component/ImportContact";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ImportContact />
		</div>
	);
};
