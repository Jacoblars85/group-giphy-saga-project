import React from 'react';
import { useDispatch } from 'react-redux';

function GiffyItem({ giffy }) {
    console.log(giffy)
    // const dispatch = useDispatch();

    // const removeItem = () => {
    //     dispatch({
    //         type: 'SAGA/DELETE_BASKET',
    //         payload: basketItem.id
    //     })
       
        
    // }

    return (
        <li>
            <img src={giffy.images.fixed_height.url} />


            {/* <button onClick={removeItem}>Remove</button> */}
        </li>
    )
}

export default GiffyItem;