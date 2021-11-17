import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Actions'


function AddTasks() {
  const dispatch = useDispatch()
  const [addTodo, setAddToDo] = useState({
    id: '',
    description: ' ',
    done: false,
  })

  const handleChange = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setAddToDo({
      ...addTodo,
      id: id,
      description: event.target.value,
      done: false,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addTask(addTodo))
    setAddToDo({ id: '', description: '', done: false })
  }

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        style={{
          marginTop: '3%',
          marginBottom: '3%',
        }}
      >
        <input
          className="form-control"
          type="text"
          placeholder=""
          onChange={handleChange}
          value={addTodo.description}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTasks
