import React from "react";
import { createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
       borderTop: "black solid 1px",
       padding: "0 20px 0 20px",
       display: "flex",
       alignItems: "center"
    },
    
});

const promos = [
    {
        id: 1,
        description: "Viaje a las Bahamas con un 10% de descuento"
    },
    {
        id: 2,
        description: "Ultimos lugares al crucero por el Caribe"
    },
]


export default function TripPromo(){
    const classes = useStyles()

    return ( 
        <div className={classes.wrapper}>
         {promos.map((promo) => (
            setInterval(() =>(
              console.log(promo)
            ), promo* 8000)))
         }
        </div>  
    )
    
}

