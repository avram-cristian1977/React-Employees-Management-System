import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const FinancialDepChart = ({technicalDepAverageSalary, technicalDepAverageAge, technicalDepAverageRating}) => {

    

    const [technicalChartData, setTechnicalChartData] = useState({})

    useEffect(()=>{
        technicalChart()
    }, [])

    const technicalChart = () => {

        setTechnicalChartData({
            labels: [""],
            datasets: [
                {
                    label: "Average Salary",
                    data: [technicalDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average Rating",
                    data: [technicalDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average age",
                    data: [technicalDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
            ]
        })
    }
    return <div>
       <Bar data={technicalChartData} options={{
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