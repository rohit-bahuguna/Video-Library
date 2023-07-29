import React from 'react';
import { MdOutlineExplore, MdPlaylistAdd, MdOutlineWatchLater } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    const activeNavlink = ({ isActive }) => isActive && "text-indigo-700 md:bg-indigo-100 rounded-full"

    return (
        <div className="w-[14vw]  h-[88vh]   flex flex-col items-center">
            <div className="flex flex-col gap-5  text-xl">
                <NavLink className={activeNavlink} to="/" >
                    <p className='flex items-center gap-2 px-2 py-1  '> <FaHome className="text-2xl" /> <span >Home</span></p>
                </NavLink>
                <NavLink className={activeNavlink} to="/explore" >

                    <p className='flex items-center gap-2 px-2 py-1  '>
                        <MdOutlineExplore className="text-2xl" />
                        <span >Explore</span>
                    </p>
                </NavLink>
                <NavLink className={activeNavlink} to="/playlists" >

                    <p className='flex items-center gap-2 px-2 py-1  '>
                        <MdPlaylistAdd className="text-2xl" />
                        <span >Playlists</span>
                    </p>
                </NavLink>
                <NavLink className={activeNavlink} to="/watch-later" >

                    <p className='flex items-center gap-2 px-2 py-1  '>
                        <MdOutlineWatchLater className="text-2xl " />
                        <span >Watch Later</span>
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;