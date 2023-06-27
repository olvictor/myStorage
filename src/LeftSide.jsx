import React from 'react'
import {useState} from 'react'
import styles from './LeftSide.module.css'
import {MdStorage} from 'react-icons/md'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {VscGraph} from 'react-icons/vsc'
import {BsChevronDoubleRight} from 'react-icons/bs'
import {AiOutlineDoubleLeft} from 'react-icons/ai'


const leftSide = () => {
  const [active,setActive] = useState(false);
  const [hovered,setHovered] = useState(false);

  console.log(hovered)

  const setHover = () =>{
     setHovered(true)
  }
  const unSetHover=()=>{
    setHovered(false)
  }
  const handleActive =()=>{
    setActive(true)
  }

  const handleUnActive=()=>{
    setActive(false)

  }
  return (
    <div className={styles.menu}>
      <h1>Painel Adiministrativo</h1>
      <div 
      className={active ? styles.navbarActive : styles.navbar}
      onMouseEnter={setHover} 
      onMouseLeave={unSetHover}>
          <ul>
            <BsChevronDoubleRight 
            className={styles.iconMenuRight} 
            style={{display: hovered&& !active ? 'block' : 'none'}}
            onClick={handleActive}
            />
            <AiOutlineDoubleLeft 
            className={styles.iconMenuLeft} 
            style={{display: active ? 'block' : 'none'}}
            onClick={handleUnActive}
            />
            <li><BsFillJournalBookmarkFill /><p style={{display: active ? 'block' : 'none'}}>Registrar</p></li>
            <li><MdStorage /><p style={{display: active ? 'block' : 'none'}}>Estoque</p></li>
            <li><VscGraph/><p style={{display: active ? 'block' : 'none'}}>Análise</p></li>
          </ul>
      </div>
    </div>
  )
}

export default leftSide