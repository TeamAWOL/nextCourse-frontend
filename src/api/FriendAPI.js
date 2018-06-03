const BASE = 'http://localhost:3000'

let get_group_friends = function(groupId){
	console.log("Group ID: " + groupId)
	return fetch(BASE + '/friends/?groupId=' + groupId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let add_group_friend = function(groupId,friend){
  console.log("Adding friend to group: " + groupId)
  return fetch(BASE + '/friends/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      mods: { // We pass in yelp searchParam to
          groupId,
          friend
      }
    })
   }).then((r) => {
       let json = r.json()
       console.log(json)
       return json
   })
}

let delete_group_friend = function(friendId) {
	console.log("Deleting Friend: " + friendId)
	return fetch(BASE + '/friends/' + friendId, {
		method: 'DELETE'

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}

let update_group_friend = function(friend) {

  console.log("Update friend info:" + friend.id)
	return fetch(BASE + '/friends/' + friend.id ,{
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  mods: { // We pass in yelp searchParam to
          friend
		  }
	  })

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}


export  {
					 get_group_friends,
					 add_group_friend,
					 delete_group_friend,
					 update_group_friend,

}
