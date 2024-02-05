
import { useState } from 'react'

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

  function renderTasks() {
    return tasks.map(task => {
      return (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      )
    })
  }

  return (
    <>
      {renderTasks()}
    </>
  )
}

export default Tasks
