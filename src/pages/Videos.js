import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Common/Layout'
import { useSelector } from 'react-redux'
import VideoCard from '../components/cards/VideoCard'

export const Videos = () => {
    const { category, categoryId } = useParams()
    const { videos } = useSelector(state => state)

    const currentVideos = videos.filter((video) => video.category === category)

    return (
        <Layout>
            <div>
                <h1 className='text-2xl font-semibold'>{category}</h1>

                <div className='flex flex-wrap gap-6'>
                    {
                        currentVideos && currentVideos.map((video) => <VideoCard key={video._id} const video={video} />)
                    }
                </div>
            </div>
        </Layout>
    )
}
