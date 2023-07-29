import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from "uuid"
import { addNote } from '../redux/features/videoSlice'
const AddNotes = ({ toggle, createNote }) => {
    const [note, setNote] = useState({
        title: "",
        _id: uuid()
    })

    const dispatch = useDispatch()

    return (
        <div className='flex bg-white flex-col gap-3 pt-3 pb-5 '>
            <RxCross2 className='text-3xl hover:text-red-500 cursor-pointer self-end mr-3 '
                onClick={() => toggle(false)}
            />
            <form className='flex flex-col gap-3' onSubmit={(e) => createNote(e, note)}>
                <div className="flex flex-col gap-2 px-3">
                    <label
                        htmlFor="title"
                        className=" font-semibold">
                        Note
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Enter Note"
                        required
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                        value={note.title}
                    />


                </div>
                <button className='text-lg mx-3 text-indigo-700 border  border-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 '
                    type='submit'
                >
                    Add Notes

                </button>
            </form>
        </div>
    )
}

export default AddNotes