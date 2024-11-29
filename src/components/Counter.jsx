//rafce
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} =  useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      //dispatch action 
      dispatch(incrementByAmount(+amount))
    }else{
      alert("Please enter a valid amount!!!")
    }
  }

  return (
    <div className='border rounded p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div style={{width:'500px'}} className="d-flex justify-content-between my-5">
            <button onClick={()=>dispatch(decrement())} className="btn btn-warning">Decrement</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
            <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Enter the amount to be incremented' className="form-control" />
            <button onClick={handleIncrementAmount} className="btn btn-primary ms-3">Increment By Amount</button>
        </div>
    </div>
  )
}

export default Counter