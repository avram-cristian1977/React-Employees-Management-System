import classes from './Homepage.module.css'
import empImg from '../assets/images/emp1.jpg'

import ChartsAnimationLeft from '../components/UI/ChartsAnimationLeft'
import ChartsAnimationRight from '../components/UI/ChartsAnimationRight'


const Homepage = () => {
    return <>
        <div className={classes.frontAlign}>
            <ChartsAnimationLeft />
        
            <div>
            <h1 className={classes.frontTitle} >Be wize. Analize.</h1>
            <div className={classes.imageWrapper}>
                <img src={empImg} alt="emps"  />
            </div>
            </div>
            <ChartsAnimationRight />
            
        </div>
    </>
}

export default Homepage