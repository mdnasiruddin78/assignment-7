import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'


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

  const [addMoney, setAddMoney] = useState()


  const hendleAddFreeAmount = (balance) => {
      const newAddMoney = balance + 2; 
      setAddMoney(newAddMoney)
  }

  return (
    <>
      <Navbar addMoney={addMoney}></Navbar> 
      <Header hendleAddFreeAmount={hendleAddFreeAmount}></Header>
        <CartContainer isActive={isActive} 
        hendleAddIsActive={hendleAddIsActive}></CartContainer>
      <Footer></Footer>
    </>
  )
}

export default App
