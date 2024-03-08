import React from 'react';
import './ExpenseItem.css'
import ExpenseDetails from './ExpenseDetails.js';
function ExpenseItem(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return(
                <div className='total'>
                <div className='Date-div'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
                </div>
                <div>
                <ExpenseDetails title={props.title} amount={props.amount} />
                </div>
            </div>
    );
}

export default ExpenseItem;