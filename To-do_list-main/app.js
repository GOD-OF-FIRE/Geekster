const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
class item{
constructor(name){
this.createItem(name);
}
createItem(name){
var itemBox = document.createElement('div');
itemBox.classList.add('item');

var input = document.createElement('input');
input.type = "text";
input.disabled = true;
input.value = name;

input.style.backgroundColor="aliceblue";
input.style.textAlign="center";
input.style.outline="none";
input.classList.add('item_input');

var edit = document.createElement('button');
edit.classList.add('edit');
edit.innerHTML = "Edit";
edit.addEventListener('click', () => this.edit(input, name));

var remove = document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = "Delete";
remove.addEventListener('click', () => this.remove(itemBox, name));

var update = document.createElement('button');
update.classList.add('update');
update.innerHTML = "Update";
update.addEventListener('click', () => this.update(input, name));

container.appendChild(itemBox);

itemBox.appendChild(input);
itemBox.appendChild(edit);
itemBox.appendChild(update);
itemBox.appendChild(remove);



}

edit(input, name){
if(input.disabled == true){
   input.disabled = !input.disabled;
    }
    else{
    input.disabled = !input.disabled;
   }
}

update(input, name){
    if(input.disabled == false){
       input.disabled = !input.disabled;
        }
        else{
        input.disabled = !input.disabled;
       }
    }


 remove(itemBox, name){
itemBox.parentNode.removeChild(itemBox);
 }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
if(e.which == 13){
check();
}
})

function check(){
if(inputValue.value=="")
    {
        alert("Enter any Task")
        return;
    } else
    {
        document.getElementById("error").innerHTML="";
        new item(inputValue.value);
    }
}
for (var v = 0 ; v < input.length ; v++){
new item(input[v]);
}