
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/features/store";
import { decrement, increment, incrementBy5 } from "./redux/features/counter/counterSlice";

function App() {
  
  const {value}= useSelector((state : RootState)=>state.counter)
  const dispatch = useDispatch();


  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-3 border border-purple-300 p-6 bg-slate-200 ">
          <button onClick={()=>dispatch(increment())} className="px-3 py-2 p-10 bg-green-600 rounded-xl">
            Increment
          </button>
          <button onClick={()=>dispatch(incrementBy5(5))} className="px-3 py-2 p-10 bg-green-600 rounded-xl">
            Increment By 5
          </button>
          <h1 className="text-3xl mx-10">{value}</h1>
          <button onClick={()=>dispatch(decrement())}  className="px-3 py-2 p-10 bg-red-600 rounded-xl">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
