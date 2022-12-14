import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const submit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random * 1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  

  return (
    <>
      <h3>Add new Transaction</h3>
      <form id="form" onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount (Negative - Expense, Positive - Income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction