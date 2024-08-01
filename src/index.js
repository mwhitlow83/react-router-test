import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider} from 'react-redux';



const initialState = {
  expenses: [],
  nextExpenseID: 1
}



function addExpenseReducer(state = initialState, action){
 if (action.type === 'ADD_EXPENSE'){
  const newExpenses = [
    ...state.expenses,
   {...action.payload, id: state.nextExpenseID}

  ];
  return {
    expenses: newExpenses,
    nextExpenseID: state.nextExpenseID + 1
  }
 }
 return state;
}



const reducer = (state = initialState, action) => state;


const action = {
  type: 'ADD_EXPENSE',
  payload: {
    itemName: 'Printer',
    itemPrice: 19800,
    quantity: 1
  }
}



const store = configureStore({ reducer: addExpenseReducer });
console.log(store);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
store.dispatch({
  type: 'ADD_EXPENSE',
  payload: {
    itemName: 'Expensive collector card',
    itemPrice: 25519800,
    quantity: 1
  }
});
console.log(store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
