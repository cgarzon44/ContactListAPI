import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import ContactList from "../component/ContactList";
import ImportContact from "../component/ImportContact";

export const Home = () => (
	<div className="text-center mt-5">
		<ContactList />
		<ImportContact />
	</div>
);
