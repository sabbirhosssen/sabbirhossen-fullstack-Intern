import React from 'react';
import { Col, Image } from 'react-bootstrap';
const Learns = ({id_,title,text,img}) => {
    const bg_g={
        background: '#FFD456'

    }
    return (
        <div>
            <Col>
      <div  className='d-flex justify-content-center align-items-center'>
          <div  className=' rounded-pill  mx-2 ' style={bg_g}>
          <Image variant="" src={img}width="100%" height="100%" />
          </div>
        
        <div className='text-start'>
          <h4>{id_} . {title}</h4>
          <small>
            {text}
          </small>
        </div>
      </div>
    </Col>
        </div>
    );
};

export default Learns;