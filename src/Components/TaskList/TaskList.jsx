import {useEffect, useState} from "react";
import TaskItem from "../TaskItem/TaskItem.jsx";
import "./TaskList.scss";
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const url = "http://localhost:3000/tasks";

    useEffect(() => {

        const fetchTasks = async () => {
            const r = await fetch(url, { method: "GET" });
            const tasks = await r.json();
            setTasks(tasks);
        }
        fetchTasks();
    },[])
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem task={task.title} key={index} />
            ))}
        </div>
    )
}
export default TaskList;