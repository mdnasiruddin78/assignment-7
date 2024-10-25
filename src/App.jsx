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

  const [addSelected, setAddSelected] = useState([])

  const hendleDelete = (id) => {
    const removeItem = addSelected.filter((x) => x.id !== id)
    setAddSelected(removeItem)
  }

  const hendleAddSelected = (player) => {
    const isExist = addSelected.find((i) => i.id === player.id)

    if(isExist){
      alert('alrady exist')
    }
    else{
      const newSelected = [...addSelected,player]
      setAddSelected(newSelected)
    } 
  }

  const [addMoney, setAddMoney] = useState(0)

  const hendleAddFreeAmount = () => {
    const newMoney = addMoney + 2040048
    setAddMoney(newMoney)
  }

  return (
    <>
      <Navbar addMoney={addMoney}></Navbar> 
      <Header hendleAddFreeAmount={hendleAddFreeAmount}></Header>
        <CartContainer isActive={isActive} hendleAddSelected={hendleAddSelected} 
        hendleAddIsActive={hendleAddIsActive} addSelected={addSelected}
        hendleDelete={hendleDelete}></CartContainer>
      <Footer></Footer>
    </>
  )
}

export default App
