import PropTypes from "prop-types";
import { LuUserCircle2 } from "react-icons/lu";
import { FaFlag } from "react-icons/fa6";


const Cart = ({player}) => {
    const {image,name,team,which_handed_bat
        ,which_handed_ball,price,category} = player;
    return (
        <div className="border-2 rounded-xl space-y-3 p-4">
                <img className="w-[400px] h-[300px] rounded-xl" src={image} alt="" />
                <div className="flex items-center space-x-2">
                    <LuUserCircle2 className="text-2xl" />
                    <h3 className="font-bold">{name}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <FaFlag />
                        <p>{team}</p>
                    </div>
                    <p className="bg-gray-200 p-2 rounded-xl">{category}</p>
                </div>
                <div className="border-b-2"></div>
                <h3 className="font-bold">Rating</h3>
                <div className="flex justify-between items-center">
                    <p>{which_handed_bat}</p>
                    <p>{which_handed_ball}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>price: ${price}</p>
                    <button className="border rounded-xl p-2">Choose Player</button>
                </div>
        </div>
    );
};

Cart.propTypes = {
    player: PropTypes.object,
}

export default Cart;