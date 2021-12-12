let btn = document.getElementById("btnClick");
btn.addEventListener("click", fn);
function fn() {
  let image = document.getElementById("image");
  let r = fetch("https://meme-api.herokuapp.com/gimme");

  let s = r.then(function (response) {
    return response.json();
  });

  s.then(function (data) {
      console.log(data.url)
      image.src = data.url



  });
  


}
