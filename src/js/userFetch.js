import { ipHost } from "../config/config";

const handleFetch = async (url, options) => {
	const res = await fetch(url, options);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) return res;
	return res;
}

export const loginUser = async (userName, password) => {
	let url = `http://${ipHost}/user/login`;
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


export const registerUser = async (userName, password, name, lastname, dni, phone, mail) => {
	let url = `http://${ipHost}/user/register`;
	const options = {
		method: 'POST',
		body: JSON.stringify({userName, password, name, lastname, dni, phone, mail}),
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