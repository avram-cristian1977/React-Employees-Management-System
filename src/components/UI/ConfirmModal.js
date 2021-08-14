import classes from './ConfirmModal.module.css'
const ConfirmModal = (props) => {
    return <div className={classes.modalContainer}>
        <div className={classes.modalWrapper}>
            <p className={classes.modalDialog}>Fire this employee?</p>
            <div className={classes.modalAction}>
                <button onClick={props.onSaveCloseModalDialog}>No</button>
                <button onClick={() => {
                    props.onSaveCloseModalDialog()
                    props.onDeleteFromDb(props.employee.id)
                }}>Yes</button>
            </div>
        </div>
    </div>
}

export default ConfirmModal