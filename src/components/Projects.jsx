import { NavLink } from "react-router-dom"

const Projects = () => {
  return (
    <div className="flex flex-1  flex-col">
      <div className=" bg-[#252526] h-10">
        <div className='bg-[#1E1E1E] w-fit h-10 flex'>
          <div className="text-[#ADADAD] p-2 pr-1 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="mr-1" height="25" viewBox="0 0 32 32"><path fill="#f5de19" d="M4.014 14.976a2.5 2.5 0 0 0 1.567-.518a2.38 2.38 0 0 0 .805-1.358a15.3 15.3 0 0 0 .214-2.944q.012-2.085.075-2.747a5.2 5.2 0 0 1 .418-1.686a3 3 0 0 1 .755-1.018A3.05 3.05 0 0 1 9 4.125A6.8 6.8 0 0 1 10.544 4h.7v1.96h-.387a2.34 2.34 0 0 0-1.723.468a3.4 3.4 0 0 0-.425 2.092a36 36 0 0 1-.137 4.133a4.7 4.7 0 0 1-.768 2.06A4.6 4.6 0 0 1 6.1 16a3.8 3.8 0 0 1 1.992 1.754a8.9 8.9 0 0 1 .618 3.865q0 2.435.05 2.9a1.76 1.76 0 0 0 .504 1.181a2.64 2.64 0 0 0 1.592.337h.387V28h-.7a5.7 5.7 0 0 1-1.773-.2a2.97 2.97 0 0 1-1.324-.93a3.35 3.35 0 0 1-.681-1.63a24 24 0 0 1-.165-3.234a16.5 16.5 0 0 0-.214-3.106a2.4 2.4 0 0 0-.805-1.361a2.5 2.5 0 0 0-1.567-.524Zm23.972 2.035a2.5 2.5 0 0 0-1.567.524a2.4 2.4 0 0 0-.805 1.361a16.5 16.5 0 0 0-.212 3.109a24 24 0 0 1-.169 3.234a3.35 3.35 0 0 1-.681 1.63a2.97 2.97 0 0 1-1.324.93a5.7 5.7 0 0 1-1.773.2h-.7V26.04h.387a2.64 2.64 0 0 0 1.592-.337a1.76 1.76 0 0 0 .506-1.186q.05-.462.05-2.9a8.9 8.9 0 0 1 .618-3.865A3.8 3.8 0 0 1 25.9 16a4.6 4.6 0 0 1-1.7-1.286a4.7 4.7 0 0 1-.768-2.06a36 36 0 0 1-.137-4.133a3.4 3.4 0 0 0-.425-2.092a2.34 2.34 0 0 0-1.723-.468h-.387V4h.7a6.8 6.8 0 0 1 1.54.125a3.05 3.05 0 0 1 1.149.581a3 3 0 0 1 .755 1.018a5.2 5.2 0 0 1 .418 1.686q.062.662.075 2.747a15.3 15.3 0 0 0 .212 2.947a2.38 2.38 0 0 0 .805 1.355a2.5 2.5 0 0 0 1.567.518Z" /></svg>
            Projects.json
          </div>
          <NavLink to='/'>
            <svg className='mt-3.5 mr-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ADADAD" stroke="#ADADAD" d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5" /></svg>
          </NavLink>
        </div>

      </div>
      <div className="bg-[#1E1E1E] flex-1 text-white p-5 pl-9 overflow-y-auto no-scrollbar">
        <div>
          <span className="pl-3">1</span>
          <span className="text-[#E0BD00] pl-8">{"["}</span>
        </div>
        <div>
          <span className="pl-3">2</span>
          <span className="text-[#C586C0] pl-16">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-3">3</span>
          <span className="pl-24">"name"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"JobHunt – AI Interview Prep Platform"
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-3">4</span>
          <span className=" pl-24">"tech"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"React.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Node.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Express.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"MongoDB"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Google GenAI"</span>
          <span className="text-[#569CD6]">{"]"}</span>
        </div>
        <div className="flex">
          <span className="pl-3">5</span>
          <span className="pl-24">"description"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"An AI-powered interview preparation platform that analyzes your resume against a job description, identifies skill gaps, generates interview-ready insights, and creates an AI-enhanced resume." <span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-3">6</span>
          <span className="pl-24">"github"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://github.com/BEASTBOLTT/JobHunt">"https://github.com/BEASTBOLTT/JobHunt"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-3">7</span>
          <span className="pl-24">"live"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://job-hunt-ochre-phi.vercel.app/">"https://job-hunt-ochre-phi.vercel.app/"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-3">8</span>
          <span className="text-[#C586C0] pl-16">{"}"}</span>
          <span className="text-[#D4D4D4] ">,</span>
        </div>
        <div>
          <span className="pl-3">9</span>
          <span className="text-[#C586C0] pl-16">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">10</span>
          <span className="pl-23">"name"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"FinBook – Finance Tracker"
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-2">11</span>
          <span className=" pl-23">"tech"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"React.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Tailwind CSS"</span>
          <span className="text-[#569CD6]">{"]"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">12</span>
          <span className="pl-23">"description"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"Developed a personal finance tracking application to manage and visualize expenses. Designed interactive UI components and focused on usability and responsive design." <span className="text-[#D4D4D4] ">,</span></span>
        </div>
        <div className="flex">
          <span className="pl-2">13</span>
          <span className="pl-23">"github"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://github.com/BEASTBOLTT/FinBook">"https://github.com/BEASTBOLTT/FinBook"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-2">14</span>
          <span className="pl-23">"live"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://fin-book-eight.vercel.app/">"https://fin-book-eight.vercel.app/"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-2">15</span>
          <span className="text-[#C586C0] pl-16">{"}"}</span>
          <span className="text-[#D4D4D4] ">,</span>
        </div>
        <div>
          <span className="pl-2">16</span>
          <span className="text-[#C586C0] pl-16">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">10</span>
          <span className="pl-23">"name"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"ChaturGPT – AI Chatbot"
            <span className="text-[#D4D4D4] ">,</span>
          </span>
          
        </div>
        <div>
          <span className="pl-2">11</span>
          <span className=" pl-23">"tech"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"React.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Tailwind CSS"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Gemini API"</span>
          <span className="text-[#569CD6]">{"]"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">12</span>
          <span className="pl-23">"description"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"Built an AI chatbot interface that generates real-time responses using the Gemini API. Focused on creating a clean and responsive chat experience with efficient state management using React hooks."
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-2">13</span>
          <span className="pl-23">"github"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://github.com/BEASTBOLTT/Front-End-Learning-Projects/tree/main/React/ChaturGPT">"https://github.com/BEASTBOLTT/Front-End-Learning-Projects/tree/main/React/ChaturGPT"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-2">14</span>
          <span className="pl-23">"live"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://chaturgpt.vercel.app/">"https://chaturgpt.vercel.app/"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-2">15</span>
          <span className="text-[#C586C0] pl-15">{"}"}</span>
          <span className="text-[#D4D4D4] ">,</span>
        </div>
        <div>
          <span className="pl-2">16</span>
          <span className="text-[#C586C0] pl-16">{"{"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">17</span>
          <span className="pl-23">"name"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"Paste – Notes Manager"
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-2">18</span>
          <span className=" pl-23">"tech"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#569CD6] pl-2">{"["}</span>
          <span className="text-[#CE9178] pl-2">"React.js"</span>
          <span className="text-[#D4D4D4] ">,</span>
          <span className="text-[#CE9178] pl-2">"Tailwind CSS"</span>
          <span className="text-[#569CD6]">{"]"}</span>
        </div>
        <div className="flex">
          <span className="pl-2">19</span>
          <span className="pl-23">"description"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1">"Created a notes management application to store and organize notes efficiently. Implemented reusable components and dynamic state management using React hooks."
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-2">20</span>
          <span className="pl-23">"github"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://github.com/BEASTBOLTT/Front-End-Learning-Projects/tree/main/React/Paste/PasteApp">"https://github.com/BEASTBOLTT/Front-End-Learning-Projects/tree/main/React/Paste/PasteApp"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div className="flex">
          <span className="pl-2">21</span>
          <span className="pl-23">"live"</span>
          <span className="text-[#D4D4D4] ">:</span>
          <span className="text-[#CE9178] pl-2 flex-1"><a href="https://firstdeploy-ashen.vercel.app/">"https://firstdeploy-ashen.vercel.app/"</a>
            <span className="text-[#D4D4D4] ">,</span>
          </span>
        </div>
        <div>
          <span className="pl-2">22</span>
          <span className="text-[#C586C0] pl-15">{"}"}</span>
          <span className="text-[#D4D4D4] ">,</span>
        </div>
        <div>
          <span className="pl-2">23</span>
          <span className="text-[#E0BD00] pl-7">{"]"}</span>
        </div>
      </div>
    </div>
  )
}

export default Projects
