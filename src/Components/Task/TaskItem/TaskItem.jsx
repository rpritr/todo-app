import "./TaskItem.scss";
import Button from "../../Button/Button.jsx";

const TaskItem = ({ task, onToggle, onRemove }) => {
    return (
        <div className="task-item" style={{
            backgroundColor: task.done ? "#373737" : "transparent",
        }}>
            <span>{task.title}</span>
            <span>
                <Button classList="btn btn-secondary" title={task.done ? "Undone" : "Done"} onClick={() => onToggle(task)} />
                <Button classList="btn btn-adjacent" title="Remove" onClick={() => onRemove(task.id)} />
             </span>
            </div>
    )
}

export default TaskItem;