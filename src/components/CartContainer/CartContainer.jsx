import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import './CartContainer.css'


const CartContainer = ({hendleAddIsActive,isActive}) => {

    const [playerInfo, setPlayerInfo] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setPlayerInfo(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">Available Players</h3>
            <div className="flex border-2 rounded-xl">
                <div onClick={()=>hendleAddIsActive("bat")} 
                className={`${isActive.bat?"btn active":"btn"}`}>Available</div>
                <div onClick={()=>hendleAddIsActive("ball")} 
                className={`${isActive.bat?"btn":"btn  active"}`}>Selected (0)</div>
            </div>
          </div>
          <div>
            {
            isActive.bat?<Available playerInfo={playerInfo}></Available>:<Selected></Selected>
            }
          </div>
        </div>
    );
};

CartContainer.propTypes = {
    isActive: PropTypes.object,
    hendleAddIsActive: PropTypes.func,
}

export default CartContainer;