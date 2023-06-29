import LeftSide from './LeftSide'
import CenterSide from './CenterSide'
import './App.css'
function App() {

  return (
    <>
      <div className='main'>
          <div className='a'>
            <LeftSide />
          </div>
          <div className='b'>
            <CenterSide />
          </div>
          <div className='c'>c</div>
      </div>
    </>
  )
}

export default App
