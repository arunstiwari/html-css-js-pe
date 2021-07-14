// const x = 1.0;

let x;
console.log(x);
x=0;//
x = 1.23;
x="Hello";

console.log(x);
x=false;
x=null;
console.log(x);
x = undefined;

//Object
let book = {
    name: 'Book-1',
    author: {
        name: 'Author-1',
        age: 35
    },
    getAuthor(){
        return this.author;
    }
}
console.log(JSON.stringify(book));
book.publisher ='TataMacgraw Hill';
// delete book.name;
console.log(book.getAuthor());

book.getName = function (){
    return this.name;
}


console.log(book.getName());
// console.log(book.name);
// console.log(book['name']);
// console.log(book.author.name);
//
// console.log(JSON.stringify(book));
//
// book.contents={};
// console.log(JSON.stringify(book));

// Array, Maps, List

let primes = [2,3,5,"Hello"];
primes[0];
primes.length

let books = [
    {x: 0, y:0},
    {x: 1, y:1},
]

console.log(books);
books.forEach(b => {
    console.log(b);
})

for (let i =0 ; i< books.length; i++){
    console.log(books[i])
}

let o = new Array();
o.push('abc');

let o1 = new Map();
let o2 = new Object();

class Book {
    constructor(name, age) {
        this.name =name;
        this.age = age;
    }
}

let b1 = new Book('abc', 23);

let target = {x:0, y:0};

let source = {z: 32, name: 23, y:4};
console.log(JSON.stringify(target));
// target = Object.assign(target, source);

target = {...target, ...source};
// console.log(target);

// for (let key of Object.keys(source)){
//     target[key]=source[key];
// }
console.log(JSON.stringify(target));
// console.log(o1.prototype);

console.log(JSON.stringify(book));
console.log(book.toString());

book.toString = function (){
    return `${this.name}, ${this.author.name}`
}

console.log(book.toString());
//Extending the objects

let book1 =  Object.create({name: 'ABC', author: {
    name: 'author-1'
    }});


/// Spread Operators  (rest operators) ...

let position = {x: 0, y: 1};
let dimensions = {width: 100, length : 200, ...position};

let rect = {...position,...dimensions};

// let rect = Object.assign(rect, position);
// rect = Object.assign(rect, dimensions);
