import classes from './HireSuccessModal.module.css'

const HireSuccessModal = (props) => {
    return <div className={classes.modalContainer}>
    <div className={classes.modalWrapper}>
        <p className={classes.modalDialog}>Hired successfully</p>
        <div className={classes.modalAction}>
            <button onClick={props.onCloseHiringModal}>OK!</button>
            
        </div>
    </div>
</div>
}

export default HireSuccessModal