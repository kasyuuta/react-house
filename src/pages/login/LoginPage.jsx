import css from "../login/LoginPage.module.css"
import Title from "../../components/title/Title";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { authSliceAction } from "../../redax/authSlice"



function LoginPage(){
    const [login, setLogin] = useState ("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    const submit = (e) =>{
        e.preventDefault();
        alert(login + password)
        if(login === 'admin' && password === 'admin'){
           dispatch( authSliceAction.setAuth(true))
        }  else{
            setError("Login or Password is incorect. Please try again")
        }
    };

    const handleLoginChange = (e) =>{
        setLogin(e.target.value)
        setError("")
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
        setError("")
    }

    return (
        <div className="page">
            <Title position="center"> Войти </Title>
            <form className={css.form} onSubmit={submit}>
                <p>Login</p>
                <input value={login} onChange={handleLoginChange} className={css.input} type="text" />
                <p>password</p>
                <input value={password} onChange={handlePasswordChange} className={css.input} type="Password" />
                <button className={css.button}>Войти </button>
                <div className="error-message">{error}</div>
            </form>
           

        </div>
    )  
}


export default LoginPage