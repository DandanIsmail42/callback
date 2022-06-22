new gridjs.Grid({
    columns: ["No", "Name", "Username", "Email", "Address",],
    server: {
        url: 'https://jsonplaceholder.typicode.com/users',
        then: data => data.map((res,i) => [i+1, res.name, res.username, res.email, (res.address.street +' ' + res.address.suite +' '+ res.address.city +' '+ res.address.zipcode)])
    },
  }).render(document.getElementById("gridtable"));