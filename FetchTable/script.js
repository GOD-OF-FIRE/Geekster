let r =fetch('https://reqres.in/api/user');

let s = r.then(function(response){
   return response.json();
});

s.then(function(info){
    console.log(info);
    let displayData=info.data;
    for(let i=0; i<displayData.length; i++)
    {
        let id=displayData[i].id;
        let name=displayData[i].name;
        let year=displayData[i].year;
        let color=displayData[i].color;
        let table=document.querySelector('table');
        let tableRow=document.createElement('tr');

        tableRow.innerHTML='<td>'+ id +'</td>' + '<td>'+name+'</td>'+ '<td>'+year +'</td>'+ '<td>'+color+'</td>';
        table.appendChild(tableRow);

    }

});
