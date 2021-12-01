import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import EditContacts from "../component/EditContact";

export const Single = index => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(index);
	return (
		<div className="jumbotron">
			<EditContacts index={index} />
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
