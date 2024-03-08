import './ExpenseDetails.css'
import React from 'react';
function ExpenseDetails(props){
    
    return(
        <div className='details'> 
                <div className='detail-div1'>{props.title}</div>
                <div className='detail-div2'> $ {props.amount}</div>
            </div>
    )
}
export default ExpenseDetails;