import './Home.css'
const Home = ({ data }) => {
    return (
        <div id="homeWrap">
            <div id="brewInfo">
                <h2 id="brewName">{data.name}</h2>
                <h3 id="brewId">{data.id}</h3>
                <p id="brewDesc">{data.description}</p>
            </div>
        </div>
    )
}
export default Home