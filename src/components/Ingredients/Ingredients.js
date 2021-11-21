import Hops from "../Hops/Hops";
import Malt from "../Malt/Malt";
import "./Ingredients.css";
const Ingredients = ({ ingredients }) => {
  if (!ingredients) {
    return <p>loading...</p>;
  }
  const hops = ingredients.hops;
  const malts = ingredients.malt;
  const yeast = ingredients.yeast;
  return (
    <div id="ingredientsWrapper">
      <h2>Ingredients</h2>
      <div className="ingredients" id="hopsWarpper">
        <h2>hops</h2>
        {hops.map((hop, index) => {
          return (
            <div key={index} className="ing_card">
              <Hops hop={hop} />
            </div>
          );
        })}
      </div>
      <div className="ingredients" id="maltsWrapper">
        <h2>malts</h2>
        {malts.map((malt, index) => {
          return (
            <div key={index} className="ing_card">
              <Malt malt={malt} />
            </div>
          );
        })}
      </div>
      <div className="ingredients" id="yeastWrapper">
        <h2>yeast</h2>
        <div className="ing_card">
            <p>{yeast}</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
