import React from 'react'

function Friends({friends, setSelectFriend}) {
  return (
    friends.map((friendsDetail, ind) => (<Freind key={ind} friendsDetail={friendsDetail} setSelectFriend={setSelectFriend}/>))
  )
}
export default Friends;

const Freind = ({friendsDetail, setSelectFriend}) => {
  const selectHandler = () => {
    setSelectFriend(friendsDetail);
  }
  return (
    <div>

    <div className ="flex items-center justify-between my-4 gap-8">
      <div className='flex gap-3'>
        <img className="w-12 h-12 rounded-full" src={friendsDetail.img} alt="not found"/>
        <div className="font-medium dark:text-white">
            <div>{friendsDetail.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400"> {friendsDetail.payment ? `You owe ${friendsDetail.name} ${friendsDetail.payment}$`: `You and ${friendsDetail.name} are even`} </div>
        </div>
      </div>
        <div>
        <button onClick={selectHandler} type="button" className="inline-flex items-center px-9 py-2 mt-2 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-600"> Select </button>
        </div>
    </div>

</div>
  )
}