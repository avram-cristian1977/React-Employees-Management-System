import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const RatingChart = ({financeDepAverageRating,marketingDepAverageRating,technicalDepAverageRating,}) => {
const [ratingChartData, setRatingChartData] = useState({})


    useEffect(() => {
        ratingChart()
    }, [])

    const ratingChart = () => {

        setRatingChartData({
            labels: [""],
            datasets: [
                {
                    label: "Finance",
                    data: [financeDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Marketing",
                    data: [marketingDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Technical",
                    data: [technicalDepAverageRating.toFixed(1)],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                
            ],
            
        })
    }
    return <div>
        <Bar data={ratingChartData} options={{
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

export default RatingChart