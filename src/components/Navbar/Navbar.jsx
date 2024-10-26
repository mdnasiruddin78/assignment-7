import PropTypes from 'prop-types';
import coinPng from '../../assets/assets/coin.png'
import logoImage from '../../assets/assets/logo.png'


const Navbar = ({addMoney}) => {
    return (
        <div className='max-w-6xl mx-auto flex justify-between mt-10 mb-10 
        sticky top-0 z-50 backdrop-blur bg-white/30'>
            <div>
                <img src={logoImage} alt="" />
            </div>
            <div className='flex items-center space-x-8'>
                <div className='flex list-none space-x-8 text-[#08d81a]'>
                    <li><button>Home</button></li>
                    <li><button>Fixture</button></li>
                    <li><button>Teams</button>Teams</li>
                    <li><button>Schedules</button></li>
                </div>
                <div className='flex items-center border-2 rounded-xl p-2 space-x-2'>
                    <p className='text-2xl font-bold'>{addMoney} Coin</p>
                    <img src={coinPng} alt="" />
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    addMoney: PropTypes.number,
}

export default Navbar;