import React from 'react';
import { Image } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
const Coummunity = () => {
    const bg_1 ={
        background:' #1F33D8',
        borderRadius: '15px',
    }
    const bg_2 ={
        background:' #FFD456',
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
    const b_re2 ={
        background: '#1F33D8',
        borderRadius:' 0px 46.5px 46.5px 0px',
    }
    return (
        <div  className=''>
           
          <div>
              <div className='d-lg-flex d-md-flex  justify-content-around align-items-center'>
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
                    <div className="pt-5 pb-5 text-start m-5  " style={bg_2}>
                        <div className=' '>
                          <h4 style={heder} className="px-5">
                              Become a
                              <br />
                              Validator
                          </h4>
                              <br />
                              <small className=' d-block pb-3 px-5'>
                                Help secure the network by 
                                 running decentralized infrastructure. Learn about operating a validator node.
                              </small>
                              <div className='text-start py-2 w-50' style={b_re2 }>
                                <div className=' text-start  p-2 pe-0 d-flex justify-content-center align-items-center gap-3'>
                               
                                  <h6 className='text-white'>Learn More</h6> 
                                  <BsArrowRight className='text-white' />
                                </div>
                                  
                              </div>
                              
                              
                        
                        </div>
                    </div>
                  <div className="pt-3 pb-4 text-start m-5  " style={bg_1}>
                      <div className=' '>
                          
                         <h4 style={heder} className="text-white px-5 m-0">
                              Akacoin
                              <br/>
                              Community
                            </h4>
                            <br />
                            <small className='text-white d-block pb-3 px-5 m-0'>
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                            </small>
                            <Image src='https://i.ibb.co/3pGJJFj/Replace-Image.png' alt='' className='ps-5 pe-3 pb-2' width="100%"></Image>
                            <div className='text-start py-2 w-50' style={b_re }>
                              <div className=' text-start  p-2 pe-0 d-flex justify-content-center align-items-center gap-3'>
                             
                                <h6 className='text-dark'>Start Building</h6> 
                                <BsArrowRight className='text-dark' />
                              </div>
                                
                            </div>
                            
                            
                      
                      </div>
                  </div>
                 

              </div>
          </div>
        </div>
    );
};

export default Coummunity;