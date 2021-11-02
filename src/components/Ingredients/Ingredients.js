import Hops from "../Hops/Hops"
import Malt from "../Malt/Malt"

const Ingredients = ({ ingredients }) => {
    if(!ingredients){
        return <p>loading...</p>
    }
    const hops = ingredients.hops
    const malts = ingredients.malt
    const yeast = ingredients.yeast
    return (
        <div>
            <div>
                <h2>hops</h2>
            {hops.map((hop, index) => {
                return <Hops key={index} hop={hop} />
            })}
            </div>
            <div>
                <h2>malts</h2>
                {malts.map((malt, index) => {
                    return <Malt key={index} malt={malt} />
                })}
            </div>
            <div>
                <h3>Yeast</h3>
                <p>{yeast}</p>
            </div>
        </div>
    )
}

export default Ingredients