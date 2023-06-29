import React from 'react'
import Chart from "react-apexcharts";

const Charts = () => {

    const data = {
        options: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon','Pera']
          },
          series: [60, 55, 13, 33,10],
        
    }
  return (
    <Chart
              options={data.options}
              series={data.series}
              type="donut"
              width="400"
            />
  )
}

export default Charts