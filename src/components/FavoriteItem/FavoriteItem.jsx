import { useDispatch } from "react-redux";

function FavoriteItem ({giffy}) {

    const dispatch = useDispatch()

    const setCategory = (categorySelection) => {
        // console.log(categorySelection)
        dispatch({
            type: 'SAGA/UPDATE_FAVORITES',
            payload: {
                gifID: giffy.id,
                gifNAME: categorySelection
            }
        })

    }

    return (
        <>
        <h1>{giffy.category_name}</h1>
        <img src={giffy.url} />
        <br></br>
        <select onChange={() => setCategory(event.target.value)}>
            <option value="1">wild</option>
            <option value="2">uproarious</option>
            <option value="3">poigant</option>
            <option value="4">felicitous</option>
            <option value="5">whimsical</option>
        </select>
        </>
    )
}


export default FavoriteItem;