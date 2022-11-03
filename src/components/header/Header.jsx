import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import  css from "./Header.module.css";
import { authSliceAction } from "./../../redax/authSlice";


function Header() {
    const isAuth = useSelector((state) =>  state.auth.isAuth)
    console.log("HEADER COMPONENT:", isAuth);
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch (authSliceAction.logout());
    }
    return (
        <header className={css.wrapper}>
         <Link to="" className={css.logo}> LOGO </Link>
            <div className={css.links}>
                <Link to="/about"> О нас </Link>
                <Link to="/comtacts">Контакты </Link>
               

                {isAuth ? (
                    <>
                        <Link to="/dashboard">Кабинет</Link>
                        <button onClick={handleLogout}> Выйти</button>
                    </>
                    
                   ):(
                    <Link to="/login">Войти </Link>
                ) 
                }
                
                
            </div>
        </header>
    )
}

export default Header