import { useGlobalContext } from "../context";
import {AiOutlineCloseCircle} from "react-icons/ai";

const Favorites = () => {
    const {favorites, selectMeal, removeFromFavorites} = useGlobalContext();

    return <section className="favorites">
        <div className="favorites-content">
            <h5>Favorite Meals</h5>
            <div className="favorites-container">
                {favorites.map((item) => {
                    const {idMeal, strMealThumb:image} = item;
                    return <div key={idMeal} className="favorite-item">
                            <img src={image} className="favorite-img img" onClick={() => selectMeal(idMeal, true)}/>
                            <button onClick={() => removeFromFavorites(idMeal)}><AiOutlineCloseCircle/></button>
                        </div>
                })}
            </div>
        </div>
    </section>
}

export default Favorites;
