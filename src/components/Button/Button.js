import "./Button.css"
const Button = ({ getter }) => {
    return (
        <div>
            <button data-testid="buttonMain" onClick={getter}>get another brew</button>
        </div>
    )
}
export default Button