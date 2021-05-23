import GAMESERVICE from "../service.js/games.services";
import { GOT_GAMES_SUCCESSFULLY } from "./../../types/index";

export const fetchGames = () => dispatch =>{

    console.log(GOT_GAMES_SUCCESSFULLY);
    GAMESERVICE.fetchGames()
    .then((response)=>{
        dispatch({
            type: GOT_GAMES_SUCCESSFULLY,
            payload: response.data
        })
    })
}


