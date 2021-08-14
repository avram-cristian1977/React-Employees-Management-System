import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const MarketingDepChart = ({marketingDepAverageSalary, marketingDepAverageAge, marketingDepAverageRating}) => {

   

    const [marketingChartData, setMarketingChartData] = useState({})

   
    useEffect(()=>{
        marketingChart()
    }, [])

    const marketingChart = () => {

        setMarketingChartData({
            labels: [""],
            datasets: [
                {
                    label: "Average Salary",
                    data: [marketingDepAverageSalary.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average Rating",
                    data: [marketingDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average age",
                    data: [marketingDepAverageAge.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
            ]
        })
    }
    return <div>
       <Bar data={marketingChartData} options={{
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

export default MarketingDepChart