import React from "react";
function AmountBox({transaction}){
    let totalIncome = transaction.reduce((acc, currVal) => {return currVal.type == "income" ? acc + Number(currVal.amount) : acc}, 0);
    let totalExpense = transaction.reduce((acc, currVal) => {return currVal.type == "expense" ? acc + Number(currVal.amount): acc}, 0);
    let totalBalance = totalIncome - totalExpense;
    return(
        <div className="my-2">
            <p className="font-sans text-xl">YOUR BALANCE</p>
            <p className="text-2xl font-extrabold">{totalBalance} PKR</p>
            <div className="flex justify-center my-2">
                <div className="w-36 h-28 border-black border-2 rounded pt-6">
                    <p className="font-extrabold text-2xl">INCOME</p>
                    <p className="font-semibold text-green-500 text-xl">{totalIncome} RS</p>
                </div>
                <div className="w-36 h-28 border-black border-2 rounded pt-6">
                <p className="font-extrabold text-2xl">EXPENSE</p>
                <p className="font-semibold text-red-500 text-xl">{totalExpense} RS</p>
                </div>
            </div>
        </div>
    )
}
export default AmountBox;