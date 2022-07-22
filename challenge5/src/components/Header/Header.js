import React, { useContext } from "react";
import { createUseStyles} from 'react-jss';
import UserContext from "../../context/User/User";
import logo from "../../logo.png"


const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "black solid 1px",
        padding: [30, 50],
        justifyContent: "space-between"
        
    },
    logo: {
       height: 30
    },

    message: {
        fontSize: 30
    }
});

export default function Header() {
    const user = useContext(UserContext);
    const classes = useStyles();
    
    return(
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <img src={logo} alt={logo}/>
            </div>
            <div className={classes.message}>
                Bienvenido {user.name}
            </div>
        </div>
    )
}