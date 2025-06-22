import { useState } from "react";

type Task = {
  name: string;
  hours: number;
};

function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskHours, setTaskHours] = useState("");

  const handleAddTask = () => {
    const trimmedName = taskName.trim();
    const hoursNum = Number(taskHours);

    if (!trimmedName) {
      alert("Task name is required.");
      return;
    }
    if (!taskHours.trim() || isNaN(hoursNum) || hoursNum <= 0) {
      alert("Task hours must be a number greater than 0.");
      return;
    }

    const newTask: Task = { name: trimmedName, hours: hoursNum };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskHours("");
  };

  return (
    <div>
      <h2>Time Tracker</h2>

      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours"
        value={taskHours}
        onChange={(e) => setTaskHours(e.target.value)}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <h3>Task List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} : {task.hours} hours
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;