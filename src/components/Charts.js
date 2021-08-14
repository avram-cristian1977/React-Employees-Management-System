import { useState } from 'react'
import classes from './EmployeesList.module.css'
import GlobalChart from '../components/GlobalChart'
import FinancialDepChart from '../components/FinancialDepChart'
import MarketingDepChart from '../components/MarketingDepChart'
import TechnicalDepChart from '../components/TechnicalDepChart'
import SalaryChart from '../components/SalaryChart'
import RatingChart from '../components/RatingChart'
import AgeChart from '../components/AgeChart'

const Charts = (props) => {

    const [showGlobalChart, setShowGlobalChart] = useState(false)
    const [showFinancialChart, setShowFinancialChart] = useState(false)
    const [showMarketingChart, setShowMarketingChart] = useState(false)
    const [showTechnicalChart, setShowTechnicalChart] = useState(false)
    const [showSalaryChart, setShowSalaryChart] = useState(false)
    const [showRatingChart, setShowRatingChart] = useState(false)
    const [showAgeChart, setShowAgeChart] = useState(false)


    const showGlobalChartHandler = (prev) => {
        setShowGlobalChart(prev => !prev)
    }
    const showFinancialHandler = (prev) => {
        setShowFinancialChart(prev => !prev)
    }
    const showMarketingHandler = (prev) => {
        setShowMarketingChart(prev => !prev)
    }

    const showTechnicalHandler = (prev) => {
        setShowTechnicalChart(prev => !prev)
    }
    const showSalaryChartHandler = (prev) => {
        setShowSalaryChart(prev => !prev)
    }
    const showRatingChartHandler = (prev) => {
        setShowRatingChart(prev => !prev)
    }
    const showAgeChartHandler = (prev) => {
        setShowAgeChart(prev => !prev)
    }

    //global stats
    const empsAge = []
    const empsRating = []
    const empsSalary = []
    const empsName = []

    //finance stats
    let employeesOfFinance = []

    let financeDepAverageSalary = 0
    let totalSalariesInFinanceList = []
    let financeDepSalariesSum = 0

    let financeDepAverageAge = 0
    let totalAgesInFinanceList = []
    let financeDepAgesSum = 0

    let financeDepAverageRating = 0
    let totalRatingsInFinanceList = []
    let financeDepRatingsSum = 0

    //marketing stats
    let employeesOfMarketing = []

    let marketingDepAverageSalary = 0
    let totalSalariesInMarketingList = []
    let marketingDepSalariesSum = 0

    let marketingDepAverageAge = 0
    let totalAgesInMarketingList = []
    let marketingDepAgesSum = 0

    let marketingDepAverageRating = 0
    let totalRatingsMarketingList = []
    let marketingDepRatingsSum = 0

    //technical stats
    let employeesOfTechnical = []

    let technicalDepAverageSalary = 0
    let totalSalariesInTechnicalList = []
    let technicalDepSalariesSum = 0

    let technicalDepAverageAge = 0
    let totalAgesInTechnicalList = []
    let technicalDepAgesSum = 0

    let technicalDepAverageRating = 0
    let totalRatingsTechnicalList = []
    let technicalDepRatingsSum = 0

    for (let i in props.employeeList) {
        empsAge.push(props.employeeList[i].Age)
        empsRating.push(props.employeeList[i].Rating)
        empsSalary.push(props.employeeList[i].Salary)
        empsName.push(
            props.employeeList[i].LastName.charAt(0).toUpperCase() +
            props.employeeList[i].LastName.slice(1)
            + " " +
            props.employeeList[i].FirstName.charAt(0).toUpperCase() +
            props.employeeList[i].FirstName.slice(1))

        if (props.employeeList[i].Department === "Finance") {
            employeesOfFinance.push(props.employeeList[i])
        }
        if (props.employeeList[i].Department === "Marketing") {
            employeesOfMarketing.push(props.employeeList[i])
        }
        if (props.employeeList[i].Department === "Technical") {
            employeesOfTechnical.push(props.employeeList[i])
        }
    }
    for (let i in employeesOfFinance) {
        totalSalariesInFinanceList.push(employeesOfFinance[i].Salary)
        financeDepSalariesSum += parseInt(employeesOfFinance[i].Salary)
        totalAgesInFinanceList.push(employeesOfFinance[i].Age)
        financeDepAgesSum += parseInt(employeesOfFinance[i].Age)
        totalRatingsInFinanceList.push(employeesOfFinance[i].Rating)
        financeDepRatingsSum += parseInt(employeesOfFinance[i].Rating)

    }

    for (let i in employeesOfMarketing) {
        totalSalariesInMarketingList.push(employeesOfMarketing[i].Salary)
        marketingDepSalariesSum += parseInt(employeesOfMarketing[i].Salary)
        totalAgesInMarketingList.push(employeesOfMarketing[i].Age)
        marketingDepAgesSum += parseInt(employeesOfMarketing[i].Age)
        totalRatingsMarketingList.push(employeesOfMarketing[i].Rating)
        marketingDepRatingsSum += parseInt(employeesOfMarketing[i].Rating)

    }

    for (let i in employeesOfTechnical) {
        totalSalariesInTechnicalList.push(employeesOfTechnical[i].Salary)
        technicalDepSalariesSum += parseInt(employeesOfTechnical[i].Salary)
        totalAgesInTechnicalList.push(employeesOfTechnical[i].Age)
        technicalDepAgesSum += parseInt(employeesOfTechnical[i].Age)
        totalRatingsTechnicalList.push(employeesOfTechnical[i].Rating)
        technicalDepRatingsSum += parseInt(employeesOfTechnical[i].Rating)

    }

    financeDepAverageSalary = financeDepSalariesSum / employeesOfFinance.length
    financeDepAverageAge = financeDepAgesSum / employeesOfFinance.length
    financeDepAverageRating = financeDepRatingsSum / employeesOfFinance.length

    marketingDepAverageSalary = marketingDepSalariesSum / employeesOfMarketing.length
    marketingDepAverageAge = marketingDepAgesSum / employeesOfMarketing.length
    marketingDepAverageRating = marketingDepRatingsSum / employeesOfMarketing.length

    technicalDepAverageSalary = technicalDepSalariesSum / employeesOfTechnical.length
    technicalDepAverageAge = technicalDepAgesSum / employeesOfTechnical.length
    technicalDepAverageRating = technicalDepRatingsSum / employeesOfTechnical.length

    return <>
        <div className={classes.chartWrapper}>
            <button className={classes.chartToggleBtn} onClick={showGlobalChartHandler}>
                {showGlobalChart ? "Hide Global Stats Chart" : "Show Global Stats Chart"}</button>
            {showGlobalChart && <GlobalChart
                empsName={empsName}
                empsSalary={empsSalary}
                empsAge={empsAge}
                empsRating={empsRating} />}

            <button className={classes.chartToggleBtn} onClick={showFinancialHandler}>
                {showFinancialChart ? "Hide Financial Stats Chart" : "Show Financial Stats Chart"}</button>
            {showFinancialChart && <FinancialDepChart
                financeDepAverageSalary={financeDepAverageSalary}
                financeDepAverageAge={financeDepAverageAge}
                financeDepAverageRating={financeDepAverageRating}
            />}

            <button className={classes.chartToggleBtn} onClick={showMarketingHandler}>
                {showMarketingChart ? "Hide Marketing Stats Chart" : "Show Marketing Stats Chart"}</button>
            {showMarketingChart && <MarketingDepChart
                marketingDepAverageSalary={marketingDepAverageSalary}
                marketingDepAverageAge={marketingDepAverageAge}
                marketingDepAverageRating={marketingDepAverageRating}
            />}

            <button className={classes.chartToggleBtn} onClick={showTechnicalHandler}>
                {showTechnicalChart ? "Hide Technical Stats Chart" : "Show Technical Stats Chart"}</button>
            {showTechnicalChart && <TechnicalDepChart
                technicalDepAverageSalary={technicalDepAverageSalary}
                technicalDepAverageAge={technicalDepAverageAge}
                technicalDepAverageRating={technicalDepAverageRating}
            />}

            <button className={classes.chartToggleBtn} onClick={showSalaryChartHandler}>
                {showSalaryChart ? "Hide Salary Stats Chart" : "Show Salary Chart"}</button>
            {showSalaryChart && <SalaryChart
                financeDepAverageSalary={financeDepAverageSalary}
                marketingDepAverageSalary={marketingDepAverageSalary}
                technicalDepAverageSalary={technicalDepAverageSalary}
            />}

            <button className={classes.chartToggleBtn} onClick={showRatingChartHandler}>
                {showRatingChart ? "Hide Rating Stats Chart" : "Show Rating Chart"}</button>
            {showRatingChart && <RatingChart
                financeDepAverageRating={financeDepAverageRating}
                marketingDepAverageRating={marketingDepAverageRating}
                technicalDepAverageRating={technicalDepAverageRating}
            />}

            <button className={classes.chartToggleBtn} onClick={showAgeChartHandler}>
                {showAgeChart ? "Hide Age Stats Chart" : "Show Age Chart"}</button>
            {showAgeChart && <AgeChart
                financeDepAverageAge={financeDepAverageAge}
                marketingDepAverageAge={marketingDepAverageAge}
                technicalDepAverageAge={technicalDepAverageAge}
            />}
        </div>
    </>
}
export default Charts

