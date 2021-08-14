import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const FinancialDepChart = ({financeDepAverageSalary, financeDepAverageAge, financeDepAverageRating}) => {

    console.log(financeDepAverageSalary, financeDepAverageAge, financeDepAverageRating)

    const [finanlcialChartData, setFinancialChartData] = useState({})

    useEffect(()=>{
        financialChart()
    }, [])

    const financialChart = () => {

        setFinancialChartData({
            labels: [""],
            datasets: [
                {
                    label: "Average Salary",
                    data: [financeDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average Rating",
                    data: [financeDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average age",
                    data: [financeDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
            ]
        })
    }
    return <div>
       <Bar data={finanlcialChartData} options={{
        scales: {
            y: [{ beginAtZero: true }, { barPercentage: 0.9 }]
        },
        plugins: {
            title: {
                display: true,
                text: 'Customize your Chart by checks'
            }
        }
    }} />
    </div>
}

export default FinancialDepChart