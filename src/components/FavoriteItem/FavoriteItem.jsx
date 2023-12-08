import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { CardMedia } from '@mui/material';
import "./FavoriteItem.css"

function FavoriteItem ({giffy}) {

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      const card = (
        <React.Fragment>
            <CardMedia component={"img"} image={giffy.url}/>
          <CardContent>
            <Typography variant='body'>
              {giffy.category_name}
            </Typography>
          </CardContent>
          <CardActions>
            <select onChange={() => setCategory(event.target.value)}>
                <option>none</option>
                <option value="1">wild</option>
                <option value="2">uproarious</option>
                <option value="3">poigant</option>
                <option value="4">felicitous</option>
                <option value="5">whimsical</option>
            </select>
          </CardActions>
        </React.Fragment>
      );

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
        <div className={"favorites"}>
            <Box className="card" sx={{ minWidth: 200 }}>
                <Card sx={{maxWidth: 150, height: 240}}variant="outlined">{card}</Card>
            </Box>
        </div>
    )
}


export default FavoriteItem;