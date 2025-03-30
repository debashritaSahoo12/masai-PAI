 function searchUser(username){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json()
.then(userData=>{
    let user=userData.find(user=>user.username==username)
    if(user.username==username){
            if(user){
              let obj={}
              obj.id=user.id
              obj.name=user.name
              obj.usename=user.username
              obj.email=user.email
              console.log(obj)
                   }else{
                    console.log("User not found")
                   }
                }

}).catch(error=>console.error(error))
 )}
searchUser("Bret")
