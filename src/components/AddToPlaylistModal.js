import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const AddToPlaylistModal = ({ setToggle, setCreate, addVideoToPlaylist }) => {
    const { playlists } = useSelector(state => state)
    const [selectedPlayList, setSelectedPlaylist] = useState()

    return (
        <div className=' z-10 bg-white self-center w-full flex flex-col gap-2  border rounded-xl  shadow-xl  pt-2 pb-5'>
            <RxCross2 className='text-3xl mx-3 hover:text-red-500 cursor-pointer self-end '
                onClick={() => setToggle(false)}
            />
            <h1 className='self-center text-xl font-semibold '>
                Add To Playlist
            </h1>
            <div className='flex flex-col gap-2'>
                {
                    playlists.map(({ title, _id }) => <p key={_id} className={` cursor-pointer rounded-full mx-1 text-indigo-700 px-3 py-1 ${selectedPlayList == _id ? "bg-green-500" : 'hover:bg-indigo-100'}`}
                        onClick={() => setSelectedPlaylist(_id)}
                    > {title}</p>)
                }
            </div>

            <div className='flex justify-between px-2'>
                <button className='text-lg mx-3 text-indigo-700 border  border-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 '
                    onClick={() => setCreate(true)}
                >
                    Create New Playlist

                </button>
                <button className='text-lg mx-3 text-indigo-700 border  border-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 '
                    onClick={() => addVideoToPlaylist(selectedPlayList)}
                >
                    Add To Playlist

                </button>
            </div>

        </div>
    )
}

export default AddToPlaylistModal