import { Table, Button } from 'semantic-ui-react'
import classes from './EmployeesList.module.css'
import ConfirmModal from './UI/ConfirmModal'
import { useState } from 'react'

import ReactDOM from 'react-dom'


const Employee = (props) => {

    const [isDeleting, setIsDeleting] = useState(false)


    const openModalDialog = () => {
        setIsDeleting(true)
        props.scrollToTop()


    }

    const closeModalDialog = () => {
        setIsDeleting(false)
    }

    const ModalRoot = props => {
        return <>  {
            isDeleting && <ConfirmModal employee={props.employee}
                onSaveCloseModalDialog={closeModalDialog}
                onDeleteFromDb={props.onDeleteFromDb} />
        }</>
    }

    return <>
        {ReactDOM.createPortal(<ModalRoot employee={props.employee} onDeleteFromDb={props.onSaveFromListDeleteClick} />, document.getElementById("modal-root"))}
        
        <Table.Body  key={props.employee.id}>
            <Table.Row  className={classes.row} >
                <Table.Cell  className={classes.cell} textAlign="left" >
                    {props.employee.FirstName}
                </Table.Cell>
                <Table.Cell className={classes.cell} textAlign="left">
                    {props.employee.LastName}
                </Table.Cell>
                <Table.Cell textAlign="left">
                    {props.employee.DateOfBirth}
                </Table.Cell >
                <Table.Cell textAlign="left">
                    {props.employee.PlaceOfBirth}
                </Table.Cell >
                <Table.Cell textAlign="left">
                    {props.employee.Gender}
                </Table.Cell>
                <Table.Cell textAlign="left">
                    {props.employee.Department}
                </Table.Cell>
                <Table.Cell textAlign="left" >
                    {props.employee.Salary}
                </Table.Cell>
                <Table.Cell 
                    className={props.employee.Rating > 80 ? classes.greenBadge :
                        props.employee.Rating > 50 ? classes.orangeBadge :
                            classes.redBadge} >
                    <div>
                        {props.employee.Rating}
                    </div>
                </Table.Cell>
                <Table.Cell >
                    <Button size='mini' onClick={() => props.onSaveFromListUpdateClick(props.employee)}
                        color="blue">Update</Button>
                </Table.Cell>
                <Table.Cell >
                    <Button size='mini' onClick={openModalDialog}
                        color="red">Fire</Button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </>
}

export default Employee