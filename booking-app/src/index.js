import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SayHello from "./example/SayHello";
import UserApp from "./example/UserApp";
import Counter from "./example/Counter";
import UserFormUncontrolled from "./example/UserFormUncontrolled";
import CounterApp from "./example/CounterApp";
import Form from "./example/Form";
import FormWithValidation from "./example/FormWithValidation";
import {Provider} from "react-redux";
import store from "./example/store";
import CounterReduxApp from "./example/CounterReduxApp";
import Main from "./example/Main";

ReactDOM.render(
  // <React.StrictMode>
    <App />
  //   {/*  <SayHello />*/}
  //   {/*  <UserApp />*/}
  //   {/*  <Counter />*/}
  //   {/*  <UserFormUncontrolled />*/}
  //   {/*  <CounterApp />*/}
  //   {/*  <Form />*/}
  //     <FormWithValidation />
  // </React.StrictMode>
  //   <Provider store={store}>
  //       <CounterReduxApp />
  //   </Provider>
  //   <Main />
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
