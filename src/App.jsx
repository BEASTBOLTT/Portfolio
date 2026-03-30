
import Display from "./components/Display.jsx"
import Explorer from "./components/Explorer.jsx"
import SideBar from "./components/SideBar.jsx"


function App() {


  return (
    <div>
      <div className=" bg-[#323233] text-white p-3 flex">
        <svg className="h-5 w-5 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ADADAD" stroke="currentColor"  d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" /></svg>
        <h1 className="mt-0.5 text-[#ADADAD] font-bold">Portfolio - Devam Pandey</h1>
      </div>
      <div className="flex">
        <SideBar />
        <div className=" flex w-full">
          <Explorer />
          <Display />
        </div>
      </div>
    </div>

  )
}

export default App
