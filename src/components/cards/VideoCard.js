import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { addToWatchLater, removeFromWatchLater } from '../../redux/features/videoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IsInTheWatchLater } from '../../utils/IsInTheWatchLater'

const VideoCard = ({ video: { _id, title, thumbnail, category, views, creator, src } }) => {
    const dispatch = useDispatch()
    const { watchLater } = useSelector(state => state)
    const isInWatchLater = IsInTheWatchLater(watchLater, _id)

    const addOrRemoveFromWatchLaterList = () => {
        isInWatchLater ? dispatch(removeFromWatchLater(_id)) : dispatch(addToWatchLater(_id))
    }

    return (

        <div className='flex flex-col max-w-[25vw] relative gap-3 pb-2 hover:shadow-lg hover:scale-105 '>
            <img src={thumbnail} className=' h-[95%]' />
            <div className='flex gap-2 px-2 items-center'>
                <img src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className='w-20 h-20' />
                <Link to={`/video/${title}/${_id}`}>
                    <div className='group'>
                        <h1 className='group-hover:text-indigo-700 font-semibold'>{title}</h1>
                        <h2 className=' font-semibold'>{category}</h2>
                        <p className='text-gray-500 text-sm '>
                            <span className='mr-2'>
                                {views} views |
                            </span>
                            <span>
                                {creator}
                            </span>
                        </p>
                    </div>
                </Link>
            </div>
            <div className='absolute top-0 bg-white right-0 p-1 rounded-bl-lg group-hover:scale-105'>
                <MdOutlineWatchLater className={`text-3xl  cursor-pointer ${isInWatchLater ? "text-green-500" : "text-indigo-700"}`} onClick={addOrRemoveFromWatchLaterList} />
            </div>
        </div>

    )
}

export default VideoCard