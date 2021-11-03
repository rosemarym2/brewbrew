import './Malt.css'
const Malt = ({ malt }) => {
    if(!malt){
        return <p>loading...</p>
    }
    return (
        <>
            <p>{malt.name}</p>
            <p>amount: {malt.amount.value} {malt.amount.unit}</p>
        </>
    )
}
export default Malt