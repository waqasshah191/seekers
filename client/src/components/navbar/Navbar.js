import { useState } from 'react';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im';
import * as FiIcons from 'react-icons/fi';

import './Navbar.css';

const Navbar = () => {

    const sidebarItems = [
        {
            title:'Home',
            path:'/',
            icon: <AiIcons.AiFillHome />,
            class_name:'nav-text'
        },
        {
            title:'Orders',
            path:'/orders',
            icon: <RiIcons.RiFileList3Fill />,
            class_name:'nav-text'
        },

        {
            title:'Profile',
            path:'/profile',
            icon: <RiIcons.RiFileList3Fill />,
            class_name:'nav-text'
        }

    ]

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = (e)=>{
        console.log('click', e)
        setSidebar(!sidebar)
    }

    return (
        <div>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>              
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className= 'nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarItems.map((item, index)=> {
                        return(
                            <li key= {index} className={item.class_name}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
         
        </div>
        
    );
}
 
export default Navbar;