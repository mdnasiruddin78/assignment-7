import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


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

  const hendleDelete = (id,price) => {
    const removeItem = addSelected.filter((x) => x.id !== id)
    setAddSelected(removeItem)
    setAddMoney(addMoney + price)
    toast('Selected Player Remove',{
      position: "top-center",
    })
  }


  const hendleAddSelected = (player) => {

    if(player.price > addMoney){
      toast('claim some credit',{
        position: "top-center",
      })
      return;
    }

    if(addSelected.length > 5){
      toast('No Space Available',{
        position: "top-center",
      })
      return;
    }

    if(addMoney === 0){
       toast('Not enough money to buy this player.claim some credit',{
            position: "top-center",
          })
      return;
    }

    const isExist = addSelected.find((i) => i.id === player.id)

    if(isExist){
      toast('Player Already Selected',{
        position: "top-center",
      })
    }
    else{
      setAddMoney(addMoney - player.price)
      const newSelected = [...addSelected,player]
      setAddSelected(newSelected)
      toast('Congrates player is selected',{
        position: "top-center",
      })
    }
  }

  const [addMoney, setAddMoney] = useState(0)

  const hendleAddFreeAmount = () => {
    const newMoney = addMoney + 2040048
    setAddMoney(newMoney)
    toast('Credit Added To Your Account',{
      position: "top-center",
    })
  }


  return (
    <>
      <Navbar addMoney={addMoney}></Navbar> 
      <Header hendleAddFreeAmount={hendleAddFreeAmount}></Header>
      <CartContainer isActive={isActive} hendleAddSelected={hendleAddSelected} 
      hendleAddIsActive={hendleAddIsActive} addSelected={addSelected}
      hendleDelete={hendleDelete}></CartContainer>
      <Footer></Footer>
      <ToastContainer/>
    </>
  )
}

export default App
