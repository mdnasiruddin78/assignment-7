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

  const hendleDelete = (id) => {
    removeMoneyReturn(id)
    const removeItem = addSelected.filter((x) => x.id !== id)
    setAddSelected(removeItem)
    toast('Selected Player Remove',{
      position: "top-center",
    })
  }

  const removeMoneyReturn = (id) => {
      const money = addSelected.find((r) => r.id == id);
      setBuying(buying + money.price)
  }

  const hendleAddSelected = (player) => {

    if(player.id > 6){
      toast('No Space Available',{
        position: "top-center",
      })
      return;
    }

    if(addMoney === 0){
       toast('Please Claim Free Credit',{
            position: "top-center",
          })
      return;
    }

    const isExist = addSelected.find((i) => i.id === player.id)

    if(isExist){
      toast('Player Already Aelected',{
        position: "top-center",
      })
    }
    else{
      hendleBuyingPrice(player.price)
      const newSelected = [...addSelected,player]
      setAddSelected(newSelected)
    }
  }

  const [addMoney, setAddMoney] = useState(0)

  const hendleAddFreeAmount = () => {
    const newMoney = addMoney + 2040048
    setAddMoney(newMoney)
    toast('money successfully add',{
      position: "top-center",
    })
  }

  const [buying, setBuying] = useState(0)

  const hendleBuyingPrice = (newPrice) => {
        setBuying(buying - newPrice)
        toast('Player Selected',{
          position: "top-center",
        })
  }


  return (
    <>
      <Navbar addMoney={addMoney} buying={buying}></Navbar> 
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
