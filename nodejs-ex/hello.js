const{interval, Observable} = require("rxjs");

const { take } = require('rxjs/operators');

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));

const names = ["Name1", "Name2", "Name3", "Name4"];
let name$ = Observable.create(names);
const xyz = interval(1000).pipe(name$);

xyz.subscribe(x => console.log(' Next: ', x));