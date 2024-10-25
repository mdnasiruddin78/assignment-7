
import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  
  const [isActive, setIsActive] = useState({
    bat: true,
    cricket: 'bat'
  })

  const hendleAddIsActive = (cricket) => {
    if(cricket === "bat"){
      setIsActive({
          bat: true,
      cricket: 'bat'
      })
    }
    else{
      setIsActive({
        bat: false,
    cricket: 'bat'
    })
    }
  }


  return (
    <> 
      <Header></Header>
      <div className=''>
        <CartContainer isActive={isActive} 
        hendleAddIsActive={hendleAddIsActive}></CartContainer>
        {/* <ButtonContent isActive={isActive} 
        hendleAddIsActive={hendleAddIsActive}></ButtonContent> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
