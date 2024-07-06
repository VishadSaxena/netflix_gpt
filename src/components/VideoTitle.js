import React from 'react'

const VideoTitle = ({title,despriction}) => {
  return (
    <div className='pt-[20%] pl-[6rem] absolute bg-gradient-to-r from-black aspect-video text-white'>
        <h1 className='text-4xl font-bold p-2'>{title}</h1>
        <p className='w-1/2 p-2 text-lg'>{despriction}</p>
        <div className='flex'>
            <button className='w-28 bg-white text-black text-xl m-1 p-2 rounded-lg hover:bg-opacity-60'>Play</button>
            <button className='w-28 bg-gray-400 text-black text-xl m-1 p-2 rounded-lg hover:bg-opacity-50'>more Info</button>
        </div>
    </div>
  )
}

export default VideoTitle