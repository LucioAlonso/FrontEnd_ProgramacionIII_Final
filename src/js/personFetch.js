const handleFetch = async (url, options) => {
	const res = await fetch(url, options);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) return res;
	return res;
}

export const getPerson = async (token, userID) => {
	let url = `http://192.168.0.134:3000/person/${userID}`;

	const options = {
		method: 'GET',
		headers: {
			token
		  }
	}
	try {
		let res = await handleFetch(url, options);
		let dataPerson = await res.json();
		return dataPerson
	} catch (err) {
		console.log(err)
		return false;
	}
};


export const editPerson = async (token, name, lastname, dni, mail, phone) => {
	let url = `http://192.168.0.134:3000/person/edit`;

	const options = {
		method: 'PUT',
		body: JSON.stringify({name, lastname, dni, mail, phone}),
		headers: {
			"Content-Type": "application/json",
			token
		  }
	}
	try {
		let res = await handleFetch(url, options);
		let dataPerson = await res.json();
		return dataPerson
	} catch (err) {
		console.log(err)
		return false;
	}
};