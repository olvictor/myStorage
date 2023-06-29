import React from 'react'
import styles from './Preview.module.css'
import Chart from "react-apexcharts";

const Preview = () => {

    const data = {
        options: {
            labels: ['Moto','Carro','Caminhão']
          },
          series: [10,30,20],    
    }


  return (
    <div className={styles.Main}>
        <h1>my<span>Storage</span>, um Aplicativo onde você Pode:</h1>

        <div className={styles.containerApps}>
            <form>
                <h3>Registrar seu Produto</h3>
                <div className={styles.formInput}>
                    <input type="text"  disabled placeholder='Digite o Produto'/>
                    <input type="number" disabled placeholder='Qtd'/>
                    <button disabled>Registrar</button>
                </div>
            </form>
            <div>
                <div className={styles.chart}>
                <h3>Calcular a % do Produto no Estoque </h3>
                    <Chart 
                    options={data.options}
                    series={data.series}
                    type="donut"
                    width="350"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preview