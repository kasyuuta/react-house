import React from "react";
import css from "./Loader.module.css"

function Loader() {
    return(
        <div className={css.wrapper}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" 
            alt="loading" />
        </div>
    )
}

export default Loader