const handleFetch = async (url, options) => {
	const res = await fetch(url, options);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) return res;
	return res;
}

export const loginUser = async (userName, password) => {
	let url = `http://192.168.0.134:3000/user/login`;
	const options = {
		method: 'POST',
		body: JSON.stringify({userName, password}),
		headers:{
			'Content-Type': 'application/json'
		}
	}
	try {
		let res = await handleFetch(url, options);
		let loginData = await res.json();
		return loginData
	} catch (err) {
		console.log(err)
		return false;
	}
};


export const registerUser = async (userName, password) => {
	let url = `http://192.168.0.134:3000/user/register`;
	const options = {
		method: 'POST',
		body: JSON.stringify({userName, password}),
		headers:{
			'Content-Type': 'application/json'
		}
	}
	try {
		let res = await handleFetch(url, options);
		let registerData = await res.json();
		return registerData
	} catch (err) {
		console.log(err)
		return false;
	}
};