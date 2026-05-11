
function Home(){
    return(
        <div className="flex flex-1  flex-col">
            {/* <div className=" bg-[#252526] h-10">
            </div> */}
            <div className="bg-[#1E1E1E] flex-1 flex flex-col justify-center items-center">
                <svg className="h-40 w-40 mb-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ADADAD" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.9 6.1c-.4-.4-1.1-1.1-2.4-1.1H11C8.2 7 6 4.8 6 2H4c0 3.2 2.1 5.8 5 6.7V22h2v-6h2v6h2V10.1l4 3.9l1.4-1.4z" /></svg>
                <h1 className="text-[#ADADAD] text-3xl font-semibold mb-3">Welcome To Devam`s Portfolio</h1>
                <p className="text-[#ADADAD] text-2xl ">Select a file to display</p>
            </div>
        </div>
    )
}

export default Home;