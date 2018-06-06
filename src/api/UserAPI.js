const BASE = 'http://localhost:3000'


let get_user = function(userId){
	console.log("User ID: " + userId)
	return fetch(BASE + '/users/'+ userId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let delete_user = function(userId) {
   console.log("Deleting User: " + userId)
	 return fetch(BASE + '/users/' + userId, {
 		 method: 'DELETE'

 		}).then((r) => {
 				let json = r.json()
 				console.log(json)
 				return json
 		})
}

let update_user = function(user){
   console.log("Updating User: " + user.id )
   return fetch(BASE + '/users/' + user.id ,{
     method: 'PATCH',
     headers: { 'Content-Type': 'application/json'},
     body: JSON.stringify({
       mods: { // We pass in yelp searchParam to
            user
       }
     })

    }).then((r) => {
        let json = r.json()
        console.log(json)
        return json
    })
}

export  {
           get_user,
           delete_user,
					 update_user
}
