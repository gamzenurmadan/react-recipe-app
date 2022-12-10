import { useGlobalContext} from '../context';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';

const Meals = () => {
    const {loading, meals, selectMeal, addToFavorites} = useGlobalContext();

    if (loading){
        return <section className='section'>
            <h4>Loading...</h4>
        </section>
    }

    if (meals.length < 1){
        return <section className='section'>
            <h4>There is no matched meal name. Please try different term.</h4>
        </section>
    }
    return(  
        <section className='section-center'>
            {meals.map((aMeal) => {
                const {idMeal, strMeal:title, strMealThumb:image} = aMeal;
                return <article key={idMeal} className="single-meal">
                <img src={image} className="img" onClick={() => selectMeal(idMeal)} />
                <footer>
                    <h5>{title}</h5>
                    <button className='like-btn' onClick={() => addToFavorites(idMeal)}><BsFillBookmarkHeartFill/></button>
                </footer>
                </article>
            }
        )}
        </section>  
    )
}

export default Meals;
