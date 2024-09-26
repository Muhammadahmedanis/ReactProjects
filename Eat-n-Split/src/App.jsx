import { useState } from 'react';
// import './App.css'
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import SplitBill from './Components/SplitBill';

function App() {
  const[openAddFriend, setOpenAddFriend] = useState(false);
  const[selectFriend, setSelectFriend] = useState(null);
  const friedsList = [
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Ali",
      payment: 0,
      amountTake: "",
      myExpen: 10,
    },
    {
      img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid",
      name: "Hammad",
      payment: 0,
      amountTake: "",
      myExpen: 0,
    },
    {
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid",
      name: "Aleeza",
      payment: 0,
      amountTake: "",
      myExpen: 0,
    }
  ]
  const[friends, setFriends] = useState(friedsList);

  const openHandler = () => {
    setOpenAddFriend(true);
  }
  const closeHandler = () => {
    setOpenAddFriend(false);
  }

  return (
    <>
    <div className='flex justify-center gap-10 flex-wrap mt-24'>

      <div className='flex justify-center px-2 flex-col'>
        <div className='mx-auto max-w-96 p-3 h-auto  bg-orange-200 rounded-md'>
          <Friends friends={friends} setSelectFriend={setSelectFriend}/>
        </div>

        <div className='mx-auto'>
          <button onClick={openHandler} type="button" className="items-center px-7 py-2 my-2 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none dark:focus:ring-orange-600"> Add Friend </button>
        </div>


        {openAddFriend && 
          <div>
            <div className='mx-auto max-w-96 my-1 p-4 min-h-36 bg-orange-200 rounded-md'>
              <AddFriend friends={friends} setFriends={setFriends} />
            </div>
            <div className='mx-auto text-center'>
                <button onClick={closeHandler} type="button" className="items-center px-7 py-2 my-1 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-600"> Close </button>
            </div>  
          </div>
        }

        </div>

        <SplitBill friends={friends} setFriends={setFriends} selectFriend={selectFriend}/>

    </div>
    </>
  );
}

export default App;