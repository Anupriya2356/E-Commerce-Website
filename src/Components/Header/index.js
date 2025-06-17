import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import CountryDrop from '../CountryDrop';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';

const Header=()=>{

  const context=useContext(MyContext);

  return(
    <>
       <div className="headerWrapper">
         <div className="top-strip bg-cherry">
            <div className="container">
                <p className="mb-0 mt-0 text-center">Crafting something special 
                    just for you — hang tight, it may take a bit!</p>
            </div>
          </div>
       <header className="header">
        <div className="container">
            <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-2">
                    <Link to={'/'}><img src={logo} alt='logo' /></Link>
                </div>
                <div className='col-sm-10 d-flex align-items-center part2'>
                  {
                    context.countryList.length!==0 &&  <CountryDrop/>
                  }
                   
                    <SearchBox/>


                    <div className='part3 d-flex align-items-center ml-auto'>
                       <button className='circle mr-3'>< FaRegUser /></button>
                        <div className='ml-auto cartTab d-flex align-items-center'>
                          <span className='price'> {" \u20B9"} 50</span>
                          <div className='position-relative'>
                            <button className='circle ml-2'>< IoBagOutline /></button>
                            <span className='count  d-flex align-items-center justify-content-center'>1</span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </header>

       <Navigation/>
    </div>
    </>
  );
};
export default Header;