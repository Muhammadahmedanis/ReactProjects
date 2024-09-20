import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState('');
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);

  const passRef = useRef(null);

  let generatePass = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+= "0123456789";
    if(sym) str+= '!@#$%^&*()';
    for(let i = 0; i < length; i++){
      let getPass = Math.floor(Math.random() * str.length);
      pass += str.charAt(getPass); 
    }
    setPass(pass);
  }, [length, num, sym, setPass])
  
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  useEffect(() => {
    generatePass()
  }, [length, num, sym])

  return (
    <>
        <div className='w-full max-w-md mx-auto rounded-lg bg-gray-600 px-4 py-3 my-4 shadow-md'>
          <h1 className='text-white text-center text-4xl my-3'>Password Generator</h1>
          <div className='flex mb-4 overflow-hidden rounded-lg'>
            <input className='outline-none w-full py-1 px-3' type="text" ref={passRef} readOnly value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={copyPassword} className='outline-none bg-blue-500 text-white px-3 shrink-0 py-2'>Copy</button>
          </div>
          <div className='flex gap-x-2'>
            <div className='flex items-center'>
              <input min={8} max={20} onChange={(e) => setLength(e.target.value)} type="range" />
              <label className='text-orange-400 px-2'>Length({length})</label>
            </div>
            <div className='flex items-center text-orange-400'> 
              <input type="checkbox" onChange={() => setNum((prev) => !prev)} />
              <label>Number</label>
            </div>
            <div className='flex items-center text-orange-400'> 
              <input type="checkbox" onChange={() => setSym((prev) => !prev)} />
              <label>Symbol</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
