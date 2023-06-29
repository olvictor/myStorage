import React from 'react'
import Chart from "react-apexcharts";

const Charts = ({produtosRegistrados}) => {
//    console.log(produtosRegistrados)

   const Produtos = produtosRegistrados.map((produto)=> produto.produto)
   const produtosQtd = produtosRegistrados.map((produto)=> produto.quantidade)

    

    const data = {
        options: {
            labels: [...Produtos]
          },
          series: [...produtosQtd],
        
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