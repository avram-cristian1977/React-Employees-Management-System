import { useState } from 'react'
import banner from '../assets/images/bannerEmps.jpg'
import classes from './EmployeesList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { Table, Header, Segment, Grid, Input } from 'semantic-ui-react'
import Employee from '../components/Employee'
import Charts from '../components/Charts'
import LoadingSpinner from './UI/LoadingSpinner'


const EmployeesList = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [depSearchChoice, setDepSearchChoice] = useState("")
  return <>
 
     
<Charts employeeList={props.employeeList}/>
       
        <div className={classes.searchBar}>
            <div className={classes.searchInputWrapper}>
                <Input icon='users' iconPosition='left'
                    placeholder='Search employee...' onChange={ev => setSearchTerm(ev.target.value)} />
            </div>
        </div>
        <div className={classes.depSelect}>
            <select onChange={ev => setDepSearchChoice(ev.target.value)}>
                <option value="" selected >Search all departments</option>
                <option value="finance" >Finance</option>
                <option value="marketing">Marketing</option>
                <option value="Technical">Technical</option>
            </select>

        </div>

        <Grid.Row columns="1">
            <Grid.Column >
                {props.employeeList.length === 0 ?
                    <Segment >


                        <Header textAlign="center">
                            <div className={classes.loadingMessages}>
                                {/* <h4>No employee hired. Please hire employees.</h4>  */}
                                <LoadingSpinner />
                            </div>
                        </Header>

                    </Segment> : <Segment>

                        <Table celled singleLine textAlign="center"  >
                            <Table.Header>
                                <Table.Row  >
                                    <Table.HeaderCell>First Name</Table.HeaderCell>
                                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                                    <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                                    <Table.HeaderCell>Place of Birth</Table.HeaderCell>
                                    <Table.HeaderCell>Gender</Table.HeaderCell>
                                    <Table.HeaderCell>Department</Table.HeaderCell>
                                    <Table.HeaderCell>Salary</Table.HeaderCell>
                                    <Table.HeaderCell>Rating</Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header >
                            {
                                props.employeeList.filter(val => {
                                    if (searchTerm === "") {
                                        return val
                                    } else {
                                        val = val.LastName.toLowerCase().includes(searchTerm.toLowerCase())
                                        return val
                                    }
                                }).filter(dep => {
                                    if (depSearchChoice === "") {
                                        return dep
                                    } else {
                                        dep = dep.Department.toLowerCase().includes(depSearchChoice.toLowerCase())
                                        return dep
                                    }
                                }).map((employee) => {
                                    return <>

                                        <Employee
                                            scrollToTop={props.scrollToTop}
                                            employee={employee}
                                            onSaveFromListDeleteClick={props.onSaveDeleteClick}
                                            onSaveFromListUpdateClick={props.onSaveUpdateClick}
                                        />
                                    </>
                                })
                            }
                        </Table>
                    </Segment>}
            </Grid.Column>
        </Grid.Row>
        <button onClick={props.scrollToTop} className={classes.scrlTopBtn}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </button>
        <div className={classes.banner}>
            <img src={banner} alt="banner" className={classes.imgBanner} />
        </div>
    </>
}
export default EmployeesList