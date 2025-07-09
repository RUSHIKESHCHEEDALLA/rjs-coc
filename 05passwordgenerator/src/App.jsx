import './App.css'
import { useState,useCallback ,useEffect, useRef} from 'react';

function App() {
  const [len,setLen]=useState(8);
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false);
  const [pass,setPass]=useState("");
  //useRef hook
  const passRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{ passRef.current?.select(); passRef.current?.setSelectionRange(0,len); window.navigator.clipboard.writeText(pass)},[pass])

  const passGenerator = useCallback(()=>{
    let ans = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str+= "!@#$%^&*()_+{}[]~`"
    for (let i = 1; i <= len; i++) {
      let id= Math.floor(Math.random() * str.length + 1)
      ans += str.charAt(id)
    }
    setPass(ans)
  },[len,number,setPass,char])
  useEffect(()=>{passGenerator()},[len,number,char,passGenerator])
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
        style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
    <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ' >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input type="text" value={pass} className='outline-none w-full py-1 px-3 ' placeholder='password'  readOnly ref={passRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  ' onClick={copyPasswordToClipboard} >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={100} value={len} className='cursor-pointer' onChange={(e)=>{setLen(e.target.value)}}/>
          <label >Length {len} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={setNumber} id='numberInput' onChange={()=>{setNumber((prev)=> !prev)}} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={setChar} id='charInput' onChange={()=>{setChar((prev)=> !prev)}} />
          <label htmlFor='charInput' >Character</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
