import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx"
import { v4 as uuid } from "uuid"
import { createNewPlayList } from '../redux/features/videoSlice';

const PlaylistModal = ({ setToggle }) => {
    const dispatch = useDispatch();

    const { playlists } = useSelector(state => state)
    const [playlistData, setPlaylistData] = useState({
        title: "",
        description: "",
        videos: [],
        thumbnail: "/newplaylist.avif",
        _id: uuid()
    })

    const createPlayList = (e) => {
        e.preventDefault()
        dispatch(createNewPlayList(playlistData))
        setToggle(false)
    }


    return (
        <div className='bg-white self-center w-1/3 flex flex-col gap-3  border rounded-xl shadow-xl px-3 py-5'>
            <RxCross2 className='text-3xl hover:text-red-500 cursor-pointer self-end '
                onClick={() => setToggle(false)}
            />
            <h1 className='self-center text-xl font-semibold '>
                Create New Playlist
            </h1>

            <form className='flex flex-col gap-8' onSubmit={createPlayList}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="title"
                        className=" font-semibold">
                        Playlist Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Enter  Playlist Title"
                        required
                        onChange={(e) => setPlaylistData({ ...playlistData, title: e.target.value })}
                        value={playlistData.title}
                    />


                </div>
                <div className="">
                    <label
                        htmlFor="description"
                        className="font-semibold">
                        Playlist Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="input"
                        placeholder="Enter PlayList Description"
                        onChange={(e) => setPlaylistData({ ...playlistData, description: e.target.value })}
                        value={playlistData.description}
                        required
                    />


                </div>
                <button className='btn' type='submit'>Create PlayList</button>
            </form>
        </div>
    );
};

export default PlaylistModal;