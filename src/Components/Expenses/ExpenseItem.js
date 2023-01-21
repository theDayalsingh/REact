import React,{useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Expenses from './Expenses';
const ExpenseItem=(props)=>{
    const [title,setTitle]=useState(props.title)
    const clickHandler=()=>{
        setTitle('Updated')
        console.log(title)
    }
    const [amount,setAmount]=useState(props.amount)
    const clickHandleramount=()=>{
        setAmount('100')
        console.log(amount)
    }
    // const DeleteExpense=()=>{
    //     const nodeDEl=document.getElementById(props.title).parentElement
    //     nodeDEl.parentElement.removeChild(nodeDEl)        
    // }/* Comment here /
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={clickHandleramount}>ChangeAmount</button>
        </Card>
    )
	
}
export default ExpenseItem