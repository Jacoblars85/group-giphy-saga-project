import React from 'react';
import { useDispatch } from 'react-redux';

function GiffyItem({ giffy }) {
    console.log(giffy)
    const dispatch = useDispatch();

   
    const addFavorite =() => {
        dispatch({
            type: 'SAGA/ADD_FAVORITE',
            payload: giffy.images.fixed_height.url
        })
    }
    

    return (
        <li>
            <img src={giffy.images.fixed_height.url} />



            <button onClick={addFavorite}>Add To Favorites</button>
        </li>
    )
}

export default GiffyItem;