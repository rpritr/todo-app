import "./Button.scss";
const Button = (props) => {
    return (
        <button type={props.type ?? "button"} className={props.classList} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}
export default Button;