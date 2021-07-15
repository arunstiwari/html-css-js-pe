const multiply = (n, m) => n *m;

const curriedMultiply = n => m => n * m;

console.log(multiply(4,5));

let triple =  curriedMultiply(4);

console.log(triple(5));
console.log(curriedMultiply(5)(4));

// let a,b;
[b,a,...c ] = [10,20,30,40,50]; //destructuring the array
console.log(a);
console.log(b);
console.log(c);

function method1 (a, b, ...c){

}

method1(3,4,5,6,7,8,9);
let points = {x:0, y:0};
let dimensions = {width:10, lenght:20};

let rect = {...points, ...dimensions};

[a=5,taxRate=5.2] = [1];
console.log(a);
console.log(b);

function  f(){
    return [5,4];
}

[a,b] = f();
[,,b] = [1,2,3];

//Destructuring objects
var language = 'JavaScript';
var extension = '.js';
var path = '/Users/arunstiwari';

var file = {
    language: language,
    extension: extension,
    path: path
}

console.log('file = ',file);


var user = {
    name: 'name-1',
    age: 32,
    email: 'name-1@xyz.com',
    addresses: [
        {city: 'city-1', zipcode: 122001},
        {city: 'city-2', zipcode: 122002}
    ]
}


user.name;
user.age;

var {name, age} = user;
console.log('name1 = ',name);

var {addresses} = user;
console.log('addresses = ',user.addresses[0].city);

var {addresses: [{city:primarycity='city-3'}]} = user;

console.log('city -',primarycity)

var flights = [
    {source: 'New Delhi', destination: 'Mumbai'},
    {source: 'Kolkatta', destination: 'Varanasi'},
    {source: 'Chennai', destination: 'Singapore'}
]

for (let {source} of flights){
    console.log(source);
}


function u({name}){

    console.log(name);
}

u(user);
