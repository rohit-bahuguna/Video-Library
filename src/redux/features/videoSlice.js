import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { categories } from '../../utils/categoriesData';
import { videos } from '../../utils/videoData';



const initialState = {

    isLoading: false,
    categories,
    videos,
    playlists: [],
    watchLater: []

};




export const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        createNewPlayList: (state, { payload }) => {
            console.log(payload)
            state.playlists = [...state.playlists, payload]
            toast.success(`${payload.title} Created`)
        },
        removePlayList: (state, { payload }) => {


            state.playlists = state.playlists.filter(({ _id }) => _id != payload)
            toast.error(`Platlist Removed`)
        },
        addToPlayList: (state, { payload: { playlistId, videoId } }) => {

            const video = state.videos.find(({ _id }) => videoId == _id)
            const playlist = state.playlists.find(({ _id }) => playlistId == _id).videos.push(video)

            state.playlists = state.playlists.map((playlist) => {
                if (playlist._id == playlistId) {
                    return playlist
                }
                else {
                    return playlist
                }
            })
            toast.success(`video added to ${playlist.title}`)

        },
        removeFromPlaylist: (state, { payload: { playlistId, videoId } }) => {


            let playlist = state.playlists.find(({ _id }) => playlistId == _id)
            const videos = playlist.videos.filter(({ _id }) => _id !== videoId)
            playlist.videos = videos
            state.playlists = state.playlists = state.playlists.map((playlist) => {
                if (playlist._id == playlistId) {
                    return playlist
                }
                else {
                    return playlist
                }
            })
            toast.success(`Video Removed from Playlist`)
        },
        addToWatchLater: (state, { payload }) => {

            const video = state.videos.find(({ _id }) => payload == _id)

            state.watchLater = [...state.watchLater, video]
            toast.success("Added To Watch Later")
        },
        removeFromWatchLater: (state, { payload }) => {

            state.watchLater = state.watchLater.filter(({ _id }) => _id !== payload)
            toast.error("Removed From Watch Later")
        }
        ,
        addNewNote: (state, { payload: { videoId, note } }) => {
            const video = state.videos.find(({ _id }) => _id == videoId)
            video.notes ? video.notes.push(note) : video.notes = [note]
            state.videos = state.videos.map((singleVideo) => {
                if (singleVideo._id == videoId) {
                    return video
                }
                else {
                    return singleVideo
                }
            })

            toast.success(`Note Added`)
        },
        removeNote: (state, { payload: { videoId, noteId } }) => {

            let video = state.videos.find(({ _id }) => _id == videoId)

            const notes = video.notes.filter(({ _id }) => _id !== noteId)

            video.notes = notes

            state.videos = state.videos.map((singleVideo) => {
                if (singleVideo._id == videoId) {
                    return video
                }
                else {
                    return singleVideo
                }
            })

            toast.error('Note Removed')

        },
        updateNote: (state, { payload: { videoId, note, noteId } }) => {

            const video = state.videos.find(({ _id }) => _id == videoId)
            video.notes.filter(({ _id }) => _id !== noteId)
            video.notes.push(note)

            state.videos = state.videos.map((singleVideo) => {
                if (singleVideo._id == videoId) {
                    return video
                }
                else {
                    return singleVideo
                }
            })

            toast.success(`Note Updated`)
        }
    }
});

export const { addNewNote, removeNote, updateNote, addToPlayList, addToWatchLater, removeFromWatchLater, removeFromPlaylist, removePlayList, createNewPlayList } = videoSlice.actions;

export default videoSlice.reducer;

