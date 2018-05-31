import AuthService from './AuthService'

const BASE = 'http://localhost:3000'

let get_next_course = function(type,location) {
	return fetch(BASE + '/get_next_course', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  filter: { // We pass in yelp searchParam to
			 type,
			 location,
		  }
	  })
	   }).then((r) => {
		    let json = r.json()
		    console.log(json)
		    return json
		 })

}



export  {
	get_next_course ,
}
