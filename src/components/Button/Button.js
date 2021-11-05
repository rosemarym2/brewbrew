import "./Button.css"
const Button = ({ getter }) => {
    return (
        <div>
            <button onClick={getter}>get another brew</button>
        </div>
    )
}
export default Button