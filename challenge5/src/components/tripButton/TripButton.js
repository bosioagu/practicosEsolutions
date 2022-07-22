import React, {useReducer, useContext } from "react";
import PropTypes from "prop-types";
import { createUseStyles} from 'react-jss';
import { TripContext } from "../TripMaker/TripMaker";
import UserContext from "../../context/User/User";


const useStyles = createUseStyles({
    wrapper: {
      display:"flex",
      flexDirection:"row-reverse",
      margin:20
    },
    button: {
        background:"none",
        width: 120,
        height: 35,
        border: "gray solid 1px",
        borderRadius: 8,
        cursor:"pointer"
    }    
});


function reducer(state, action){
    return [...state, action];
}

export default function TripButton({ type, name, email}) {
    const classes = useStyles();
    const user = useContext(UserContext);
    const { trips, setTrips } = useContext(TripContext);  
    const [state, dispatch] = useReducer(reducer,[])


    function typeButton(){
        switch(type){
            case "PROMO": 
                return setTrips(name);
            case "RESERVAR": 
                return (alert(`Send to ${user.email} \n ${user.name} Reservaste un viaje a ${name}`));
            case "COMPRAR": 
                return setTrips(name, alert(`Send to ${user.email} \n ${user.name} Compraste un viaje a ${name}`));
            case "CANCELAR":
                if (trips.includes("Calafate",-1)) {
                    return alert("Las Reservas no se pueden Cancelar")
                } else if (trips.includes ("Buzios",-1)){
                    return alert((`Send to ${user.email} \n ${user.name} Cancelaste tu reserva a ${name}`))
                } else if (trips.includes ("Iguazú",-1)){
                    trips.pop(0)
                    return setTrips(trips.pop(), alert(`Send to ${user.email} \n ${user.name} Cancelaste tu ultima Compra`))
                } else 
                    return alert("No puedes seguir eliminando")
            default:
                return setTrips(console.log("Error"))
            }}

     const action = () => dispatch({type:type},typeButton())

    return(
        <div className={classes.wrapper}>
            <button className={classes.button} onClick={action}> 
                {type}  
            </button>
        </div>
    )
}

TripButton.propTypes = {
    type: PropTypes.string.isRequired
}