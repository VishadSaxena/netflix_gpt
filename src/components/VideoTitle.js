import React from 'react'

const VideoTitle = ({title,despriction}) => {
  return (
    <div className='pt-40 pl-12'>
        <h1 className='text-4xl font-bold p-2'>{title}</h1>
        <p className='w-1/2 p-2 text-lg'>{despriction}</p>
        <div className='flex'>
            <button className='w-28 bg-gray-600 text-white text-xl m-1 p-2 bg-opacity-40 rounded-lg'>Play</button>
            <button className='w-28 bg-gray-400 text-black text-xl m-1 p-2 bg-opacity-40 rounded-lg'>more Info</button>
        </div>
    </div>
  )
}

export default VideoTitle