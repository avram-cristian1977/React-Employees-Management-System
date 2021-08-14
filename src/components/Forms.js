import classes from './Forms.module.css'
import { useState, useEffect } from 'react'
import firebse from '../firebase'
import { Container, Grid, Segment, Form, Button } from 'semantic-ui-react'
import EmployeesList from './EmployeesList'
import HireSuccessModal from '../components/UI/HireSuccessModal'
import UpdateModal from './UI/UpdateModal'
import ErrorValidatingModal from './UI/ErrorValidatingModal'


const Forms = () => {
    const [dateIsTouched, setDateIsTouched] = useState(false)
    const [employeeList, setEmployeesList] = useState([])
    const [isHiring, setIsHiring] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [errorValidatingMsg, setErrorValidatingMsg] = useState("")

    useEffect(() => {
        const dbEmpRef = firebse.database().ref('/EmployeesInfos');
        dbEmpRef.on("value", response => {
            const result = response.val()
            let employees = []
            for (let id in result) {
                employees.push({
                    id: id,
                    FirstName: result[id].FirstName,
                    LastName: result[id].LastName,
                    DateOfBirth: result[id].DateOfBirth,
                    PlaceOfBirth: result[id].PlaceOfBirth,
                    Gender: result[id].Gender,
                    Department: result[id].Department,
                    Salary: result[id].Salary,
                    Rating: result[id].Rating,
                    Age: result[id].Age
                })
            }
            setEmployeesList(employees)

        })
    }, [])
    // a added employee
    const [aFirstName, setAfirstName] = useState("")
    const [aLastName, setAlastName] = useState("")
    const [aDateOfBirth, setAdateOfBirth] = useState(null)
    const [aPlaceOfBirth, setAplaceOfBirth] = useState("")
    const [aGender, setAgender] = useState("")
    const [aDepartment, setAdepartment] = useState("")
    const [aSalary, setAsalary] = useState(0)
    const [aRating, setArating] = useState(0)
    //u updated employee
    const [uFirstName, setUfirstName] = useState("")
    const [uLastName, setUlastName] = useState("")
    const [uDateOfBirth, setUdateOfBirth] = useState(Date.now())
    const [uPlaceOfBirth, setUplaceOfBirth] = useState("")
    const [uGender, setUgender] = useState("")
    const [uDepartment, setUdepartment] = useState("")
    const [uSalary, setUsalary] = useState(0)
    const [userId, setUserId] = useState("")
    const [uRating, setUrating] = useState(0)



    const addEmployeeHandler = ev => {
        ev.preventDefault()
        scrollToTop()
        if (aFirstName.trim().length === 0 || aLastName.trim().length === 0 ||
            aGender.trim().length === 0 || aDepartment.trim().length === 0 ||
            aPlaceOfBirth.trim().length === 0) {
            console.log("full fields are required")
            setErrorValidatingMsg("All fields are required")

            return
        }
        if (!isNaN(aFirstName) || !isNaN(aLastName)) {
            console.log("name cant be a number")
            setErrorValidatingMsg("Name cannot be a number")
            return
        }
        if (dateIsTouched === false) {
            console.log("please set date")
            setErrorValidatingMsg("Please set the date of birth")
            return
        }


        const dbEmpRef = firebse.database().ref('/EmployeesInfos');
        const currentYear = new Date().getFullYear()
        const birthYear = parseInt(aDateOfBirth.slice(0, 4))
        const age = currentYear - birthYear

        let employee = {
            FirstName: aFirstName,
            LastName: aLastName,
            DateOfBirth: aDateOfBirth,
            PlaceOfBirth: aPlaceOfBirth,
            Gender: aGender,
            Department: aDepartment,
            Salary: aSalary,
            Rating: aRating,
            Age: age
        }
        dbEmpRef.push(employee)
        setAfirstName("")
        setAlastName("")
        setAdateOfBirth("")
        setAplaceOfBirth("")
        setAgender("")
        setAdepartment("")
        setAsalary(0)
        setIsHiring(true)

    }

    const handleUpdateUser = () => {
        const dbEmpRef = firebse.database().ref('/EmployeesInfos').child(userId)
        dbEmpRef.update({
            FirstName: uFirstName,
            LastName: uLastName,
            DateOfBirth: uDateOfBirth,
            PlaceOfBirth: uPlaceOfBirth,
            Gender: uGender,
            Department: uDepartment,
            Salary: uSalary,
            Rating: uRating
        })
        setIsUpdating(true)
        scrollToTop()
    }

    const handleUpdateClick = employee => {
        setUfirstName(employee.FirstName)
        setUlastName(employee.LastName)
        setUdateOfBirth(employee.DateOfBirth)
        setUplaceOfBirth(employee.PlaceOfBirth)
        setUgender(employee.Gender)
        setUdepartment(employee.Department)
        setUsalary(employee.Salary)
        setUserId(employee.id)
        setUrating(employee.Rating)
        scrollToTop()

    }

    const handleDeleteClick = id => {
        const dbEmpRef = firebse.database().ref('/EmployeesInfos').child(id)
        dbEmpRef.remove()
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const closeHiringModal = () => {
        setIsHiring(false)
    }

    const closeUpdatingModal = () => {
        setIsUpdating(false)
    }

    const closeErrorModal = () => {
        setErrorValidatingMsg(false)
    }



    return <>

        {isHiring && <HireSuccessModal onCloseHiringModal={closeHiringModal} />}
        {isUpdating && <UpdateModal onCLoseUpdatingModal={closeUpdatingModal} />}
        {errorValidatingMsg && <ErrorValidatingModal
            error={errorValidatingMsg}
            onCloseErrorModal={closeErrorModal} />}

        <div className="ui hidden divider ">
            <Container>
                <h1 className={classes.title}>Employees Management System</h1>
                <Grid>
                    <Grid.Row columns="2">
                        <div className={classes.dividerContainer}>
                            <Grid.Column className={classes.column}>
                                <Segment >
                                    <Form>
                                        <div className={classes.subtitle}>
                                            <h4>
                                                Hiring Data Form
                                            </h4>
                                        </div>
                                        <Form.Field required>
                                            <label>First Name</label>
                                            <input placeholder="First Name"
                                                value={aFirstName}
                                                onChange={ev => setAfirstName(ev.target.value)} />
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Last Name</label>
                                            <input placeholder="Last Name"
                                                value={aLastName}
                                                onChange={ev => setAlastName(ev.target.value)}
                                            />
                                        </Form.Field>
                                        <Form.Field required defaultValue={() => Date.now()} >
                                            <label>Date of Birth</label>
                                            <input type="date" min="1900-01-01" max="2016-06-06"
                                                value={aDateOfBirth}
                                                className={classes.datePicker}

                                                onChange={ev => setAdateOfBirth(ev.target.value)}
                                                onFocus={() => setDateIsTouched(true)} />
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Place of Birth</label>
                                            <input type="text" placeholder="Ex: Craiova"
                                                value={aPlaceOfBirth}
                                                onChange={ev => setAplaceOfBirth(ev.target.value)} />
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Gender</label>
                                            <select name="gender" id="gender"
                                                value={aGender}
                                                onChange={ev => setAgender(ev.target.value)}>
                                                <option value="" disabled selected>Select gender</option>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                            </select>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Department</label>
                                            <select name="department" defaultValue="" id="department"
                                                value={aDepartment}
                                                onChange={ev => setAdepartment(ev.target.value)}>
                                                <option value="" disabled selected>Select department</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Technical">Technical</option>
                                            </select>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Salary</label>
                                            <input type="text" placeholder="$"
                                                value={aSalary}
                                                onChange={ev => setAsalary(ev.target.value)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Rating</label>
                                            <div className={classes.rating}>
                                                <input type="range"
                                                    value={aRating}
                                                    onChange={ev => setArating(ev.target.value)}
                                                />
                                                <p>{aRating}</p>
                                            </div>
                                        </Form.Field>
                                        <Form.Field>
                                            <Button positive onClick={addEmployeeHandler}>Hire</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column className={classes.column}>
                                <Segment >
                                    <Form>
                                        <div className={classes.subtitle}>
                                            <h4>
                                                Updating Data Form
                                            </h4>
                                        </div>
                                        <Form.Field>
                                            <label>First Name</label>
                                            <input placeholder="First Name" disabled
                                                value={uFirstName}
                                                onChange={ev => setUfirstName(ev.target.value)} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name</label>
                                            <input placeholder="Last Name"
                                                value={uLastName}
                                                onChange={ev => setUlastName(ev.target.value)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Date of Birth</label>
                                            <input type="date" disabled
                                                value={uDateOfBirth}
                                                onChange={ev => setUdateOfBirth(ev.target.value)} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Place of Birth</label>
                                            <input type="text" placeholder="Ex: Craiova" disabled
                                                value={uPlaceOfBirth}
                                                onChange={ev => setUplaceOfBirth(ev.target.value)} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Gender</label>
                                            <select selected="selected" name="gender" id="gender" disabled
                                                value={uGender}
                                                onChange={ev => setUgender(ev.target.value)}>
                                                <option value="">Select gender</option>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                            </select>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Department</label>
                                            <select name="department" defaultValue="" id="department"
                                                value={uDepartment}
                                                onChange={ev => setUdepartment(ev.target.value)}>
                                                <option value="" disabled selected>Select department</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Technical">Technical</option>
                                            </select>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Salary</label>
                                            <input type="text" placeholder="$"
                                                value={uSalary}
                                                onChange={ev => setUsalary(ev.target.value)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Rating</label>
                                            <div className={classes.rating}>
                                                <input type="range"
                                                    value={uRating}
                                                    onChange={ev => setUrating(ev.target.value)}
                                                />
                                                <p>{uRating}</p>
                                            </div>
                                        </Form.Field>

                                        <Form.Field>
                                            <Button positive onClick={handleUpdateUser}>Save</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </div>
                    </Grid.Row>
                    <EmployeesList
                        employeeList={employeeList}
                        onSaveUpdateClick={handleUpdateClick}
                        onSaveDeleteClick={handleDeleteClick}
                        scrollToTop={scrollToTop}
                    />
                </Grid>
            </Container>
        </div>

    </>
}

export default Forms