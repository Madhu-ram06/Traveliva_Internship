import './Booking.css';
import React from 'react';
import variantImg from './images/variantImg.jpg';
import two1 from './images/two1.jpg';
const Booking=()=>{
    return(
        <div id="booking">
            <div id="one">
                <div id="textid">
                    <p id="ddd">Casa Lake Resort</p>
                    <p>We provide high quality services !</p>
                    <p>Pick a room and enjoy the best vacation of your life</p>
                    <br /><br />
                    
                </div>
                
            </div>


            <div id="book2">
                <img src={variantImg} alt="booking1" width={"50%"} height={"600px"}></img>
                <div id="subdiv">
                    <img src={two1} alt="booking2" height={"48%"} width={"100%"}></img>
                    <img src={two1} alt="booking2" height={"48%"} width={"100%"} ></img>
                </div>
            </div>

        </div>
    )
}
export default Booking;