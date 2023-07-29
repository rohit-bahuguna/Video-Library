import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Common/Layout'
import { useDispatch, useSelector } from 'react-redux'
import VideoCard from '../components/cards/VideoCard'
import { RxCross2 } from 'react-icons/rx'
import { removeFromPlaylist } from '../redux/features/videoSlice'

export const SinglePlayList = () => {
    const { playlistName, playlistId } = useParams()
    const { playlists } = useSelector(state => state)
    const dispatch = useDispatch()
    const videos = playlists.filter(({ _id }) => _id == playlistId)[0].videos


    return (
        <Layout>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-semibold uppercase '>{playlistName}</h1>
                {videos.length === 0 && <h1 className='text-2xl font-semibold text-center w-[80vw] mt-3  '>No Video In {playlistName} Playlist</h1>}
                <div className='flex flex-wrap gap-10'>
                    {
                        videos && videos.map((video) => <div className='flex flex-col gap-2'>
                            <RxCross2 className='text-3xl hover:text-red-500 cursor-pointer self-end '
                                onClick={() => dispatch(removeFromPlaylist({ playlistId, videoId: video._id }))}
                            />
                            <VideoCard video={video} />
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    )
}
