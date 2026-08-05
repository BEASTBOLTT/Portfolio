import { NavLink } from "react-router-dom"


const Skills = () => {
  return (
    <div className="flex flex-1  flex-col">
      <div className=" bg-[#252526] h-10">
        <div className='bg-[#1E1E1E] w-fit h-10 flex'>
          <div className="text-[#ADADAD] p-2 pr-1 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" height="25" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z" /></svg>
            Skills.ts
          </div>
          <NavLink to='/'>
            <svg className='mt-3.5 mr-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ADADAD" stroke="#ADADAD" d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5" /></svg>
          </NavLink>
        </div>

      </div>
      <div className="bg-[#1E1E1E] flex-1 text-white p-5 pl-9 overflow-y-auto no-scrollbar">
        <p className="pl-3">1</p>
        <p className="pl-3">2</p>
        <div className="flex">
          <span className="pl-3">3</span>
          <div className="pl-8 flex-1">
          <span className="text-[#569CD6]">type</span>
          <span className="text-[#4EC9B0] pl-2">SkillCategory</span>
          <span className="text-[#D4D4D4] pl-2">=</span>
          <span className="text-[#E0BD00] pl-2">{"{"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-3">4</span>
          <div className="pl-16 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#4EC9B0] pl-2">string</span>
          <span className="text-[#D4D4D4] ">;</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-3">5</span>
          <div className="pl-16 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#4EC9B0] pl-2">string</span>
          <span className="text-[#C586C0]">[ ]</span>
          <span className="text-[#D4D4D4] ">;</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-3">6</span>
          <div className="pl-8 flex-1">
          <span className="text-[#E0BD00]">{"}"}</span>
          <span className="text-[#D4D4D4] ">;</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-3">7</span>
          <div className="pl-8 flex-1">
          <span className="text-[#569CD6]">const</span>
          <span className="text-[#9CDCFE] pl-2">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#4EC9B0] pl-2">SkillCategory</span>
          <span className="text-[#E0BD00]">{"[ ]"}</span>
          <span className="text-[#D4D4D4] pl-2">=</span>
          <span className="text-[#E0BD00] pl-2">{"["}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-3">8</span>
          <span className="text-[#C586C0] pl-16 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-3">9</span>
          <div className="pl-24 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Languages"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">10</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"C++"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Python"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"JavaScript"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Java"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">11</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">12</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">13</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Frontend"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">14</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"React.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"HTML"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"CSS3"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Tailwind CSS"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">15</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">16</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">17</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Core Concepts"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">18</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">19</span>
          <span className="text-[#CE9178] pl-31 flex-1">"Data Structures & Algorithms"<span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-2">20</span>
          <span className="text-[#CE9178] pl-31 flex-1">"Object-Oriented Programming"<span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-2">21</span>
          <span className="text-[#CE9178] pl-31 flex-1">"Responsive Design"<span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-2">22</span>
          <span className="text-[#CE9178] pl-31 flex-1">"UI/UX Principles"<span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-2">23</span>
          <span className="text-[#569CD6] pl-23 flex-1">{"]"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">24</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">25</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">26</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Tools & Platforms"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">27</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"Git & GitHub"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"VS Code"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Vercel"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Render"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">28</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">29</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">30</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Backend"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">31</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"Node.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Express.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"MongoDB"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"REST APIs"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">32</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">33</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">34</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Full Stack"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">35</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"MERN Stack"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"API Integration"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"JWT Auth"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Deployment"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">36</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">37</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">38</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">title</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2">"Currently Exploring"</span>
          <span className="text-[#D4D4D4] ">,</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">39</span>
          <div className="pl-23 flex-1">
          <span className="text-[#9CDCFE]">skills</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"Python"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"NumPy"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Pandas"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Machine Learning"</span>
          <span className="text-[#569CD6]">{"]"}</span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-2">40</span>
          <span className="text-[#C586C0] pl-15 flex-1">{"}"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">41</span>
          <div className="pl-8 flex-1">
          <span className="text-[#E0BD00]">{"]"}</span>
          <span className="text-[#D4D4D4] ">;</span>
          </div>
        </div>
        <p className="pl-2">42</p>
        <div className="flex">
          <span className="pl-2">43</span>
          <div className="pl-7 flex-1">
          <span className="text-[#C586C0]">export default</span>
          <span className="text-[#9CDCFE] pl-2">Skills</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
