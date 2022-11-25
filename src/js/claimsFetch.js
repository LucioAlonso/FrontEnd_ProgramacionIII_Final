const handleFetch = async url => {
	const res = await fetch(url);
	return await handleError(res);
}

const handleError = (res) => {
	if (!res.ok) throw new Error(res.statusText);
	return res;
}

const getAllClaims = async claim => {
	let url = `https://localhost:3000/claim/all`;
	try {
		let res = await handleFetch(url);
		let dogImage = await res.json();
		dogImage.message.forEach(n => {
			console.log(n)
		}); 
	} catch (err) {
		alert(err);
	}
};

module.exports = getAllClaims;