import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListOfTasks() {
  const tasks = useSelector((state) => state)

  var doneTasks = tasks.filter((element) => element.done == true)
  var undoneTasks = tasks.filter((element) => element.done == false)

  return (
    <div
      className="container"
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          border: 'dotted',
          borderColor: 'gray',
          marginRight: '2%',
          marginLeft: '10%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <h3>All tasks</h3>

        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column-reverse',
            alignContent: 'sparce-between',
            marginLeft: '5%',
            marginTop: '2%',
            marginBottom: '2%',
          }}
        >
          {tasks.map((todo) => (
            <Task todo={todo} />
          ))}
        </div>
      </div>

      <div
        className="doneUndone"
        style={{
          display: 'flex',
          justifyContent: 'sparce-around',
          justifyContent: 'center',
          border: 'dotted',
          borderColor: 'gray',
        }}
      >
        <div className="doneTasks">
          <div className="container">
            <h4
              style={{
                color: 'green',
              }}
            >
              Done tasks:
            </h4>
            {doneTasks.map((element) => (
              <div>
                <p> ✔️ {element.description}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="undoneTasks">
          <div className="container">
            <h4
              style={{
                color: 'red',
              }}
            >
              Undone tasks:
            </h4>
            {undoneTasks.map((element) => (
              <div>
                <p>🔘{element.description}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListOfTasks
