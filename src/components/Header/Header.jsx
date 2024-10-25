import PropTypes from 'prop-types';
import cricket from '../../assets/assets/banner-main.png'




const Header = ({hendleAddFreeAmount}) => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='bg-black rounded-xl text-center space-y-8'>
                <div className='flex justify-center'>
                    <img className='border-2 border-dashed 
                    border-gray-500' src={cricket} alt=""/>
                </div>
                <h3 className='text-white text-4xl font-bold'>
                    Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-gray-500'>Beyond Boundaries Beyond Limits</p>
                <button onClick={()=>hendleAddFreeAmount()} className='bg-[#e7fe29] p-3 rounded-xl font-bold
                border-4 border-black outline outline-offset
                 outline-[#e7fe29]'>Claim Free Credit</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    hendleAddFreeAmount: PropTypes.func,
}

export default Header;

