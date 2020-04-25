import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../apiCalls/index'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'

export default function Charts({ data : { confirmed, deaths, recovered }, country }) {

    const [ dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

            fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length !== 0
        ?(
            <Line
            data = {{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
            />) : null
        
    );
    if(country){
        console.log(confirmed.value, recovered.value, deaths.value)
    }

    const barChart = (
        confirmed
        ?(
            <Bar
            
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'people',
                    backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                }],
                data: [confirmed.value, recovered.value, deaths.value]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
            
            />
        ) : null
    )

    return (
        <div className={styles.container}>
            {country? barChart : lineChart}
        </div>
    )
}
