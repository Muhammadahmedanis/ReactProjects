import { useState } from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Stats from './components/Stats';

function App() {
  const[itemList, setItemList] = useState([]);
  const[checkedItems, setCheckedItems] = useState([]);
  const[sortList, setSortList] = useState();

  return (
    <>
    <div className='m-2'>
      {/* Nav component */}
      <Nav />
      
      {/* Form Components */}
      <Form itemList={itemList} setItemList={setItemList} setSortList={setSortList} />

      {/* PackingList */}
      <PackingList itemList={itemList} setItemList={setItemList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} sortList={sortList}/>

      {/* Stats */}
      <Stats itemList={itemList} checkedItems={checkedItems}/>
    </div>
    </>
  );
}

export default App;