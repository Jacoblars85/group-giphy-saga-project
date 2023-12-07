import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';




function Favorites() {
    const setFavorites = useSelector(store => store.setFavorites);
    useEffect(() =>{
        getFavorites()
    }, [])

    const dispatch = useDispatch();

   

    const getFavorites = () => {
        dispatch ({
            type: 'SAGA/SET_FAVORITES'
        })

    }
    return (
      <div>
        <h2>Favorites</h2>
        {setFavorites.map((giffy) => {
                return (
                    <FavoriteItem key={giffy.id} giffy={giffy} />
                );
            })}
      </div>
    );
  }
  
  
  export default Favorites;
  