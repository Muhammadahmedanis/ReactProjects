import { useState } from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Stats from './components/Stats';

function App() {
  // const [itemList, setItemList] = useState([]);
  // const [checkedItems, setCheckedItems] = useState([]); // Track checked items

  const[itemList, setItemList] = useState([]);
  const[checkedItems, setCheckedItems] = useState([]);

  return (
    <>
      Nav component
      <Nav />
      
      {/* Form Components */}
      <Form itemList={itemList} setItemList={setItemList} />

      {/* PackingList */}
      <PackingList itemList={itemList} setItemList={setItemList} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>

      {/* Stats */}
      <Stats itemList={itemList} checkedItems={checkedItems}/>
    </>
  );
}

export default App;