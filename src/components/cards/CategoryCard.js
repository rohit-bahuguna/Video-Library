import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category: { _id, category, src, thumbnail } }) => {

    return (
        <Link to={`/videos/${category}/${_id}`} >
            <div className='hover:shadow-lg  hober:rounded-t-lg overflow-hidden hover:scale-105 group'
            >
                <img src={thumbnail} className='w-[18vw] ' />
                <h1 className=' p-2 text-lg font-semibold text-center mt-3 group-hover:text-indigo-700'>{category}</h1>
            </div>
        </Link>
    )
}

export default CategoryCard