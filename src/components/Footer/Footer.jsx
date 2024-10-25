import footerPng from '../../assets/assets/logo-footer.png'


const Footer = () => {
    return (
        <div className="bg-[#06091a] relative">
           <div className="max-w-6xl mx-auto mt-40">
                <div className='flex justify-center absolute
                 bottom-[480px] left-[170px]'>
                    <div className='text-center items-center p-10 border-2 border-white rounded-xl bg-slate-200
                     w-[1000px] h-[250px] bg-no-repeat bg-cover space-y-5' style={{backgroundImage: "url(https://i.ibb.co.com/vq1CdxG/bg-shadow.png)"}}>
                        <h3 className='text-2xl font-bold'>Subscribe to our Newsletter</h3>
                        <p className='text-gray-500'>Get the latest updates and news right in your inbox!</p>
                        <div className='space-x-3'>
                            <input  className='p-3 rounded-xl' type="text" placeholder='Enter your email'/>
                            <button className='bg-[#e7fe29] p-3 rounded-xl font-bold'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <img className='mt-40' src={footerPng} alt="" />
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