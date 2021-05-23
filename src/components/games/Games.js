// react AND hooks
import React, { useEffect, useState } from 'react';

// redux hooks
import { useSelector } from 'react-redux';


//components
import { GamesCard } from './GamesCard';


// styles
import './gamesCard.css';

export const Games = () => {
    // GET ALL GAMES FROM THE REDUX
    const { games, searchQuery, searchResult, filterResult } = useSelector(state => state.availableGames)

    const noResult = searchResult?.length === 0;

    const [renderMode, setRenderMode] = useState(null)

    // 1ST RENDER
    useEffect(() => {
        if(games){ // SET ALL games TO renderMode AS DEFAULT
            setRenderMode(games)
        }
    }, [games])


    //  2ND RENDER WHEN THERE IS A SEARCH
    useEffect(() => {
        if(searchResult){// IF THE USER MADE A SEARCH, RENDER THE RESULT
            setRenderMode(searchResult)
        }
        return () => { // IF THE COMPONENT IS OFF, CANCEL THE SEARCH AND RESET IT BACK TO GAMES
            setRenderMode(games)
        }
    }, [searchResult, games])

    // 3RD RENDER WHEN THERE IS A FILTER
    useEffect(() => {
        if(filterResult){// IF THE USER MADE A SEARCH, RENDER THE RESULT
            setRenderMode(filterResult)
        }
        return () => { // IF THE COMPONENT IS OFF, CANCEL THE FILTER AND RESET IT BACK TO GAMES
            setRenderMode(games)
        }
    }, [filterResult, games])

    return (
        <React.Fragment>
            <section className="games__container">
                <div className="games_wrapper">

                    {/* IF THERE IS NO SEARCH RESULT RENDER A MESSAGE */}
                    <div className="result_message">
                        { noResult && <p>Opps Game titled {searchQuery} does not exist</p> }
                    </div>


                    {// ONLY RUN THE MAP FUNCTION WHEN THERE ARE GAMES IN THE REDUX STORE
                        renderMode?.map(({ GameTitle, GameDescription, GameImage })=>{
                            return(
                                <GamesCard 
                                    key={GameTitle}
                                    GameTitle = { GameTitle }
                                    GameDescription = { GameDescription }
                                    GameImage = { GameImage }
                                />
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}
