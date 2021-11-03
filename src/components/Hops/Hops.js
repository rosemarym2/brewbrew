import './Hops.css'

const Hops = ({ hop }) => {
    if(!hop){
        return <p>loading...</p>
    }
    return (
        <>
            <p>{hop.name}</p>
            <p>amount: {hop.amount.value} {hop.amount.unit}</p>
        </>
    )
}
export default Hops