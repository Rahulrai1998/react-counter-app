import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost'
import {gql} from "apollo-boost";


const client = new ApolloClient({
  uri:'https://48p1r2roz4.sse.codesandbox.io'
})

client.query({
  query:gql`
  {
    rates(currency : "USD"){
      currency
    }
  }`
}).then(result=> console.log(result))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
