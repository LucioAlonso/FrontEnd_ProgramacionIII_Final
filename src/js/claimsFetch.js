

const handleFetch = async (url, options) => {
	const res = await fetch(url, options);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) throw new Error(res.statusText);
	return res;
}

//temporal
export const getAllClaims = async claim => {
	let url = `http://192.168.0.134:3000/claim/all`;
	const options = {
		method: 'GET',
		headers: {
		  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzQ1ZTQxY2VlODczNjNjNzFlMTI0MTkiLCJpYXQiOjE2NjkzOTI2NjIsImV4cCI6MTY3MDM5MjY2Mn0.pUJl8o_J_Gx-_Q5m23MICe_-zEoRblMLjYXYNTRKlq0'
		}
	}
	try {
		let res = await handleFetch(url, options);
		let claimsData = await res.json();
		console.log(claimsData)
	} catch (err) {
		alert(err);
	}
};


export const addClaim = async (userID, claim , category, residence, token) => {
	let url = `http://192.168.0.134:3000/claim/${userID}/add`;
	const options = {
		method: 'POST',
		body: JSON.stringify({claim, category, residence}),
		headers: {
			'Content-Type': 'application/json',
		 	 token
		}
	}
	try {
		let res = await handleFetch(url, options);
		let claimsData = await res.json();
		return claimsData;
	} catch (err) {
		return err;
	}
};