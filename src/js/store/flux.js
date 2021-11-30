const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
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
			newListItem: (fullName, email, address, phone) => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;
				newList = [
					...newList,
					{
						full_name: fullName,
						email: email,
						agenda_slug: CarlosAgenda,
						address: address,
						phone: phone
					}
				];
				const raw = JSON.stringify(newList);

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(" https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.then(() => getActions().listGet())
					.catch(error => console.log("error", error));
			},

			deleteItem: index => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;

				const ifIndexMatchRemove = (element, indexToTest) => {
					return indexToTest !== index;
				};
				newList = getStore().list.filter(ifIndexMatchRemove);
				const raw = JSON.stringify(newList);

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const newObject = { list: newList };
				fetch("https://assets.breatheco.de/apis/fake/todos/user/cgarzon", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))

					.then(response => setStore(newObject))

					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
