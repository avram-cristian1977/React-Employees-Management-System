import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const SalaryChart = ({financeDepAverageSalary,marketingDepAverageSalary,technicalDepAverageSalary,}) => {
const [salaryChartData, setSalaryChartData] = useState({})


    useEffect(() => {
        salaryChart()
    }, [])

    const salaryChart = () => {

        setSalaryChartData({
            labels: [""],
            datasets: [
                {
                    label: "Finance",
                    data: [financeDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Marketing",
                    data: [marketingDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Technical",
                    data: [technicalDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                
            ],
            
        })
    }
    return <div>
        <Bar data={salaryChartData} options={{
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

export default SalaryChart