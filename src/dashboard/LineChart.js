import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

// var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
// gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
// gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var gradientFill = ctx.createLinearGradient(100, 0, 500, 0);
gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
gradientFill.addColorStop(1, "rgba(245, 255, 245, 1)");



const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
          datasets: [
            {
              label: '# of votes',
              data: [0, 150, 150, 130, 75, 220, 315, 430],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'green',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 3,
              fill: true,
              backgroundColor: gradientFill,
            },
            
          ],
        }}
        height={380}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
         
        }}
      />
    </div>
  )
}

export default LineChart