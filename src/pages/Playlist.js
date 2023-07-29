import React, { useState } from 'react'
import Layout from '../components/Common/Layout'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import PlaylistModal from '../components/PlaylistModal'
import { RxCross2 } from "react-icons/rx"
import { removePlayList } from '../redux/features/videoSlice'
import { Link } from 'react-router-dom'


export const Playlist = () => {
    const { playlists } = useSelector(state => state)
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    return (
        <Layout>
            <div className=' h-full'>
                <div className='flex w-[80vw] justify-between '>
                    <h1 className='text-2xl font-semibold uppercase text-indigo-700 '>Playlists</h1>
                    <button className='text-lg text-indigo-700 border  border-indigo-700 px-5 py-1 rounded-full hover:bg-indigo-100 '
                        onClick={() => setToggle(true)}
                    >
                        Create New Playlist

                    </button>
                </div>
                <div className='flex flex-wrap gap-16 px-10'>
                    {
                        playlists && playlists.map(({ title, thumbnail, _id }) => <div key={_id} className='flex flex-col  gap-3 shadow-lg p-2'>
                            <RxCross2 className='text-3xl hover:text-red-500 cursor-pointer self-end '
                                onClick={() => dispatch(removePlayList(_id))}
                            />
                            <Link to={`/playlist/${title}/${_id}`}  >
                                <img src={thumbnail} className='w-[20vw] ' />
                            </Link>
                            <h1 className='text-lg font-semibold text-center'>{title}</h1>
                        </div>)
                    }
                </div>

                {toggle && <div className='absolute  inset-0   flex flex-col justify-center bg-[#1a191952] '>
                    <PlaylistModal setToggle={setToggle} />
                </div>}
            </div>

        </Layout>
    )
}
