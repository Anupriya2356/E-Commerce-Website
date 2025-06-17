import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { GiSewingNeedle } from "react-icons/gi";
import { FaImage } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GiColumnVase } from "react-icons/gi";
import { FaMicroblog } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Navigation=()=>{
    return (
    <nav>
              <div className='container'>
                 <div className='row'>
                     <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab'>
                            <span className='icon1 mr-2'><IoMdMenu/></span>
                           <span class="text"> ALL CATEGORIES</span>
                           <span className='icon2 ml-2'><FaAngleDown/></span>
                        </Button>
                     </div>
                     <div className='col-sm-10 navPart2 d-flex align-items-center'>
                         <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button><CiHome/> &nbsp; Home</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><GiSewingNeedle/> &nbsp; Embroidery</Button> </Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>< FaImage/> &nbsp; Wall Hanging</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><GiNotebook/> &nbsp; Stationary</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><GiColumnVase/> &nbsp; Pottery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><FaMicroblog/> &nbsp; Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><IoMdContact/> &nbsp; Contact Us</Button></Link></li>
                         </ul>
                     </div>
                 </div>
              </div>
        </nav>
    )
}
export default Navigation