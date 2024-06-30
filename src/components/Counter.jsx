import { useContext, useEffect, useState } from "react";
 import { CounterContext } from "../contexts/count";
 import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../reducers/counterSlice";

function Counter(){
 
 
// const {counter,setCounter}=useContext(CounterContext);
const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()
// function increment(){
    
//     setCounter(counter+1);
  
// }

// function increment(){
//     setCounter((pre)=>pre+1);
//     setCounter((pre)=>pre+2);

// }

    const [val,setVal]=useState(0);
const handlevalchange=(e)=>{
    setVal(e.target.value);
}


function handleIncrement(){
   if(val != 0){
        dispatch(incrementByValue(parseInt(val)))
    }else{
  dispatch(increment())
}
}
    return (
        <div>
            <h1>hello</h1>
            {/* arrow function */}
            
            {/* <button onClick={()=>setCounter(counter+1)}>++</button> */}
            {/* <CounterContext.Provider value={{counter:counter,setCounter:setCounter}}> */}
            <button onClick={handleIncrement} className="btn btn-danger">increment</button>
            <input type="number" value={val} onChange={handlevalchange}></input> 

            <button onClick={()=>dispatch(decrement())} className="btn btn-danger">decrement</button>
            {/* </CounterContext.Provider> */}

            <h3>{count}</h3>
        </div>
    )
}
export default Counter;