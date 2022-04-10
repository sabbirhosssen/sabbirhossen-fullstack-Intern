import React from 'react';

const Details = () => {
    const detail={
        color:"#0E133A",
        fontSize:"48px",
        FontWeight:"700",
        LineHeight:"58px"
    }
    const detail_f ={
        color:"#0E133A",
        fontSize:"40px",
        FontWeight:"700",
        LineHeight:"52px"
    }
    
        const web_bg ={
            backgroundColor:"#FFD456",
            borderRadius: '15px',
        }
        const tr_bg ={
            background: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '15px',
        }
        const b_re ={
            background: '#0C20CB',
            borderRadius:' 0px 46.5px 46.5px 0px',
        }
        const ply={ 
            background: '#0C20CB',
        }
    return (
        <div className='h-100 pt-4'>
            <h2 className='text-center' style={detail}>What Is Akacoin?</h2>
            <div className="d-flex justify-content-around align-items-baseline mt-5 ">
                <div className=" ">
                    <h3 className='text-start' style={detail_f }>
                        The fastest growing and <br/>
                        community friendly
                    </h3>
                </div>
                <div className=''>
                    <div className='text-start'>
                        <small >
                        Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with  <br/> thousands of projects spanning DeFi, NFTs, Web3 and more.
                        </small>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center py-5 ">
                <div className=" ">
                    <img src=' https://i.ibb.co/HNWRcPc/Website.png' alt='' className='w-100  p-1  ' style={web_bg} />
                </div>
                <div className='text-start d-flex justify-content-center align-items-center gap-3' style={tr_bg}>
                    <div className='' >
                        <div className='text-start ' style={b_re }>
                            <div className=' text-start d-flex justify-content-center align-items-center gap-3 p-2'>
                              <div>
                              <small className='text-white'>Learn Akacoin</small> 
                                <br/>
                                <span className='fs-4 text-white'>Watch Video</span>
                              </div>
                                <img src="https://i.ibb.co/Z2SjJ7X/Polygon-2.png" alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <img src=' https://i.ibb.co/c10D7Y0/Transition.png' alt='' className='     text-center'   />
                    <div className='px-4 py-3 rounded-pill me-3'  style={ply}>
                    <img src="https://i.ibb.co/Z2SjJ7X/Polygon-2.png" alt=""  />
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Details;