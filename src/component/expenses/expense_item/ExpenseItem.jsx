import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";

const ExpenseItem = (props = {}) => {
//    let { 
//           date = new Date(), 
//           amount = 0,
//         } = props;

      const [title, setTitle] =  useState(props.title) // [ title, setTitle]
      const [date, setDate] =  useState(props.date) // [ title, setTitle]
      const [amount, setAmount] =  useState(props.amount) // [ title, setTitle]
   // let title = props.title;

    // function onChangeClick (event) {
    //     console.log('ExpenseItemExpenseItemExpenseItem');
    //     setTitle('updated');
    //     setAmount(0);
    //     setDate(new Date());
    //     console.log(title);
    // }
   return(
       <div className="expense-item">
           <ExpenseDate date={date}/>
           <div className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price">
                  ${amount}
                </div>
           </div>
           {/* <button onClick={onChangeClick}>Change</button> */}
       </div>
   )
}

export default ExpenseItem;