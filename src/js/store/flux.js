const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: [],
			singleUser: {}
		},
		actions: {
			// Get Conatct List
			listGet: () => {
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(` https://assets.breatheco.de/apis/fake/contact/agenda/CarlosAgenda`, requestOptions)
					.then(response => response.json())
					.then(res => getStore(setStore({ list: res })))
					.catch(error => console.log("error", error));
			},

			// add new contact
			newListItem: (fullName, email, address, phone) => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;

				newList = {
					full_name: fullName,
					email: email,
					agenda_slug: "CarlosAgenda",
					address: address,
					phone: phone
				};
				const raw = JSON.stringify(newList);

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/contact/`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.then(() => getActions().listGet())
					.catch(error => console.log("error", error));
			},

			// delete conatct
			deleteItem: id => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;
				const raw = JSON.stringify(newList);

				const requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const newObject = { list: newList };
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.then(() => getActions().listGet())

					.catch(error => console.log("error", error));
			},

			// get user to edit
			getCurrentUser: index => {
				const myHeaders = { "Content-Type": "application/json" };

				const raw = JSON.stringify();

				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/contact/${index}`, requestOptions)
					.then(response => response.text())
					.then(result => getStore(setStore({ singleUser: result })))

					.catch(error => console.log("error", error));
			},
			// put updated data to sever
			UpdateCurrentUser: (id, newFullName, email, address, phone) => {
				const myHeaders = { "Content-Type": "application/json" };
				const raw = JSON.stringify({
					full_name: newFullName,
					email: email,
					agenda_slug: "CarlosAgenda",
					address: address,
					phone: phone
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.text())
					// .then(result => console.log(result))
					.then(() => getActions().listGet())
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
