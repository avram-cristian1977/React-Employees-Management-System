import classes from './ChartsAnimationRight.module.css'

const ChartsAnimationRight = () =>{
    return <>
    <div className={classes.bars}>
        <div className={classes.blueBar}>&nbsp;<p className={classes.skill}>team</p>&nbsp;<span><p>player</p></span></div>
        <div className={classes.greenBar}>&nbsp;<p className={classes.skill}>hard</p>&nbsp;<span><p>working</p></span></div>
        <div className={classes.yellowBar}>&nbsp;<p className={classes.skill}>communication</p></div>
        <div className={classes.brownBar}>&nbsp;<p className={classes.skill}>creativity</p></div>
        <div className={classes.orangeBar}>&nbsp;<p className={classes.skill}>social</p></div>
    </div>


</>
}

export default ChartsAnimationRight