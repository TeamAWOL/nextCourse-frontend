const BASE = 'http://localhost:3000'


// Group related API Calls
let get_user_outings = function(userId){
	console.log("User ID: " + userId)
	return fetch(BASE + '/outings/?userId=' + userId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let add_user_outing = function(userId,outing){
  console.log("Adding outing to a user: " + userId)
  return fetch(BASE + '/outings/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      mods: { // We pass in yelp searchParam to
          userId,
          outing
      }
    })
   }).then((r) => {
       let json = r.json()
       console.log(json)
       return json
   })
}

let delete_user_outing = function(outingId) {
	console.log("Deleting outing: " + outingId)
	return fetch(BASE + '/outings/' + outingId, {
		method: 'DELETE'

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}

let update_user_outing = function(outing) {
  console.log("Update Outing info:" + outing.id)
	return fetch(BASE + '/outings/' + outing.id ,{
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  mods: { // We pass in yelp searchParam to
          outing
		  }
	  })

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}


export  {
					 get_user_outings,
					 add_user_outing,
           delete_user_outing,
					 update_user_outing,
}
