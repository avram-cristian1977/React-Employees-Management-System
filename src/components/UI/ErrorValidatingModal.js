import classes from './ErrorValidatingModal.module.css'

const ErrorValidatingModal = (props) => {
    return <div className={classes.modalContainer}>
    <div className={classes.modalWrapper}>
        <p className={classes.modalDialog}>{props.error}</p>
        <div className={classes.modalAction}>
            <button onClick={props.onCloseErrorModal}>Close</button>
            
        </div>
    </div>
</div>
}

export default ErrorValidatingModal