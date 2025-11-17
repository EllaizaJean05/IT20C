function sum(num1, num2){
    sum = num1 + num2;
    console.log(sum);
}
function diff(num1, num2){
    diff = num1 - num2;
    console.log(diff);
}
function prod(num1, num2){
    prod = num1 * num2;
    console.log(prod);
}


sum(2,3);
diff(5,3);
prod(11, 5);
quotient(6,3);

function quotient(num1,num2){

    if(num2 === 0){
        console.log("Cannot devide by zero");
    }else{
        quotient =num1 / num2;
        console.log(quotient);
    }
}

