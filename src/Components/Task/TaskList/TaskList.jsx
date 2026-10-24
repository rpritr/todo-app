import TaskItem from "../TaskItem/TaskItem.jsx";
import "./TaskList.scss";
const TaskList = ({ tasks, onToggle, onRemove }) => {
    if (tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}
export default TaskList;