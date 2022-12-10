import { useState } from "react";
import { useGlobalContext } from "../context";
import {BiSearchAlt} from "react-icons/bi";

const Search= () => {
    const [text, setText] = useState("");
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            setSearchTerm(text);
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm("");
        setText("");
        fetchRandomMeal();
    }

    return <div className="search-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What do you want to eat?" value={text} onChange={handleChange} className="form-input" />
                <button type="submit" className="btn"><BiSearchAlt/></button>
                <button type="button" className="btn" onClick={handleRandomMeal}>surprise me!</button>
        </form>
    </div>
}

export default Search;
