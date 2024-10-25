import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";


const Selected = ({addSelected,hendleDelete}) => {
    return (
        <div>
            <h3 className="text-3xl font-bold">Selected Player 
                ({addSelected.length}/6)</h3>
                {
                    addSelected.map((max,idx) => (
                        <div key={idx} className="border-2 rounded-xl p-4 mt-4">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <img className="w-20 rounded-xl" src={max.image} alt="" />
                                    <div>
                                        <h3 className="font-bold">{max.name}</h3>
                                        <p className="text-gray-500">{max.which_handed_bat}</p>
                                        <p>{Date()}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>hendleDelete(max.id)}><RiDeleteBin6Line 
                                    className="text-red-500 text-2xl" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    <button className="bg-[#e7fe29] mt-4 rounded-xl p-2
                    border-4 border-white outline outline-offset outline-black">Add More Player</button>
        </div>
    );
};

Selected.propTypes = {
    addSelected: PropTypes.array,
    hendleDelete: PropTypes.func,
}

export default Selected;