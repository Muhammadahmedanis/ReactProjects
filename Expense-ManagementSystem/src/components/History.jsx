import React from "react";
function History({transaction, setTransaction, setAmount, setExpenseCateg, setType, changeBtn, setChangeBtn, setIds}){

    const delHandler = (ind) => {
        const oldTransaction = transaction.filter((_, id) => ind != id);
        setTransaction(oldTransaction);
    }
    const editHandler = (ind) => {
        const oldTransaction = transaction[ind];
        setAmount(oldTransaction.amount);
        setType(oldTransaction.type);
        setExpenseCateg(oldTransaction.expenseCateg);
        setChangeBtn(true);
    }
    
    return(
        <>
            { 
                transaction.map((val, ind) => val.type === "expense" && <Lists changeBtn={changeBtn} setIds={ind} key={ind} val={val} ind={ind} delHandler={delHandler} editHandler={editHandler} /> )    
            }
        </>
    )
}
export default History;

const Lists = ({val, ind, delHandler, editHandler, changeBtn={changeBtn}}) => {
    return(
        <ul className="flex justify-center gap-2 my-4">
            <li className="flex justify-center border-2 w-52 rounded border-blue-400 shadow-lg items-center">
            <p className=" px-2 py-1 font-bold text-xl">{val.expenseCateg}</p>
            <p className=" px-2 py-1">{val.amount} PKR</p>
            </li>
            <button onClick={() => delHandler(ind)} className="border-blue-400 border-2 w-auto px-3 py-0 rounded font-semibold">Delete</button>
            <button onClick={() => editHandler(ind)} className={` ${changeBtn ? 'hidden' : 'block'} border-blue-400 border-2 w-auto px-3 py-0 rounded font-semibold`}>Edit</button>
        </ul>
    )
}