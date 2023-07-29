import React, { useState } from 'react'
import Layout from '../components/Common/Layout'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { RiDeleteBack2Line } from 'react-icons/ri'
import VideoCard from "../components/cards/VideoCard"

export const Explore = () => {
    const { videos } = useSelector(state => state)
    const [search, setSearch] = useState('')

    const searcedVideos = videos.filter(({ title }) => {
        return search ? title.toLowerCase().includes(search.toLowerCase()) : true
    })

    return (
        <Layout>
            <div className='flex    flex-col gap-5 '>
                <h1 className='text-2xl font-semibold uppercase text-indigo-700 mb-2'>Explore</h1>
                <div className=' w-[80vw]  self-center'>
                    <div className='relative '>
                        <input type="text" value={search} className={`bg-gray-200 w-full text-black  py-2 px-10  rounded-full`} placeholder='Search Videos By Title' onChange={(e) => setSearch(e.target.value)} autoFocus={true} />

                        <FaSearch className='absolute inset-3 text-gray-500' />

                        <RiDeleteBack2Line className='absolute right-4 top-3 text-xl text-black hover:text-red-600 ' onClick={() => {
                            search && setSearch("")
                        }} />
                    </div>
                </div>
                <div className='flex   flex-wrap gap-10'>
                    {
                        searcedVideos && searcedVideos.map((video) => <VideoCard video={video} />)
                    }
                </div>
                {
                    searcedVideos.length === 0 && <h1 className='text-2xl font-semibold text-center'>No Video by title "{search}"</h1>
                }
            </div>
        </Layout>
    )
}
