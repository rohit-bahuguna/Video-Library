import React from 'react'
import { useSelector } from 'react-redux'

const VideoBar = ({ category }) => {
    const { videos } = useSelector(state => state)

    const moreVideos = videos.filter((video) => category === video.category)

    return (
        <div className='flex flex-col gap-5  font-semibold '>
            {
                moreVideos.map(({ _id, title, thumbnail, creator }) => <div key={_id} className='flex  gap-2 hover:shadow-lg hover:text-indigo-700 py-1 hover:scale-105 px-2 hover:border rounded'>
                    <img src={thumbnail} className='w-1/2' />
                    <div className='flex flex-col gap-2'>
                        <h1>
                            {title}
                        </h1>
                        <p className='text-sm text-gray-500'>
                            {creator}
                        </p>
                    </div>

                </div>)
            }
        </div>
    )
}

export default VideoBar