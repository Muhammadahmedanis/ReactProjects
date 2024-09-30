import React from "react";

function Form({amount, setAmount, type, setType, transaction, setTransaction, expenseCateg, setExpenseCateg, changeBtn, ids, setChangeBtn}){
  const handleSubmit = () => {
    setTransaction([...transaction, {amount, type, expenseCateg}])
    setAmount(0);
    setExpenseCateg('');
    setType('income');
  }

  const handleUpdate = () => {
    const oldTransaction = transaction.filter((_, id) => ids == id);
    setTransaction([...oldTransaction, {amount, type, expenseCateg}]);
    setAmount(0);
    setType('income');
    setExpenseCateg('');
    setChangeBtn(false);
  }

  return(
    <div className="flex justify-center gap-2">
      <input style={{backgroundColor: "transparent"}} className="border-2 rounded py-1 border-black ps-2" placeholder="Enter Amount" 
      value={amount} onChange={(e) => setAmount(e.target.value)}  type="number"  />
      <input style={{backgroundColor: "transparent"}} className={` ${type == 'expense' ? 'block' : 'hidden'} border-2 rounded py-1 border-black ps-2`}     
      value={expenseCateg} onChange={(e) => setExpenseCateg(e.target.value)}  placeholder="Enter Category" type="text" />
      <select style={{backgroundColor: "transparent"}} value={type} onChange={(e) => setType(e.target.value)} className="border-2 rounded-md px-5 py-1 border-black" name="" id="">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      {
        changeBtn ? 
        (<button onClick={handleUpdate} className="border-2 px-5 py-1 border-black rounded-md">Update</button>) : 
        (<button onClick={handleSubmit} className="border-2 px-5 py-1 border-black rounded-md">Submit</button>)
      }
    </div>
  )
}
export default Form