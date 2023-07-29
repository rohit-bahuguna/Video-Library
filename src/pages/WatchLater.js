import React from 'react'
import Layout from '../components/Common/Layout'
import { useSelector } from 'react-redux'
import VideoCard from '../components/cards/VideoCard'

export const WatchLater = () => {
    const { watchLater } = useSelector(state => state)

    return (
        <Layout>
            <div>
                <h1 className='text-2xl font-semibold uppercase text-indigo-700 mb-3'>Watch Later</h1>

                {watchLater.length === 0 && <h1 className='text-3xl font-semibold text-center w-[80vw]'>No Video Is In The Watch Later</h1>}

                <div className='flex flex-wrap gap-10'>
                    {
                        watchLater && watchLater.map((video) => <VideoCard video={video} />)
                    }
                </div>
            </div>
        </Layout>
    )
}
