import React from 'react'
import Chart from "react-google-charts";

const data = [
  ["Year", "green", "red", "blue"],
  ["6 JUN", 6500, 700, 6000],
  ["7 JUN", 6070, 700, 5000],
  ["8 JUN", 5000, 2300, 2000],
  ["9 JUN", 7200, 3000, 4000],
  ["10 JUN", 5200, 2400, 4500],
  ["11 JUN", 5700, 600, 5500],
  ["12 JUN", 7000, 800, 6500],
  ["13 JUN", 6500, 1300, 4500],
]

const options = {
  title: "",
  legend: {
    position: "none",
  },
  hAxis: {
    textStyle: {
      color: "#9b9b9b",
      fontName: "HelveticaNeue-Medium",
      fontSize: 16,
    },
    baseline:{
      color: "red",
    }
  },
  vAxis: {
   textStyle: {
      color: "#9b9b9b",
      fontName: "HelveticaNeue-Medium",
      fontSize: 16,
    },
  },
  colors: ['#7ED321', '#D0021B', '#4A90E2'],
  chartArea: {
    top: "30",
    left: "150",
    height: "430",
    width: "950"
  }
}

class DrawChart extends React.Component{
  render(){
    return(
      <div>
        <Chart
          className="p-0"
          chartType="LineChart"
          width="100%"
          height="540px"
          data={data}
          options={options}
        />
      </div>
    )
  }
}

export default DrawChart