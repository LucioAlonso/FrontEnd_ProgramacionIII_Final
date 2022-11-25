const options = {
    method: 'GET',
    headers: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzQ1ZTQxY2VlODczNjNjNzFlMTI0MTkiLCJpYXQiOjE2NjkzOTI2NjIsImV4cCI6MTY3MDM5MjY2Mn0.pUJl8o_J_Gx-_Q5m23MICe_-zEoRblMLjYXYNTRKlq0'
    }
}

const handleFetch = async (url, options) => {
	const res = await fetch(url, options);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) throw new Error(res.statusText);
	return res;
}

const getAllClaims = async claim => {
	let url = `http://192.168.0.134:3000/claim/all`;
	try {
		let res = await handleFetch(url, options);
		let dogImage = await res.json();
		console.log(dogImage)
	} catch (err) {
		alert(err);
	}
};

module.exports = getAllClaims;