import React from 'react'
import Layout from '../components/Common/Layout'
import { useSelector } from 'react-redux'
import CategoryCard from '../components/cards/CategoryCard'

export const Home = () => {
    const { categories } = useSelector(state => state)

    return (
        <Layout>
            <div className=''>

                <div className='flex   flex-wrap gap-10 '>
                    {
                        categories.map((category) => <CategoryCard key={category._id} category={category} />)
                    }
                </div>
            </div>
        </Layout>
    )
}
