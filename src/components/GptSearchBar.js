import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-[15%] justify-center">
        <form className="bg-black grid grid-cols-12 w-3/4 ml-[16rem] rounded-lg">
            <input className="p-4 m-4 col-span-10 rounded-lg" placeholder='What do you wanna watch today?'></input>
            <button className="bg-red-800 text-white col-span-2 m-4 py-2 px-4 rounded-lg">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar