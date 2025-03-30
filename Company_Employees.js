
function datas(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        function calculateCompanyEmployees() {
          return data.reduce((acc, curr) => {
            if (!acc.includes(curr.company.name)) {
              acc.push(curr.company.name);
            }
            return acc;
          }, []).length;
        }
        console.log(` Total unique companies: ${calculateCompanyEmployees()}`);
      })
      .catch((error) => console.error(error));
}


 datas();