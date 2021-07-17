import './ExpenseItem.css';
import Date from './date__component/Date';

function ExpenseItem(props) {



  return (
    <div className="expense-item">
      {/* <div>{expenseDate.toDateString()}</div> */}
      <div>
        <Date date={props.date}></Date>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
