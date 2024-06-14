import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div style={{textAlign:"center"}}>
        {count}
        <br/>
        <IncButton diff={1} val={count} setVal={setCount} label='増やす'/>
        <IncButton diff={-1} val={count} setVal={setCount} label='減らす'/>
      </div>
    </>
  )
}


export default App

const IncButton=({ diff,val,setVal,label }:{diff:number,val:number,setVal:React.Dispatch<React.SetStateAction<number>>,label:string})=> {
  return (
    <>
        <button onClick={()=>setVal(val+diff)}>{label}</button>
    </>
  )
}