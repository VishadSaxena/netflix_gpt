import React from 'react'

const VideoTitle = ({title,despriction}) => {
  return (
    <div className='pt-40 pl-12'>
        <h1 className='text-3xl font-bold p-2'>{title}</h1>
        <p className='w-3/4 p-2'>{despriction}</p>
        <div className='flex'>
            <button className='w-28 bg-gray-400 text-black text-xl m-1 p-2'>Play</button>
            <button className='w-28 bg-gray-400 text-black text-xl m-1 p-2'>more Info</button>
        </div>
    </div>
  )
}

export default VideoTitle