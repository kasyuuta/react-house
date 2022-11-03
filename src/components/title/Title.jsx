import React from "react";
import css from "./Titlee.module.css";

function Title(props){
    return(
        <div className={css.text}>{props.children}</div>
    )
}
export default Title