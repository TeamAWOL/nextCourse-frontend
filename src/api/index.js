import AuthService from './AuthService'

const Auth = new AuthService()

const BASE = 'http://localhost:3000'

let get_next_course = function(type,location) {
	return fetch(BASE + '/get_next_course')
	.then((r) => {
		let json = r.json()
		console.log(json);
		return json
	})
}

// let getApartment = function(id) {
// 	return fetch(BASE + '/apartments/' + id )
// 	.then((r) => {
// 		let json = r.json()
// 		console.log(json);
// 		return json
// 	})
// }
//
// let addApartment = function(apartment) {
// 	return fetch(BASE + '/apartments', {
// 		body: JSON.stringify(apartment),
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': 'Bearer ' + Auth.getToken()
// 		},
// 		method: "POST"
// 	})
// 	.then((r) => {
// 		let json = r.json()
// 		console.log(json);
// 		return json
// 	})
// }

export  {
	get_next_course
}
