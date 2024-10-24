import footerPng from '../../assets/assets/logo-footer.png'


const Footer = () => {
    return (
        <div className="bg-[#06091a] mt-10">
           <div className="w-11/12 mx-auto">
                <div className='flex justify-center'>
                    <img className='border-2 border-dashed 
                    border-gray-500' src={footerPng} alt="" />
                </div>
                <br/>
                <br/>
                <div className='flex justify-between mb-10'>
                    <div className='space-y-4'>
                        <h3 className='text-white'>About Us</h3>
                        <p className='text-gray-500'>We are a passionate team<br/> dedicated to providing the best<br/>  services to our customers.</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-white'>Quick Links</h3>
                        <div className='text-gray-500'>
                            <li>Home</li>
                            <li>Servece</li>
                            <li>About</li>
                            <li>Contract</li>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-white'>Subscribe</h3>
                        <p className='text-gray-500'>Subscribe to our newsletter for the<br/> latest updates.</p>
                        <div>
                            <input className='p-3 rounded-l-lg' type="text" placeholder='Enter your email' />
                            <button className='bg-[#e7fe29] p-3 rounded-r-lg font-bold'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='text-center border-t-2 border-t-gray-500 p-5'>
                    <p className='text-gray-500'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div> 
        </div>
    );
};

export default Footer;