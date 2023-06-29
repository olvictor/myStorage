import React, { useState } from 'react'
import styles from './CenterSide.module.css'
import Charts from './Charts/Charts';

const CenterSide = () => {
  const [produtosRegistrados,setProdutosRegistrados] = useState([]);
  const [produto,setProduto] = useState(null);
  const [quantidade,setQuantidade] = useState(null);
  
  const handleSubmit =(e)=>{
    const obj = {
      produto,
      quantidade
    }


    e.preventDefault()
    setProdutosRegistrados([...produtosRegistrados, obj])
  }
  


  return (
    <div className={styles.centerMain}>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={({target})=>{setProduto(target.value)}} placeholder='Digite o Produto' />
            <input type="number" onChange={({target})=>{setQuantidade(+target.value)}}  placeholder='Qtd'/>
            <button type='submit'>Registrar</button>
        </form>
        
        {produtosRegistrados.length < 1 && <p>Não há items registrados no momento</p>}
        {produtosRegistrados.length > 0 && <Charts  produtosRegistrados={produtosRegistrados}/>}
       
    </div>
  )
}

export default CenterSide