import React, {useReducer, createContext} from "react";
import TripBuilder from "../TripBuilder/TripBuilder";
import TripSummary from "../tripSummary/TripSummary";
import TripButton from "../tripButton.js/TripButton";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

    cancelButton: {
        marginTop: 20,
        marginRight: 250,
        display: "flex",
        justifyContent: "flex-end",
    },
});

export const TripContext =  createContext()

function reducer(state, type){
   return [...state, type];
}

export default function TripMaker() {
    const classes = useStyles();
    const [trips, setTrips] = useReducer(reducer, [])

    return(
        <TripContext.Provider value={{trips, setTrips}}> 
            <div className={classes.cancelButton}>
                <TripButton  type= "CANCELAR"/>
            </div>
            <TripBuilder/>
            <TripSummary/>
        </TripContext.Provider>
    )
}