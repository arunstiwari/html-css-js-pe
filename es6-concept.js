const multiply = (n, m) => n *m;

const curriedMultiply = n => m => n * m;

console.log(multiply(4,5));

let triple =  curriedMultiply(4);

console.log(triple(5));
console.log(curriedMultiply(5)(4));

// let a,b;
[b,a, ...c] = [10,20,30,40,50]; //destructuring the array
console.log(a);
console.log(b);
console.log(c);

function method1 (a, b, ...c){

}

method1(3,4,5,6,7,8,9);
let points = {x:0, y:0};
let dimensions = {width:10, lenght:20};

let rect = {...points, ...dimensions};
