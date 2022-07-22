import React, { useContext } from "react";
import { createUseStyles} from 'react-jss';
import UserContext from "../../context/User/User";
import logo from "../../logo.png"


const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "black solid 1px",
        padding: [25, 50],
        justifyContent: "space-between",
        alignItems: "center",        
    },
    logo: {
       height: 80
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
            <div>
                <img className={classes.logo} src={logo} alt={logo}/>
            </div>
            <div className={classes.message}>
                Bienvenido {user.name}
            </div>
        </div>
    )
}