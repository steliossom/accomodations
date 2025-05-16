const url =  "/erotimata/query9"
const table =  document.getElementById(`table_1`)

fetch(url)
.then(response=>{

        return response.json()
})
.then(data =>{
    
    console.log(data.length)
    console.log(data)

    for(var i = 0  ; i<data.length ;  i++){
        var row = table.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        var cell6 = row.insertCell(5)
  


        cell1.innerHTML = `<td>${data[i].reservation_num}</td>`
        cell2.innerHTML = `<td>${data[i].id_visitor}</td>`
        cell3.innerHTML = `<td>${new Date(data[i].arrival_date).toISOString().split('T')[0]}</td>`
        cell4.innerHTML = `<td>${new Date(data[i].departure_date).toISOString().split('T')[0]}</td>`
        cell5.innerHTML = `<td>${new Date(data[i].submission_date).toISOString().split('T')[0]}</td>`
        cell6.innerHTML = `<td>${data[i].id_room}</td>`

  
 

    }

})