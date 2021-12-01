import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import EditContacts from "../component/EditContact";

export const Single = index => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron">
			<EditContacts index={index} />
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
