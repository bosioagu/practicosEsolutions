import React, { useContext } from "react";
import { createUseStyles} from 'react-jss';
import { TripContext } from "../TripMaker/TripMaker";


const useStyles = createUseStyles({
    wrapper: {
       borderTop: "black solid 1px",
       padding: "0 20px 0 20px",
       display: "flex",
       alignItems: "center"
    },
    list: {
       display: "flex",
       flexDirection: "column",
       flexWrap: "wrap",
       fontSize: 20,
       maxHeight: 40,
       "& li": {
            width: 130,
            padding:1,
            listStyle: "none",
       }
    },
});


export default function TripSummary() {
    const classes = useStyles()
    const { trips } = useContext(TripContext)
    return(
        <div className={classes.wrapper}>
            <h3>Carrito: </h3>
            
            <ul className= {classes.list}>
                {trips.map((name, i) => (
                    <li key={i}>{name}</li>
                ))}
            </ul>
        </div>
    )
}