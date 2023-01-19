import './ExpenseItem.css';
function ExpenseItem(props){
const LocationOfExpenditure ="LocationOfExpenditure"
    return (
        <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
        <h2>{props.title} {props.loe}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
    )
	
}
export default ExpenseItem