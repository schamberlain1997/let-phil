import { useState } from "react";

/*
Requirements:
- Input field to add a task
- Button to add task to a list
- Display list of tasks
- Bonus:
  - Delete a task
  - Mark task as completed
*/
interface Task {
  id: number;
  text: string;
  completed: boolean;
}
export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput('')
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed } : task 
    ));
  };
    
  const deleteTask = (id: number) => {
    setTasks(tasks.filter (task=> task.id !== id));
  };

  return <div>
    <h2>Task List</h2>
    <input
    placeholder="Enter a task to submit"
    type="text"
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    />
    <button onClick={addTask}>Add</button>
    <ul>
      {tasks.map(task=>(
      <li>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
              {task.text}
            </span>
        <button onClick={()=> deleteTask(task.id)}>Delete</button>
      </li>
      ))} 
    </ul>

  </div>;
}
