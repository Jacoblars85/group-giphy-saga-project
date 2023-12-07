import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GiffyItem from "../GiffyItem/GiffyItem";


function SearchBar() {
    let [searchInput, setSearchInput] = useState('')

    const giffyReducer = useSelector(store => store.giffyReducer);

    const dispatch = useDispatch()

    // useEffect(() => {
    //     getGiffy();

    // }, []);

    const getGiffy = (e) => {
        dispatch({
            type: 'SAGA/GET_GIFFY',
            payload: searchInput
        })
    }

    return (
      <div>
       <input type="text"
       value={searchInput}
       onChange={(e) => setSearchInput(e.target.value)}
       placeholder="Search"></input>

       <button onClick={getGiffy}>Search</button>

       {giffyReducer.map((giffy) => {
                return (
                    <GiffyItem key={giffy.id} giffy={giffy} />
                );
            })}
      </div>
    );
  }
  
  
  export default SearchBar;
  