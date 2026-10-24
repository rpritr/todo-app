import "./AddTask.scss";
import Button from "../../Button/Button.jsx";

const AddTask = ({ onAdd, disabled }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = String(new FormData(form).get("task-title") ?? "").trim();

        if (title && await onAdd(title)) {
            form.reset();
        }
    }

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <input id="task-title" name="task-title" type="text" placeholder="Add Task" required disabled={disabled} />
            <Button type="submit" title="Add Task" classList="btn btn-primary" disabled={disabled} />
        </form>
    )
}
export default AddTask;