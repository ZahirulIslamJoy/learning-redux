function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex border border-purple-300 p-6 bg-slate-200 ">
          <button className="px-3 py-2 p-10 bg-green-600 rounded-xl">
            Increment
          </button>
          <h1 className="text-3xl mx-10">0</h1>
          <button className="px-3 py-2 p-10 bg-red-600 rounded-xl">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
