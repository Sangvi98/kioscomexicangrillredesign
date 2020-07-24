import React from 'react';
import './NavBar.css';
import facebookIcon from './socialMediaIcons/iconmonstr-facebook-1-240.png';
import instagramIcon from './socialMediaIcons/iconmonstr-instagram-11-240.png';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='navigation'> 
                <div className='navContent'>
                    <h1 className='websiteTitle'> 
                        <p>Kiosco</p>
                        <p>Mexican</p>
                        <p>Grill</p>   
                    </h1>
                    <ul className='navButtons'>
                        <Link to='/' className='navLink'><li className='navButton'><a>Home</a></li></Link>
                        <Link to='/menu' className='navLink'><li className='navButton'><a>Menu</a></li></Link>
                    </ul>

                    <div className='info'>
                        <div className='address marginTopBottom'> 
                            <p className='bold orange'>Contact</p>
                            <p>336-617-0350</p>
                            <p>3011 Spring Garden St STE A</p>
                            <p>Greensboro NC 27403</p>
                        </div>
                        
                        <div className='hours marginTopBottom'> 
                            <p className='bold orange'>Hours</p>
                            <p>Mon–Thu  11am-10pm</p>
                            <p>Fri-Sat 11am-10:30pm</p>
                            <p>Sun  11am-10pm</p>
                        </div>

                        <div className='socialMedia'>
                            <a target="_blank" href='https://www.facebook.com/kioscomexicangrilll'> <img className='socialMediaIcon' src={facebookIcon}/></a>
                            <a target="_blank" href='https://www.instagram.com/kioscomexicangrill/'><img className='socialMediaIcon' src={instagramIcon}/></a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default NavBar;