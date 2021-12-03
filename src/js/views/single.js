import React from "react";
import PropTypes from "prop-types";
import EditContacts from "../component/EditContact";

export const Single = index => {
	return (
		<div className="container">
			<EditContacts index={index} />
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
