import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Available = ({playerInfo}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 mt-5">
            {
                playerInfo.map((player,idx) => <Cart key={idx} player={player}></Cart>)
            }
          </div>
        </div>
    );
};

Available.propTypes = {
    playerInfo: PropTypes.array, 
}

export default Available;