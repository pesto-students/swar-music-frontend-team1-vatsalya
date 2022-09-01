import React from 'react'
import './Chart.css'
import {Bar, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May','June','July','August','September', 'October','November','December'],
    datasets: [
      {
        label: 'Total Users By Month',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56,50,90,87,83,23,65,54]
      }
    ]
  }

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

function BarChart() {
  return (
    <div className='barChart'>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
{/* 
     <Doughnut data={data} /> */}

    </div>
  )
}

export default BarChart
