
const url =  "/erotimata/query2"
const table =  document.getElementById(`table_1`)

fetch(url)
.then(response=>{

        return response.json()
})
.then(data =>{
    
    console.log(data)

    for(var i = 0  ; i<data.length ;  i++){
        var row = table.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 =  row.insertCell(5)

        cell1.innerHTML = `<td>${data[i].name}</td>`
        cell2.innerHTML = `<td>${data[i].type}</td>`
        cell3.innerHTML =`<td>${data[i].av_rooms}</td>`
        cell4.innerHTML = `<td>${data[i].luxury}</td>`
        cell5.innerHTML =  `<td>${data[i].location}</td>`
        cell6.innerHTML =   `<td>${data[i].services_description}`

    }

})