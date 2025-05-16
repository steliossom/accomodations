

var button  =  document.getElementById("mySearchButton")

button.addEventListener("click",()=>{

var location  = document.getElementById("myInput").value



const url =  "/erotimata/query6/"+location
const table =  document.getElementById(`table_1`)

for(var i = 1;i<table.rows.length;){
    table.deleteRow(i);
}

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



        cell1.innerHTML = `<td>${data[i].Πλήθος}</td>`
        cell2.innerHTML = `<td>${data[i].type}</td>`

  
 

    }

})




})



