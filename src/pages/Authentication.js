import classes from './Authentication.module.css'
import { useState } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Authentication = () => {


    const dispatch = useDispatch()
    const history = useHistory()


    const [isRegistered, setIsRegistered] = useState(true);
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsProccessed, setFormIsProccessed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const enteredEmailHandler = (ev) => {
        setEnteredEmail(ev.target.value)
    }

    const enteredPasswordHandler = (ev) => {
        setEnteredPassword(ev.target.value)
    }

    const optionHandler = (ev) => {
        ev.preventDefault()
        setIsRegistered(prev => !prev);
    }

    const submitHandler = ev => {
        setIsLoading(true)
        ev.preventDefault()
        setFormIsProccessed(true)
        if (enteredPassword.length < 6) {
            setPasswordIsValid(true)
            return
        }

        let url;
        if (isRegistered) {
            console.log("IN")
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqKi0N4fapTLqXMyJJ4SaK7Olp4wsKLSc'
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqKi0N4fapTLqXMyJJ4SaK7Olp4wsKLSc'

        }
        fetch(url,
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(response => {
                console.log(response)
                console.log("IN")
                setIsLoading(false)
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(data => {
                        let errorMessage = "Auth failed"
                        throw new Error(errorMessage)
                    })
                }
            }).then(data => {
                console.log(data)
                const myToken = data.idToken
                dispatch({ type: "login", payload: myToken })
                history.replace('/')
                console.log("token", myToken);

            }).catch(err => {
                alert(err.message)
            })
        setEnteredEmail("")
        setEnteredPassword("")
    }

    return <>
        <form className={classes.formWrapper} onSubmit={submitHandler}>
            <h2 className={classes.panelTitle}>Authentication Panel</h2>
            <div className={classes.emailAddressField}>
                <label>E-mail </label>
                <input placeholder="e.g. john@gmail.com" type="email" value={enteredEmail} onChange={enteredEmailHandler} />
            </div>
            <div className={classes.passwordField} >
                <label>Password </label>
                <input placeholder="6 digits minimum" type="password" autoComplete="on" value={enteredPassword} onChange={enteredPasswordHandler} />
            </div>

            {passwordIsValid && formIsProccessed && <p className={classes.authError}>password must be at least 6 characters long</p>}
            <p onClick={optionHandler} className={classes.authOption}>{!isRegistered ? "I already have an account" : "Create new account"}</p>
            {!isLoading && <button className={classes.authBtn}>{isRegistered ? "Login" : "Sign up"}</button>}
            {isLoading && <div className={classes.spinnerWrapper}><LoadingSpinner /></div>}
        </form>
    </>
}

export default Authentication