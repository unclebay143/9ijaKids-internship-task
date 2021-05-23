import axios from "axios";
import { KIDS_GAMES_ENDPOINT } from "./root-endpoints";

const fetchGames = async () =>{
    const response = await axios.get(KIDS_GAMES_ENDPOINT);
    return response;
}




const GAMESERVICE = {
    fetchGames
}

export default GAMESERVICE;