import React from 'react';
import './App.css';
import CounterApp from "./CounterApp";
import {interval, Observable} from "rxjs";

import { take } from 'rxjs/operators';

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));


function App() {
  return (
    <div className="App">
     <CounterApp />
    </div>
  );
}

export default App;
