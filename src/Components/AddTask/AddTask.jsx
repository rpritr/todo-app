import "./AddTask.scss";
import "../Button/Button.jsx";
import Button from "../Button/Button.jsx";

const AddTask = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <form className="add-task">
            <input id="task-title" name="task-title" type="text" placeholder="Add Task" />
            <Button title="Add Task" classList="btn btn-primary" onClick={e => handleSubmit(e)} />
        </form>
    )
}
export default AddTask;