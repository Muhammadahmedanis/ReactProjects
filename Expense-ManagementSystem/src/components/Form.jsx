import React from "react";

function Form(){
  return(
    <div className="flex justify-center gap-2">
      <input style={{backgroundColor: "transparent"}} className="border-2 rounded py-1 border-black ps-2" type="number" />
      <input style={{backgroundColor: "transparent"}} id="expenseName" className="border-2 rounded py-1 border-black ps-2" type="text" />
      <select style={{backgroundColor: "transparent"}} className="border-2 rounded-md px-5 py-1 border-black" name="" id="">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button className="border-2 px-5 py-1 border-black rounded-md">Submit</button>
    </div>
  )
}
export default Form