import React, { Component } from 'react';
import './bucketList.css';

class BucketList extends Component {
    render () {
        return (
            <React.Fragment>
                <h1 className='next'> Where to next? ✈</h1>
                <div className='container2'>
                    <ul className='where-to'>
                        <li className='place'> <input type='checkbox' value='Greece' /> Greece </li>
                        <li className='place'><input type="checkbox" value="Morocco" checked /> ✈ Morocco </li>
                        <li className='place'><input type="checkbox"  value="Croatia"  /> Croatia </li>
                        <li className='place'><input type="checkbox"  value="Poland" /> Poland </li>
                        <li className='place'><input type="checkbox"  value="London" /> London </li>
                        <li className='place'><input type="checkbox"  value="Turkey"  /> Hongkong </li>
                        <li className='place'><input type="checkbox"  value="Bali" /> Austria </li>
                        <li className='place'><input type="checkbox"  value="Thailand" /> Thailand </li>
                        <li className='place'><input type="checkbox" value="Vietnam" /> Vietnam </li>
                        <li className='place'><input type="checkbox"  value="Cambodia" /> Cambodia </li>
                        <li className='place'><input type="checkbox"  value="Hongkong" /> Turkey </li>
                        <li className='place'><input type="checkbox"  value="Singapore" /> Singapore </li>
                    </ul>

                    </div>
            </React.Fragment>
        )
    }
}

export default BucketList;
