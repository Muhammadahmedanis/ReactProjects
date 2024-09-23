import { useState } from 'react'
import Nav from './Components/Nav'
import Form from './Components/Form'
import PackingList from './Components/PackingList'
import Stats from './components/Stats'
// import './App.css'

function App() {
  const[itemList, setItemList] = useState([]);

  return (
    <>
    {/* nav component */}
    <Nav />

    {/* Form Components */}
    <Form itemList={itemList} setItemList={setItemList}/>

    {/* PackingList */}
    <PackingList itemList={itemList} setItemList={setItemList}/>

    {/* Stats */}
    <Stats />

    </>
  )
}

export default App