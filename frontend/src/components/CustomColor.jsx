import React, { useState } from 'react'
import "../CustomColor.css"
import { Link } from 'react-router-dom';
export const CustomColor = () => {
    const [bikeColor, setBikeColor] = useState('red');
    return (
        <>
            <div id="customiz-colour">
                <div id="payment-button">
                    <Link to={"/paymentGateway"}><button class="glow-on-hover " type="button">Buy Now!</button></Link>
                </div>
                <div id="customiz-colour-container">
                    <div className="image">
                        <img id="bike-image" src={`/images/${bikeColor}.png`} alt="RHYNO EV" />
                    </div>
                    <div className="color-selector">
                        <div className="color-option red" data-color="red" onClick={() => setBikeColor('red')}></div>
                        <div className="color-option black" data-color="black" onClick={() => setBikeColor('black')}></div>
                        <div className="color-option blue" data-color="blue" onClick={() => setBikeColor('blue')}></div>
                        <div className="color-option gold" data-color="gold" onClick={() => setBikeColor('gold')}></div>
                        <div className="color-option brown" data-color="brown" onClick={() => setBikeColor('brown')}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
