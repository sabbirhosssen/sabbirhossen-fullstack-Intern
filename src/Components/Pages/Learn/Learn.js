import React from 'react';
import { Row } from 'react-bootstrap';
import Learns from './Learns';

const Learn = () => {
    const detail_h={
        color:"#0E133A",
        fontSize:"48px",
        FontWeight:"700",
        LineHeight:"58px"
    }
    return (
        <div className='m-lg-5'>
             <h2 className='text-center' style={detail_h}>What Is Akacoin?</h2>
           <Row xs={1} md={2} className="g-4">
               <Learns/>
               <Learns/>
               <Learns/>
               <Learns/>
  
          </Row>
        </div>
    );
};

export default Learn;