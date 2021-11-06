let result = '';
let operation = '';
let operation_new_number = '';

// for listning operation
document.getElementById('add_button').addEventListener('click',addition)

document.getElementById('sub_button').addEventListener('click',substraction)

document.getElementById('mul_button').addEventListener('click',multiplication)

document.getElementById('div_button').addEventListener('click',division)

document.getElementById('equals_button').addEventListener('click',equals)

// giving operator value in function

function addition()
{
    operation='+';
}
function substraction()
{
    operation='-';
}
function multiplication()
{
    operation='*';

}
function division()
{
    operation='/';
}

// number clicked
const number_button_clicked = e => {
    if(operation == '') {
        result += e.target.dataset.number;
        display(result);
    } else {
        operation_new_number += e.target.dataset.number;
        display(operation_new_number);
    }
};


function display(value){
    var display=document.getElementById('display')
        display.value=value
}


// function for operating
function equals(){
    if(operation=='+'){
        const ans=Number(result)+Number(operation_new_number)
        display(ans)
    }
    else if(operation=='-'){
        const ans=Number(result)-Number(operation_new_number)
        display(ans)
    }
    else if(operation=='*'){
        const ans=Number(result)*Number(operation_new_number)
        display(ans)
    }
    else if(operation=='/'){
        const ans=Number(result)/Number(operation_new_number)
        display(ans)
    }
operation=''
}


let number_buttons = document.querySelectorAll('.number_button');
number_buttons.forEach(single_number_button => {
    single_number_button.addEventListener('click', number_button_clicked);
});
