let contentDiv = document.getElementById('content')
let contentDiv2 = document.getElementById('description')
let url = "https://fakestoreapi.com/products"
const responseFromFetch = fetch(url).then(response =>{
    // retrieving of the data
    return response.json()
}).then(data => {
    // data manipulation
    console.log(data)
    for(let i = 0 ; i <= 4 ; i++)
    {
        contentDiv.innerHTML = data[i].title
       
    }
    for(let i = 0 ; i <= 4 ; i++)
    {
        contentDiv2.innerHTML = data[i].description
           
    }
    
})