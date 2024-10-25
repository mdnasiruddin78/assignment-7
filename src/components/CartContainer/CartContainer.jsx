import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import './CartContainer.css'


const CartContainer = ({hendleAddIsActive,isActive,
  hendleAddSelected,addSelected,hendleDelete}) => {

    const [playerInfo, setPlayerInfo] = useState([])

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setPlayerInfo(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end items-center">
            <div className="flex border-2 rounded-xl">
                <div onClick={()=>hendleAddIsActive("bat")} 
                className={`${isActive.bat?"btn active":"btn"}`}>Available</div>
                <div onClick={()=>hendleAddIsActive("ball")} 
                className={`${isActive.bat?"btn":"btn  active"}`}>Selected 
                ({addSelected.length})</div>
            </div>
          </div>
          <div>
            {
            isActive.bat?<Available hendleAddSelected={hendleAddSelected} 
            playerInfo={playerInfo}></Available>:<Selected isActive={isActive} 
            addSelected={addSelected} hendleDelete={hendleDelete}></Selected>
            }
          </div>
        </div>
    );
};

CartContainer.propTypes = {
    isActive: PropTypes.object,
    hendleAddIsActive: PropTypes.func,
    hendleAddSelected: PropTypes.func,
    addSelected: PropTypes.array,
    hendleDelete: PropTypes.func,
}

export default CartContainer;