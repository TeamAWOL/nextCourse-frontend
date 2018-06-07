const BASE = 'http://localhost:3000'

// Group related API Calls
let get_user_groups = function(userId){
	return fetch(BASE + '/groups/?userId=' + userId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				return json
		})
}

let add_user_group = function(userId,group){
  return fetch(BASE + '/groups/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      mods: { // We pass in yelp searchParam to
          userId,
          group
      }
    })
   }).then((r) => {
       let json = r.json()
       return json
   })
}

let delete_user_group = function(groupId) {
	return fetch(BASE + '/groups/' + groupId, {
		method: 'DELETE'

	 }).then((r) => {
			 let json = r.json()
			 return json
	 })
}

let update_user_group = function(group) {
	return fetch(BASE + '/groups/' + group.id ,{
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  mods: { // We pass in yelp searchParam to
          group
		  }
	  })

	 }).then((r) => {
			 let json = r.json()
			 return json
	 })
}


export  {
					 get_user_groups,
					 add_user_group,
					 delete_user_group,
					 update_user_group,

}
