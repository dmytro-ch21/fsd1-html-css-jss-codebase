console.log('Works!');

const x = 100;
const y = 200;

function getSum(n1, n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 33);

console.log(sum1);
console.log(sum2);


function one(){
    console.log('One');
    two();
}
function two(){
    console.log('One');
    three();
}
function three(){
    console.log('One');
}

one();