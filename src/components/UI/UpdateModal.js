import classes from "./UpdateModal.module.css"


const UpdateModal = (props) => {
    return <div className={classes.modalContainer}>
    <div className={classes.modalWrapper}>
        <p className={classes.modalDialog}>Updated successfully</p>
        <div className={classes.modalAction}>
            <button onClick={props.onCLoseUpdatingModal}>OK!</button>
            
        </div>
    </div>
</div>
}

export default UpdateModal