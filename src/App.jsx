import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/Home.jsx"
import Explorer from "./components/Explorer.jsx"
import SideBar from "./components/SideBar.jsx"
import Skills from "./components/Skills.jsx"
import Experience from "./components/Experience.jsx"
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import { useState } from "react"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={
        <>
          <Explorer />
          <Home />
        </>
      } />
      <Route path="/skills" element={
        <>
          <Explorer />
          <Skills />
        </>
      } />
      <Route path="/projects" element={
        <>
          <Explorer />
          <Projects />
        </>
      } />
      <Route path="/exp" element={
        <>
          <Explorer />
          <Experience />
        </>
      } />
      <Route path="/about" element={
        <>
          <Explorer />
          <About />
        </>
      } />
    </Route>

  )
)



function App() {

  const [menuActive, setMenuActive] = useState(true)

  function handleMenu() {
    setMenuActive(!menuActive)
  }


  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className=" bg-[#323233] text-white p-3 w-full flex">
        <svg onClick={handleMenu} className="h-5 w-5 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ADADAD" stroke="currentColor" d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" /></svg>
        <h1 className="mt-0.5 text-[#ADADAD] font-bold">Portfolio - Devam Pandey</h1>
      </div>
      <div className="h-full flex overflow-hidden">
        <SideBar menuActive={menuActive} />
        <div className=" flex w-full h-full overflow-hidden">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>

  )
}

export default App
