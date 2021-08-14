import classes from './ChartsAnimationLeft.module.css'


const ChartsAnimationLeft = () => {
    return <><div className={classes.leftSide}>

        <div className={classes.bars}>
            <div className={classes.blueBar}>&nbsp;<p className={classes.skill}>ambition</p></div>
            <div className={classes.greenBar}>&nbsp;<p className={classes.skill}>courage</p></div>
            <div className={classes.yellowBar}>&nbsp;<p className={classes.skill}>talent</p></div>
            <div className={classes.brownBar}>&nbsp;<p className={classes.skill}>persuasivity</p></div>
            <div className={classes.orangeBar}>&nbsp;<p className={classes.skill}>action</p></div>
        </div>
       
    </div>


    </>
}
export default ChartsAnimationLeft