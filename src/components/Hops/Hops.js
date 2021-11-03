import './Hops.css'

const Hops = ({ hop }) => {
    if(!hop){
        return <p>loading...</p>
    }
    return (
        <div style={{ border: "solid blue 3px"}}>
            <p>{hop.name}</p>
            <p>add: {hop.add}</p>
            <p>amount: {hop.amount.value} {hop.amount.unit}</p>
        </div>
    )
}
export default Hops