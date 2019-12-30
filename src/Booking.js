import React from 'react';
import greenTick from './images/greenTick.png';
import './styles/Booking.css';

class Booking extends React.Component {

    render() {
        return (
            <div class="container">
                <br/>
                <br/>
                <br/>
                <h1 id="Heading">Booking Confirmation</h1>
                <div class="row confirm">
                    <img src={greenTick} width="300" height="400" alt="big tick" />
                </div>
            </div>
        );
    }
}

export default Booking;