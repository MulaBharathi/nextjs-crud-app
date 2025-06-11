'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  // Fetch all tasks on page load
  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return

    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    const newTask = await res.json()
    setTasks([...tasks, newTask])
    setText('')
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">My CRUD App</h1>

      {/* Form to create a new item */}
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>

      {/* List of items */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul>
    </main>
  )
}
