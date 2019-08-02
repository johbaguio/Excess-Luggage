import React, { Component } from 'react';
import './places.css';
import { NavLink } from 'react-router-dom';


class Places extends Component {
    render() {
        return (
            // <div>
            //     <div className="column-left">
            //         <ul className="places"><br />
            //             <h3 className='title'>EXPLORING THE PHILIPPINES</h3>
            //             <img src="https://s19.postimg.cc/jjd1tuz77/Philippine-_Map-_PNG-_Image.png" alt="map of the Philippines" className="ph-map" /><br />
            //             <li><a href="#Siargao">EXPERIENCING THE WAVES IN SIARGAO</a></li><br />
            //             <li><a href="#Boracay">EXPOSED NATURE'S BIGGEST SECRET: BORACAY</a></li><br />
            //             <h3 className='title'>EXTRAORDINARY EUROPE</h3>
            //         <img src="https://s19.postimg.cc/62g3b6rib/europe-flag-map-file-flags-png-wikimedia-commons.png"  alt ='map of europe'className="europe" /><br />
            //             <li><a href="#Aurora">EXCLUSIVE SHOW/CHASE OF AURORA BOREALIS IN NORWAY</a> </li><br />
            //             <li><a href="#Paris">EXQUISITE FRENCH KISS IN THE CITY OF LOVE</a></li><br />
            //             <li><a href="#Amsterdam">EXHILARATING VIEW FROM THE HELICOPTER IN THE NETHERLANDS</a></li>
                        
            //         </ul>
            //     </div>
                
            // </div>

            <div className='wrapper1'>
             <div className='wrapper2'>
                     
                     <div className='europe'>
                         <img src="https://s19.postimg.cc/62g3b6rib/europe-flag-map-file-flags-png-wikimedia-commons.png" alt="europe map" className="europe-map"></img>
                         <h3 className='title'>EXTRAORDINARY EUROPE</h3>
                         <ul className='europe-places-list'>
                             <li className='europe-places'><input type="checkbox" checked="checked" /> <NavLink to='/Aurora'>EXCLUSIVE SHOW/CHASE OF AURORA BOREALIS IN NORWAY</NavLink> </li>
                             <li className='europe-places'><input type="checkbox" checked="checked" /> <NavLink to='/Paris'>EXQUISITE FRENCH KISS IN THE CITY OF LOVE</NavLink></li>
                             <li className='europe-places'><input type="checkbox" checked="checked" /> <NavLink to='/Netherlands'>EXHILARATING VIEW FROM THE HELICOPTER IN THE NETHERLANDS</NavLink></li>
                         </ul>

                     </div>
                     <div className='ph'>
                         <img src="https://s19.postimg.cc/jjd1tuz77/Philippine-_Map-_PNG-_Image.png" alt="map of the Philippines" className="ph-map"></img>
                         <h3 className='title'> EXPLORING THE PHILIPPINES</h3>
                         <ul className='ph-places-list'>
                             <li className='ph-places'> <input type="checkbox" checked="checked" /> <NavLink to='/Siargao'>EXPERIENCING THE WAVES IN SIARGAO</NavLink></li>
                             <li className='ph-places'> <input type="checkbox" checked="checked" /> <NavLink to='/Boracay'>EXPOSED NATURE'S BIGGEST SECRET: BORACAY</NavLink></li>
                         </ul>
                     </div>

                 </div>
               
             </div>

        )
    }
}

export default Places;