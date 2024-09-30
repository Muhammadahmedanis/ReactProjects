import React from "react";
function AmountBox(){
    return(
        <div className="my-2">
            <p className="font-bold">YOUR BALANCE</p>
            <p className="text-2xl font-extrabold">12000 RS</p>
            <div className="flex justify-center my-2">
                <div className="w-36 h-28 border-black border-2 rounded pt-6">
                    <p className="font-extrabold text-xl">INCOME</p>
                    <p className="font-semibold text-green-500">1200 RS</p>
                </div>
                <div className="w-36 h-28 border-black border-2 rounded pt-6">
                <p className="font-extrabold text-xl">EXPENSE</p>
                <p className="font-semibold text-red-500">1200 RS</p>
                </div>
            </div>
        </div>
    )
}
export default AmountBox;