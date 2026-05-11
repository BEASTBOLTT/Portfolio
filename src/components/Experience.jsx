import { NavLink } from "react-router-dom"

const Experience = () => {
  return (
    <div className="flex flex-1  flex-col">
      <div className=" bg-[#252526] h-10">
        <div className='bg-[#1E1E1E] w-fit h-10 flex'>
          <div className="text-[#ADADAD] p-2 pr-1 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="25" viewBox="0 0 128 128"><g fill="#40c0e7"><path d="M68.97 31.66c-.64-.49-1.38-.85-2.24-1.05c-.85-.19-1.75-.3-2.72-.3s-1.88.1-2.74.3c-.87.19-1.61.55-2.26 1.05c-.64.49-1.14 1.14-1.51 1.95c-.36.81-.55 1.83-.55 3.04c0 1.19.19 2.19.55 3.02c.37.81.87 1.48 1.51 1.97s1.39.85 2.26 1.06c.86.21 1.77.32 2.74.32c.96 0 1.87-.11 2.72-.32c.86-.21 1.6-.57 2.24-1.06s1.15-1.16 1.53-1.97c.38-.83.57-1.83.57-3.02c0-1.22-.19-2.24-.57-3.04q-.57-1.215-1.53-1.95M57.52 48.94h12.97v47.51H57.52z" /><path d="M64 .41C28.93.41.41 28.93.41 64c0 35.06 28.52 63.59 63.58 63.59S127.58 99.07 127.58 64C127.59 28.93 99.06.41 64 .41m0 118C34 118.41 9.6 94 9.6 64S34 9.59 64 9.59S118.41 34 118.41 64.01C118.4 94 93.99 118.41 64 118.41" /></g></svg>
            Experience.md
          </div>
          <NavLink to='/'>
            <svg className='mt-3.5 mr-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ADADAD" stroke="#ADADAD" d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5" /></svg>
          </NavLink>
        </div>

      </div>
      <div className="bg-[#1E1E1E] flex-1 text-white p-5 pl-9 overflow-y-auto no-scrollbar">
        <div>
          <span className="pl-3">1</span>
          <span className="text-[#6796E6] font-bold pl-8"># Experience</span>
        </div>
        <p className="pl-3">2</p>
        <div className="flex">
          <span className="pl-3">3</span>
          <span className="text-[#6796E6] font-bold pl-8 flex-1">## 🎯 Team Lead – Evenza Project Exhibition </span>
        </div>
        <div className="flex">
          <span className="pl-3">4</span>
          <span className="font-bold pl-8 flex-1">**VIT Bhopal | Jan 2025 – Mar 2025**</span>
        </div>
        <p className="pl-3">5</p>
        <div className="flex">
          <span className="pl-3">6</span>
          <span className=" pl-8">Led a team of 5 members to design and present a frontend web application. Managed development workflow, coordinated tasks, and improved UI usability through iterative development.</span>
        </div>
        <p className="pl-3">7</p>
        <div>
          <span className="pl-3">8</span>
          <span className="font-bold pl-8"> - - - </span>
        </div>
        <p className="pl-3">9</p>
        <div className="flex">
          <span className="pl-2">10</span>
          <span className="text-[#6796E6] font-bold pl-7 flex-1">## Team Lead – Blockchain E-Voting Project  </span>
        </div>
        <div className="flex">
          <span className="pl-2">11</span>
          <span className="font-bold pl-7">**VIT Bhopal | Jul 2025 – Apr 2026**</span>
        </div>
        <p className="pl-2">12</p>
        <div className="flex">
          <span className="pl-2">13</span>
          <span className="pl-7 flex-1">Led a team of 6 members to design and develop a blockchain-based e-voting system. Coordinated project planning, task allocation, and implementation while focusing on building a secure and transparent voting mechanism using decentralized concepts.</span>
        </div>
        <p className="pl-2">14</p>
        <div>
          <span className="pl-2">15</span>
          <span className="font-bold pl-7"> - - - </span>
        </div>
        <p className="pl-2">16</p>
        <div className="flex">
          <span className="pl-2">17</span>
          <span className="text-[#6796E6] font-bold pl-7 flex-1">## 📌 Current Status</span>
        </div>
        <p className="pl-2">18</p>
        <div className="flex">
          <span className="pl-2">19</span>
          <span className=" pl-7 flex-1">I’m currently looking for internship opportunities. Let’s connect!</span>
        </div>
        <p className="pl-2">20</p>
      </div>
    </div>
  )
}

export default Experience
