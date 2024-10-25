import coinPng from '../../assets/assets/coin.png'
import logoImage from '../../assets/assets/logo.png'
import cricket from '../../assets/assets/banner-main.png'
import bgImage from '../../assets/assets/bg-shadow.png'



const Header = () => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='flex justify-between mt-10 mb-10 
            sticky top-0 z-50 backdrop-blur bg-white/10'>
                <div>
                    <img src={logoImage} alt="" />
                </div>
                <div className='flex items-center space-x-8'>
                    <div className='flex list-none space-x-8 text-gray-500'>
                        <li><button>Home</button></li>
                        <li><button>Fixture</button></li>
                        <li><button>Teams</button>Teams</li>
                        <li><button>Schedules</button></li>
                    </div>
                    <div className='flex items-center border-2 rounded-xl p-2 space-x-2'>
                        <p className='text-2xl font-bold'>0 Coin</p>
                        <img src={coinPng} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-black rounded-xl text-center space-y-8'>
                <div className='flex justify-center'>
                    <img className='border-2 border-dashed 
                    border-gray-500' src={cricket} alt=""/>
                </div>
                <h3 className='text-white text-4xl font-bold'>
                    Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-gray-500'>Beyond Boundaries Beyond Limits</p>
                <button className='bg-[#e7fe29] p-3 rounded-xl font-bold
                border-4 border-black outline outline-offset outline-[#e7fe29]'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Header;

