import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CountryDrop from '../CountryDrop';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';

const Header=()=>{
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
                    <CountryDrop/>
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

        <nav>
              <div className='container'>
                 <div className='row'>
                     <div className='col-sm-3 navPart1'>
                        <Button className='allCatTab'></Button>
                     </div>
                     <div className='col-sm-9 navPart2'>

                     </div>
                 </div>
              </div>
        </nav>
    </div>
    </>
  );
};
export default Header;