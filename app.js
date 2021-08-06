
const disp_tmp = document.querySelector(".display_temp");
const disp_main = document.querySelector(".display_main");
const disp_mini = document.querySelector(".display_mini");

const number_elm = document.querySelectorAll(".number_btn");
const op = document.querySelectorAll(".op");
const equal_btn = document.querySelector(".result_btn");

const clear_btn = document.querySelector(".clear_all");
const del_btn = document.querySelector(".del");

// variable

let disp_t = "";
let disp_m = "";
let result = null;
let last_op = "";
let have_dot = "";


// taking input from number

number_elm.forEach( number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === "." && !have_dot){
            have_dot = true;
        }
        else if(e.target.innerText === "." && have_dot){
            return;
        }
        disp_m += e.target.innerText;
        disp_main.innerText = disp_m;
    });
});


// mathemetical operations

op.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!disp_m) result;
        have_dot = false;

        const op_name = e.target.innerText;
        if(disp_t && disp_m && last_op){
            math_op();
        }
        else{
            result = parseFloat(disp_m);
        }
        clearVar(op_name);
        last_op = op_name;
        console.log(result);
    })
});

//functions

function clearVar(name= ""){
    disp_t += disp_m+ ' ' + name + ' ';
    disp_tmp.innerText = disp_t;
    disp_main.innerText = "";
    disp_m = "";
    disp_mini.innerText = result;
}

function math_op(){
    if(last_op === 'X'){
        result = parseFloat(result) * parseFloat(disp_m);
    }
    else if(last_op === '+'){
        result = parseFloat(result) + parseFloat(disp_m);
    }
    else if(last_op === '-'){
        result = parseFloat(result) - parseFloat(disp_m);
    }
    else if(last_op === '/'){
        result = parseFloat(result) / parseFloat(disp_m);
    }
    if(last_op === '%'){
        result = parseFloat(result) % parseFloat(disp_m);
    }
}

// equal button

equal_btn.addEventListener('click', (e) => {
    if( !disp_t || !disp_m){
        return;
    }
    have_dot = false;
    math_op();
    clearVar();
    disp_main.innerText = result;
    disp_mini.innerText = '';
    disp_tmp.innerText = '';
    disp_m = result;
    disp_t = '';
});

//  clear all button

clear_btn.addEventListener('click', (e) => {
    disp_main.innerText = "";
    disp_mini.innerText = "";
    disp_tmp.innerText = "";
    disp_m = "";
    disp_t = "";
    result = "";
});

// delete button

del_btn.addEventListener('click', (e) =>{
    disp_main.innerText = "";
    disp_m = "";
});


// we can operate with our keyboard

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9'
    ){
        click_button_elm(e.key);
    }
    else if(
        e.key === "*" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "/"
    ){
        click_op_button(e.key);
    }

    // fixing an issue while typing * or multiplying symbol
    else if(
        e.key === "*"
    ){
        click_op_button('x');
    }

    // enter key as equals

    else if(
        e.key == 'Enter' ||
        e.key === '='
    ){
        clcik_equal_button(e.key);
    }
});

// function to input the number as we have typed in our keybaord

function click_button_elm(key){
    number_elm.forEach( button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

// function to input the operator as we have typed in our keybaord

function click_op_button(key){
    op.forEach( button => {
        if(button.innerText === key){
            button.click();
        }
    })   
}

function clcik_equal_button(){
    equal_btn.click();
}