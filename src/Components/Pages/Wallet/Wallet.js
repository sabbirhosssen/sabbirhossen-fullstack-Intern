import React from 'react';
import { BsArrowRight } from "react-icons/bs";
const Wallet = () => {
  
    
    const bg_1 ={
        background:' #1F33D8',
        borderRadius: '15px',
    }
    
    const heder={
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '250%',
        lineHeight: '62px'
    }
    const b_re ={
        background: '#FFD456',
        borderRadius:' 0px 46.5px 46.5px 0px',
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <div className="pt-5 pb-5  text-start m-5  " style={bg_1}>
                      <div className=' '>
                         <h4 style={heder} className="text-white px-5">
                              Akacoin
                              <br/>
                              Community
                            </h4>
                            <br />
                            <small className='text-white d-block pb-3 px-5'>
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                            </small>
                            <div className='text-start py-2 w-50' style={b_re }>
                              <div className=' text-start  p-2 pe-0 d-flex justify-content-center align-items-center gap-3'>
                                <h6 className='text-dark'>Learn More</h6> 
                                <BsArrowRight className='text-dark' />
                              </div>
                            </div>
                      </div>
                  </div>
                  <div className="pt-5 pb-5  text-start m-5  " style={bg_1}>
                      <div className=' '>
                         <h4 style={heder} className="text-white px-5">
                              Akacoin
                              <br/>
                              Community
                            </h4>
                            <br />
                            <small className='text-white d-block pb-3 px-5'>
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                            </small>
                            <div className='text-start py-2 w-50' style={b_re }>
                              <div className=' text-start  p-2 pe-0 d-flex justify-content-center align-items-center gap-3'>
                                <h6 className='text-dark'>Learn More</h6> 
                                <BsArrowRight className='text-dark' />
                              </div>
                            </div>
                      </div>
                  </div>
                  <div className="pt-5 pb-5  text-start m-5  " style={bg_1}>
                      <div className=' '>
                         <h4 style={heder} className="text-white px-5">
                              Akacoin
                              <br/>
                              Community
                            </h4>
                            <br />
                            <small className='text-white d-block pb-3 px-5'>
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                            </small>
                            <div className='text-start py-2 w-50' style={b_re }>
                              <div className=' text-start  p-2 pe-0 d-flex justify-content-center align-items-center gap-3'>
                                <h6 className='text-dark'>Learn More</h6> 
                                <BsArrowRight className='text-dark' />
                              </div>
                            </div>
                      </div>
                  </div>
            </div>

            
        </div>
    );
};

export default Wallet;