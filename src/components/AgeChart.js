import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const AgeChart = ({financeDepAverageAge,marketingDepAverageAge,technicalDepAverageAge,}) => {
const [ageChartData, setAgeChartData] = useState({})

console.log(financeDepAverageAge);
    useEffect(() => {
        ageChart()
    }, [])

    const ageChart = () => {

        setAgeChartData({
            labels: [""],
            datasets: [
                {
                    label: "Finance",
                    data: [financeDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Marketing",
                    data: [marketingDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Technical",
                    data: [technicalDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                
            ],
            
        })
    }
    return <div>
        <Bar data={ageChartData} options={{
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

export default AgeChart