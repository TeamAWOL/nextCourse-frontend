const BASE = 'http://localhost:3000'


// YELP API CALLS
let get_next_course = function(userId,group_name,friend_name,preference,location,price_range) {
	return fetch(BASE + '/get_next_course', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  filter: { // We pass in yelp searchParam to
       userId,
			 group_name,
			 friend_name,
			 preference,
			 location,
			 price_range
		  }
	  })
	   }).then((r) => {
		    let json = r.json()
		    console.log(json)
		    return json
		 })

}

export  {
					 get_next_course

}
