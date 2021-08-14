import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'




const GlobalChart = ({empsName, empsSalary, empsRating, empsAge}) =>{
    console.log({empsRating})

    const [globalChartData, setGlobalChartData] = useState({})
    
    useEffect(() => {
        globalChart()
    }, [])


    const globalChart = () => {

        setGlobalChartData({
            labels: empsName,
            datasets: [
                {
                    label: "Salary",
                    data: empsSalary,
                    backgroundColor: [
                        'rgba(75, 192, 0, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Rating",
                    data: empsRating,
                    backgroundColor: [
                        'rgba(75, 0, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Age",
                    data: empsAge,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderWidth: 1
                },
            ]
        })
    }


    return <div>

    <Bar data={globalChartData} options={{
        scales: {
            y: [{ beginAtZero: true }, { barPercentage: 0.9 }]
        },
        plugins: {
            title: {
                display: true,
                text: 'Customize your Chart by check'
            }
        }
    }} />


</div>
}

export default GlobalChart