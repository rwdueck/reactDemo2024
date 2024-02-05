import { useState } from 'react'

import Header from './Header'

const TaskContainer = () => {
  // 2. set up state for show task and data
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30PM',
      reminder: false,
    }
  ])

    return (
    <>
    <div>Task Container</div>
    </>
  )
}

export default TaskContainer