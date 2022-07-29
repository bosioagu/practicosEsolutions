import React from "react";
import TripItem from "../TripItem/TripItem";
import { createUseStyles } from 'react-jss';
import TripButton from "../tripButton/TripButton";


const useStyles = createUseStyles({

    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: [10,50],
        justifyContent: "center",
    },
});


const trips = [
    {
        id:1,
        image: "img01.jpg",
        name: "Calafate",
        description:"El Calafate es una ciudad cerca del borde del Campo de Hielo Patagónico Sur en la provincia argentina de Santa Cruz. Es conocida principalmente como el acceso al Parque Nacional Los Glaciares, hogar del enorme glaciar Perito Moreno, cuyo dinámico paisaje de hielo es popular para el excursionismo y el turismo." ,
        price: 70000,
        type: "PROMO",
    },
    {
        id:2,
        image: "img02.jpg",
        name: "Buzios",
        description: "Armação dos Búzios (o Búzios) es un centro turístico brasileño ubicado en una península en el océano, al este de Río de Janeiro. Es conocido como un lujoso destino vacacional con muchas playas. Estas incluyen Ferradura, en una tranquila bahía en forma de herradura con deportes acuáticos, y Geribá, un sitio popular para practicar surf.",
        price: 200000,
        type: "RESERVAR",
    },
    {
        id:3,
        image: "img03.jpg",
        name: "Iguazú",
        description: "Las cataratas del Iguazú, llamadas popularmente en Argentina como «Cataratas» o «Cataratas del Iguazú», son un conjunto de cataratas que se localizan sobre el río Iguazú, en el límite entre la provincia argentina de Misiones y el estado brasileño de Paraná.",
        price: 60000,
        type: "COMPRAR",
    },
    
]

export default function TripBuilder() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            {trips.map((trip, i) => (
                <div>
                    <TripItem                
                        key={i}
                        image={__dirname + "images/" + trip.image}
                        name={trip.name}
                        price={trip.price}
                        description={trip.description}
                    />
                    <TripButton
                        type={trip.type}
                        name={trip.name}
                    />
                </div>
            ))}
        </div>

    )
}