import "./TaskItem.scss";
import Button from "../Button/Button.jsx";

const TaskItem = (props) => {
    const handleRemove = id => {
        const url = "http://localhost:3000/tasks/"+id;
       fetch(url, {
            method: "DELETE",
        });
    }
    const handleDone = id => {
        const url = "http://localhost:3000/tasks/"+id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                title: props.task,
                done: true
            })
        });
    }
    return (
        <div className="task-item">
            <span>{props.task}</span>
            <span>
                <Button classList="btn btn-secondary" data-id={props.id} title="Done" onClick={e=>handleDone(props.id)}/>
                <Button classList="btn btn-adjacent" data-id={props.id} title="Remove" onClick={e=>handleRemove(props.id)}/>
             </span>
            </div>
    )
}

export default TaskItem;