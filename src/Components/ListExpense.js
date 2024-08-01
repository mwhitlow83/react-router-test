import React from 'react';
import {useSelector} from 'react-redux';

export default function ListExpense(props) {
  const expenses = useSelector(state => state.expenses);

  const tableRows = expenses.map( expenses => (
 
    <tr>
      <td>{expenses.id}</td>
      <td>{expenses.itemName}</td>
      <td>{expenses.itemPrice}</td>
      <td>{expenses.quantity}</td>
      <td>{expenses.itemPrice*expenses.quantity} </td>
    </tr>
  ));

 // const expenseType = props.match.params.id ?? 'All';
    
  return (
    <div>
     <h2> List Expense </h2>
<table>
  <thead>
    <tr>
        <th>Id</th>
        <th>item Name</th>
        <th>Item Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
    {tableRows}
  </tbody>
</table>
    </div>
  )
}
