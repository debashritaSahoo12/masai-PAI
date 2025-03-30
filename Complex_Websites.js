fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    function findComplexWebsiteUsers() {
      let complexWebUsers = data.filter(
        (user) => user.website.split(".")[0].length >= 3
      );
      console.log(`Users with complex websites: ${findComplexWebsiteUsers()}`);
      return complexWebUsers;
    }
    
    console.log(findComplexWebsiteUsers());
  }).catch((error) => console.error(error));

