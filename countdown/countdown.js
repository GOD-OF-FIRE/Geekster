// getting inner text of div which is default set 100
let getTime = document.getElementById("countdown").innerText
let time= document.getElementById("countdown")
// convert string to integer for further use
var integer=parseInt(getTime)
// to call update function every seconds
setInterval(update,1000)
// function update the timer
function update()
{
    integer -= 1;
    time.innerText = integer;
    if(integer<=0)
    {
        document.getElementById("countdown").innerHTML = "TIMES UP";
        document.getElementById("container").style.backgroundColor="red";
    }
}
