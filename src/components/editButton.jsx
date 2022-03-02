import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../store/user'
import editUsers from '../tools/editUsers'

export default function EditButton(props) {
    const user = useSelector((state)=>state.user.logged)
    const dispatch = useDispatch()

    const [editName, setEditName] = useState(false);
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const firstName = user.firstName;
    const lastName = user.lastName;

    const edit = async (e) => {
        e.preventDefault();
        const newName = await editUsers(newFirstName, newLastName)
        dispatch(editUser(newName))
        setEditName(false);
    };

    return (
        <div className="header">
            <h1>Welcome back<br/>{firstName} {lastName}!</h1>
            {editName ? (
            <div>
            <input
                className="edit-button"
                type="button"
                onClick={() => {
                setEditName(true);
                }}
                value="Edit Name"
            />
            <input
                className="edit-input"
                value={newFirstName}
                placeholder={firstName}
                type="text"
                onChange={(e) => {
                setNewFirstName(e.target.value);
                }}
            />
            <input
                className="edit-input"
                value={newLastName}
                placeholder={lastName}
                type="text"
                onChange={(e) => {
                setNewLastName(e.target.value);
                }}
            />
            <button
                className="edit-button"
                type="submit"
                value="Save"
                onClick={edit}
            >
                Save
            </button>

            <button
                className="edit-button"
                type="button"
                value="Cancel"
                onClick={() => {
                setEditName(false);
                }}
            >
                Cancel
            </button>
            </div>
        ) : (
            <input
            className="edit-button"
            type="button"
            onClick={() => {
                setEditName(true);
            }}
            value="Edit Name"
            />
        )}
        </div>
    )
}