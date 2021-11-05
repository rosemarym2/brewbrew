import './Home.css'
import Button from '../Button/Button'
const Home = ({ data, getter }) => {
    return (
        <div id="homeWrap">
            <div id="brewInfo">
                <h2 id="brewName">{data.name}</h2>
                <h3 id="brewId">{data.id}</h3>
                <p id="brewDesc">{data.description}</p>
            </div>
            <Button getter={getter} />
        </div>
    )
}
export default Home