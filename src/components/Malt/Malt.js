import './Malt.css'
const Malt = ({ malt }) => {
    if(!malt){
        return <p>loading...</p>
    }
    return (
        <div style={{ border: "solid red 3px"}}>
            <p>{malt.name}</p>
            <p>amount: {malt.amount.value} {malt.amount.unit}</p>
        </div>
    )
}
export default Malt