import React,{ useState, useEffect } from 'react'
import './Chart.css'
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { token } from '../../Login/Utility/authenticatinReducer';

function PieChart() {

  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30, 40],
        backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green'
        ]
    },
    ],
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green'
    ],
});

  const fetchData = () => {
    const label = [];
    const data = [];

    axios.get("https://swar-music.herokuapp.com/api/users/country/count/all",{
      headers: {
        'Authorization':  token()
      }}).then(
        (res) => {
          for (let i = 0; i < res.data.length; i++) {
            label.push(res.data[i].country);
            data.push(res.data[i].users)
        }
        setData(
          {
              datasets: [{
                  data: data,
                  backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green'
                  ]
              },
              ],
              labels: label,
          }
      )
          return res.data;
    
        }
      ).catch((err) => {
      })

    
}

useEffect (() =>{
  fetchData();
}, [])


  return (
      <div style={{width: '100%', height: '100%'}}>
            <Doughnut data={data}
                      />
        </div>
  )
}

export default PieChart;
