const url =  "/erotimata/query1"
const table =  document.getElementById(`table_1`)

fetch(url)
.then(response=>{

        return response.json()
})
.then(data =>{
    
    console.log(data)
    
   for(var  i= 0  ; i<data.length ; i++){

        var row = table.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = `<td>${data[i].id_room}</td>`
        cell2.innerHTML = `<td>${data[i].number}</td>`
        cell3.innerHTML =`<td>${data[i].category}</td>`
        cell4.innerHTML = `<td>${data[i].price}</td>`
        cell5.innerHTML =  `<td>${data[i].id_accomodation}</td>`

   }


})