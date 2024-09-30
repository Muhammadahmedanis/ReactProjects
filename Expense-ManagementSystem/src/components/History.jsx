import React from "react";
function History(){
    return(
        <div className="my-2">
            <p className="text-2xl font-extrabold rounded my-2">History</p>
            <ul className="flex justify-center gap-2">
                <li className="flex justify-center border-2 w-52 rounded border-blue-400 shadow-lg items-center">
                    <p className=" px-2 py-1 font-bold text-xl">Glossory</p>
                    <p className=" px-2 py-1">1500 PKR</p>
                </li>
                <button className="border-blue-400 border-2 w-auto px-3 py-0 rounded font-semibold">Delete</button>
                <button className="border-blue-400 border-2 w-auto px-3 py-0 rounded font-semibold">Update</button>
            </ul>
        </div>
    )
}
export default History;