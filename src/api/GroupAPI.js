const BASE = 'http://localhost:3000'

// Group related API Calls
let get_user_groups = function(userId){
	console.log("User ID: " + userId)
	return fetch(BASE + '/groups/?userId=' + userId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let get_user_group = function(groupId){
	console.log("Group ID: " + groupId)
	return fetch(BASE + '/groups/' + groupId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let add_user_group = function(userId,group){
  console.log("Adding Groups to UserId: " + userId)
  console.log("Input Group Info: " + group.name)
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
       console.log(json)
       return json
   })
}

let delete_user_group = function(groupId) {
	console.log("Deleting Group: " + groupId)
	return fetch(BASE + '/groups/' + groupId, {
		method: 'DELETE'

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}

let update_user_group = function(group,groupId) {
  console.log("Update Group info:" + group)
	return fetch(BASE + '/groups/' + groupId ,{
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  mods: { // We pass in yelp searchParam to
          group
		  }
	  })

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}


export  {
					 get_user_groups,
					 get_user_group,
					 add_user_group,
					 delete_user_group,
					 update_user_group,

}
