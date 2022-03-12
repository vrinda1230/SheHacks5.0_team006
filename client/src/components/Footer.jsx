import logo from '../../images/logo2.png';

const Footer = () =>{
    return (
        <div className=" w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
              <div className="flex flex-[2.5] center1">
                  <img src={logo} alt="logo" className="center1 w-32"/>
              </div>  
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-small text-center">Be an Ether user today, tomorrow and always!</p>
              
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"/>
            <div className="sm:w-[90%] w-full flex justify-between item-center mt-3">
            <p className="text-white text-small text-center">Developed by Vrinda Sharma!</p>
            <p className="text-white text-small text-center">All rights reserved</p>

                </div>
        </div>
    );
}

export default Footer;