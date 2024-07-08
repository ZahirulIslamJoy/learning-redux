import { decrement, increment, incrementbyValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hools";

function App() {
  const dispath = useAppDispatch();
  const {count}=useAppSelector(state=>state.counter)


  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex border border-purple-300 p-6 bg-slate-200 ">
          <button onClick={()=>dispath(increment())} className="px-3 py-2 p-10 bg-green-600 rounded-xl">
            Increment
          </button>
          <button onClick={()=>dispath(incrementbyValue(5))} className="px-3 py-2 p-10 bg-green-600 rounded-xl">
            Increment By 5
          </button>
          <h1 className="text-3xl mx-10">{count}</h1>
          <button onClick={()=>dispath(decrement())} className="px-3 py-2 p-10 bg-red-600 rounded-xl">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
