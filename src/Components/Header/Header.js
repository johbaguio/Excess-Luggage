import React from 'react';
import './header.css';

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <div>
                    <img src="https://s19.postimg.cc/ik3qv5ysz/HEADER.jpg" alt="ExcessLuggage Header pic" className="header-pic"/>
                </div>
                <div>
                    <div className='about-me'>
                        <h6 className='text'>I am a 28-year-old Filipina explorer of places that could potentially give extraordinary, extreme, and exceptional  <br />  experiences that I could  bring along on to my next expedition.  <br />  <br /> Buckle up and take a look at my exhibit inside my luggage of experiences that surely exceed expectations. <br /></h6>
                        <h5 className='welcome'> Welcome to my Excess Luggage!♡ </h5>
                        <img src="https://s19.postimg.cc/haljqnx5v/sign.png" alt="Xoxo,Johanna" className="signature-aboutme" />

                    </div>

                </div>
                <div className='pic about'>
                        <img src="https://s19.postimg.cc/eluvvi09v/lol.jpg" alt="me" className="mypic" />
                        {/* <img src={jo} alt="Jo's pic" className='jo-pic' /> */}
                </div>
             
        
                
                
            </div>
            
        )
    }
}

export default Header;