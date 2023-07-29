import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Common/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { MdEditNote, MdPlaylistAdd, MdOutlineWatchLater } from 'react-icons/md'
import VideoBar from '../components/VideoBar'
import { IsInTheWatchLater } from '../utils/IsInTheWatchLater'
import { addToPlayList, addToWatchLater, removeFromWatchLater, addNewNote, removeNote } from '../redux/features/videoSlice'
import AddToPlaylistModal from '../components/AddToPlaylistModal'
import PlaylistModal from '../components/PlaylistModal'
import toast from 'react-hot-toast'
import AddNotes from '../components/AddNotes'
import { BiSolidEditAlt } from "react-icons/bi"
import { AiTwotoneDelete } from "react-icons/ai"

export const Video = () => {
    const { videoName, videoId } = useParams()
    const [create, setCreate] = useState(false)
    const [add, setAdd] = useState(false)
    const [addNote, setAddNote] = useState(false)
    const { videos } = useSelector(state => state)

    const video = videos.filter((video) => video._id === parseInt(videoId))[0]

    const dispatch = useDispatch()

    const { watchLater } = useSelector(state => state)

    const isInWatchLater = IsInTheWatchLater(watchLater, video._id)

    const addOrRemoveFromWatchLaterList = () => {
        isInWatchLater ? dispatch(removeFromWatchLater(video._id)) : dispatch(addToWatchLater(video._id))
    }

    const addVideoToPlaylist = (selectedPlayList) => {

        if (selectedPlayList) {

            dispatch(addToPlayList({ playlistId: selectedPlayList, videoId }))
            setAdd(false)
        } else {
            toast.error('Please select a playlist')
        }
    }


    const createNote = (e, note) => {
        e.preventDefault()
        dispatch(addNewNote({ videoId, note }))
        setAddNote(false)
    }

    return (
        <Layout>

            <div className='flex justify-between px-5 w-full'>
                <div className='flex flex-col gap-3 relative'>

                    <embed src={video.src} placeholder={video.thumbnail} width={800} height={500} />
                    <div className='flex justify-between  shadow border-b-2 border-gray-500 py-2 px-3 '>
                        <h1 className='text-lg font-semibold'>
                            {video.title}
                        </h1>
                        <div className='flex gap-5 text-3xl'>
                            <MdOutlineWatchLater className={`hover:text-indigo-700 cursor-pointer ${isInWatchLater ? "text-green-500" : "text-indigo-700"}`}

                                onClick={addOrRemoveFromWatchLaterList} /> <MdPlaylistAdd className='hover:text-indigo-700 cursor-pointer'

                                    onClick={() => setAdd(true)} />
                            <MdEditNote className='hover:text-indigo-700 cursor-pointer'
                                onClick={() => setAddNote(true)}
                            />
                        </div>

                        {add && <div className='w-1/2 absolute right-0 bottom-2'>
                            <AddToPlaylistModal setToggle={setAdd} setCreate={setCreate} addVideoToPlaylist={addVideoToPlaylist} />
                        </div>}

                        {addNote && <div className='w-1/2  absolute right-0 bottom-2'>
                            <AddNotes toggle={setAddNote} createNote={createNote} />
                        </div>}
                    </div>

                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Notes : </h1>
                        <div className='flex flex-col gap-3 '>
                            {
                                video.notes && video.notes.map(({ title, _id }) => <div className='flex  justify-between'>
                                    <p className='text-lg font-semibold ' key={_id}>{title}</p>
                                    <div className='flex gap-5 items-center text-2xl'>
                                        <BiSolidEditAlt className='hover:text-indigo-700' />
                                        <AiTwotoneDelete className='text-red-500' onClick={() => dispatch(removeNote({ videoId, noteId: _id }))} />
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='w-1/3'>
                    <h1 className='text-2xl font-semibold'>More Videos:</h1>
                    <VideoBar category={video.category} />
                </div>

                {create && <div className='absolute  inset-0   flex flex-col justify-center bg-[#1a191952] '>
                    <PlaylistModal setToggle={setCreate} />
                </div>}

            </div>

        </Layout>
    )
}
