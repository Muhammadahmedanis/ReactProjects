import React, {useCallback} from 'react'

const Button = function Button({pass, passRef}) {
  console.log("ok");
  const copyPassword = () => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(pass);
  }
  return (
    <button onClick={copyPassword} className='outline-none bg-blue-500 text-white px-3 shrink-0 py-2'>Copy</button>
  )
}

export default Button