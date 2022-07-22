import React from "react";
import PropTypes from "prop-types"
import { createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    card: {
        fontSize: 20,
        border: "lightgrey solid 1px",
        borderRadius: 10,
        margin: 20,
        padding: 10,
        position: "relative",
        textAlign: "center",
        textTransform: "capitalize",
        width: 300,
        height: 550
    },

    image: {
        width: 280,
        paddingTop:20,
        borderRadius: "5%"
   
    },
    
    description: {
        fontSize:16,
        padding: 15,
        textAlign: "justify",
        height: 180
    },

    price: {
        textAlign: "right",
        paddingRight: 15
    }
});


export default function TripItem({image, name, description, price}) {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <div className={classes.card}>
                <img className={classes.image} src={image} alt={name} aria-label={name}/>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <h4 className={classes.price}>$ {price}</h4>
            </div>
                
        </div>
    )
}

TripItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number,
}