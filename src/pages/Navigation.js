import classes from './Navigation.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import bec from '../assets/images/bec.jpg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Header = () => {


    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const history = useHistory()
    const logoutHandler = () => {
        dispatch({ type: "logout" })
        history.replace('/auth')
    }


    return <header className={classes.header}>

        <nav className={classes.navBar}>
            <NavLink to="/ems" className={classes.navTitle}>Employees Management System</NavLink>
            <div className={classes.logoWrapper}>

                <div className={classes.imageWrapper}>
                    <img src={bec} alt="emps" />
                </div>
                <p>Web Data Integration</p>
            </div>
           


            <div className={classes.actions}>


                <ul >
                    <NavLink activeClassName={classes.active} to="/home"><li>Home</li></NavLink>
                    {token &&
                        <NavLink activeClassName={classes.active} to="/ems"><li>EMS</li></NavLink>
                    }
                    {!token &&
                        <NavLink activeClassName={classes.active} to="/auth"><li>Authentication</li></NavLink>
                    }
                </ul>
                {token &&
                    <button onClick={logoutHandler} className={classes.logoutBtn}>Logout</button>
                }
            </div>
        </nav>
    </header>
}

export default Header