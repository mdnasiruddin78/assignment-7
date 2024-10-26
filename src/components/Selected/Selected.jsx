import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import Available from "../Available/Available";



const Selected = ({addSelected,hendleDelete,hendleAddIsActive,isActive}) => {
    console.log(addSelected)
    return (
        <div className="mb-[200px]">
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
                                        <p className="text-gray-500">${max.price}</p>
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
                    <button onClick={()=>hendleAddIsActive("bat")} 
                    className="mt-4 bg-[#e7fe29] rounded-xl p-2 border-4
                    border-white outline outline-offset outline-black">Add More Player</button>

                    {
                        isActive.bat?<Available></Available>:[]
                    }
        </div>
    );
};

Selected.propTypes = {
    addSelected: PropTypes.array,
    hendleDelete: PropTypes.func,
    hendleAddIsActive: PropTypes.func,
    isActive: PropTypes.object,
}

export default Selected;