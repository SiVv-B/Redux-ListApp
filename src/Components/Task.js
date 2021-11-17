import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addedTask, editTask } from '../Redux/Actions'

function Task({ todo }) {
  const dispatch = useDispatch()

  // Add tasks:
  const doneSubmit = (id) => {
    dispatch(addedTask(id))
  }

  //edit tasks:
  const [edit, setEdit] = useState({ id: '', description: '' })

  const handleEdit = (event) => {
    setEdit({ ...edit, id: todo.id, description: event.target.value })
  }
  const editSubmit = (event) => {
    event.preventDefault()
    console.log(todo, 'editSubmit')
    dispatch(editTask(edit))
    setEdit({ id: '', description: '' })
  }

  //Toggle Edit button
  const [showBtn, setShowBtn] = useState(false)
  const toggle = () => {
    setShowBtn(!showBtn)
  }

  //Toggle done undone button
  const [doneToggle, setDoneToggle] = useState(false)
  const toggleDone = () => {
    setDoneToggle(!doneToggle)
  }

  const donefunctions =()=>{
   toggleDone ()
  doneSubmit(todo.id)
    
  }

  return (
    <div className="container">
      <div className="card" >
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{
              display: 'flex',
            }}
          >
            {todo.description}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button onClick={donefunctions}>
                {doneToggle ? 'Done' : 'Undone'}
              </button>

              <button onClick={toggle}>{showBtn ? 'Close✏️' : 'Edit✏️'}</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="editTask">
        {showBtn ? (
          <form onSubmit={editSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder=""
              onChange={handleEdit}
              value={edit.description}
            />
            <button type="submit">save the edit</button>
          </form>
        ) : null}
      </div>
    </div>
  )
}

export default Task
