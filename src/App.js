import React,{useState} from 'react';
import './App.css';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'react-apexcharts';



const Appexchart=()=> {
  const [chartData, setChartData] = useState({
    series: [{
      data: [
        [new Date('2024-01-23T00:01:15').getTime(), 1800.95],
        [new Date('2024-01-23T00:06:45').getTime(), 1850.34],
        [new Date('2024-01-23T00:12:00').getTime(), 1900.18],
        [new Date('2024-01-23T00:18:00').getTime(), 2000.18],
        [new Date('2024-01-23T01:02:00').getTime(), 1900.18],
        [new Date('2024-01-23T01:12:00').getTime(), 1800.18],
        [new Date('2024-01-23T01:18:00').getTime(), 2000.18],
        [new Date('2024-01-23T02:04:00').getTime(), 1800.18],
        [new Date('2024-01-23T02:12:00').getTime(), 1900.18],
        [new Date('2024-01-23T02:18:00').getTime(), 2200.18],
        [new Date('2024-01-23T03:12:00').getTime(), 2400.18],
        [new Date('2024-01-23T03:18:00').getTime(), 2500.18],
        [new Date('2024-01-23T03:40:00').getTime(), 2300.18],
        [new Date('2024-01-23T04:02:00').getTime(), 2100.18],
        [new Date('2024-01-23T04:10:00').getTime(), 2300.18],
        [new Date('2024-01-23T04:12:00').getTime(), 2500.18],
        [new Date('2024-01-23T05:12:00').getTime(), 2600.18],
        [new Date('2024-01-23T06:18:00').getTime(), 2500.18],
        [new Date('2024-01-23T07:12:00').getTime(), 2300.18],
        [new Date('2024-01-23T08:12:00').getTime(), 2000.18],
        [new Date('2024-01-23T09:20:00').getTime(), 1800.18],
        [new Date('2024-01-23T10:12:00').getTime(), 1700.18],
        [new Date('2024-01-23T11:12:00').getTime(), 2000.18],
        [new Date('2024-01-23T12:12:00').getTime(), 2200.18],
        [new Date('2024-01-23T13:12:00').getTime(), 2500.18],
        [new Date('2024-01-23T14:12:00').getTime(), 2400.18],
        [new Date('2024-01-23T15:12:00').getTime(), 2600.18],
        [new Date('2024-01-23T16:12:00').getTime(), 2500.18],
        [new Date('2024-01-23T17:12:00').getTime(), 2300.18],
        [new Date('2024-01-23T18:12:00').getTime(), 2500.18],
        [new Date('2024-01-23T19:12:00').getTime(), 2700.18],
        [new Date('2024-01-23T20:12:00').getTime(), 2600.18],
        [new Date('2024-01-23T21:12:00').getTime(), 2300.18],
        [new Date('2024-01-23T22:12:00').getTime(), 2100.18],
        [new Date('2024-01-23T23:12:00').getTime(), 1900.18],
       


        [new Date('2024-01-23T23:16:00').getTime(), 20.60],
      ],
      color: '#00ff00',
    }],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: '#ffffff',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: '#fff',
                background: '#00E396',
              },
            },
          },
        ],
        xaxis: [
          {
            type: 'datetime',
            borderColor: '#ffffff',
            yAxisIndex: 0,
            min: new Date('2024-01-23T00:00:00').getTime(),
            max: new Date('2024-01-23T23:59:59').getTime(),
            labels: {
              formatter: function (val) {
                const date = new Date(val);
                return `${date.getHours()}`; 
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime', 
        tickAmount: 24, 
        axisTicks: {
          show: false, // Set show to false to hide x-axis ticks
        },
        axisBorder: {
          show: false, // Set show to false to hide the x-axis border
        },
      },
      grid: {
        show: false, // Set show to false to hide the grid lines
      },
    yaxis: {
  title: {
    text: 'Price',
  },
  min: 0,
  max: 3000,
  tickAmount: 3,
  labels: {
    formatter: function (val) {
      return val.toFixed(2).replace(/\.00$/, ''); // Remove ".00" from the labels
    },
    style: {
      fontWeight: 'bold', // Set the font weight to bold
    },
  },
},

    
      tooltip: {
        x: {
          format: 'dd MMM yyyy, HH:mm', 
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: '#00ff00', 
            },
            {
              offset: 100,
              color: '#ffffff', 
            },
          ],
        },
      },
    },
    selection: 'one_day',
  });




 
    return (
      <div>
        <div id="chart">
         
        
          <div id="chart-timeline">
          <ReactApexChart options={chartData.options} series={chartData.series}  type="area" height={350}/>
        </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
  export default Appexchart;
