import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Available = ({playerInfo,hendleAddSelected}) => {
    
    return (
        <div>
            <h3 className="text-3xl font-bold">Available Players</h3>
            <div className="grid grid-cols-3 gap-5 mt-5">
            {
                playerInfo.map((player,idx) => <Cart key={idx}
                 player={player} hendleAddSelected={hendleAddSelected}></Cart>)
            }
          </div>
        </div>
    );
};

Available.propTypes = {
    playerInfo: PropTypes.array,
    hendleAddSelected: PropTypes.func, 
}

export default Available;