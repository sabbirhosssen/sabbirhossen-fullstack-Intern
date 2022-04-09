import React from 'react';
import CountUp from 'react-countup';

const Timer = () => {

    window.addEventListener('scroll',()=>{
        const scrollable = document.documentElement.scrollIntoView
        console.log(scrollable);
        const scrolled =window.scrollY
        console.log(Math.ceil(scrolled));
        if (Math.ceil(scrolled)=== 335 && Math.ceil(scrolled)=== 337 ) {
            alert('hi')
            
        }else{

        }
    })

    const style_bg ={
        backgroundColor:' #1F33D8',
        maxWidth:"100%"
        
    }
    return (
        <div style={style_bg} className="border-bottom border-warning border-5 p-4" >
            
            <div className='d-flex flex-row justify-content-around  align-items-stretch '>
                <div className="">
                    <h6 className='text-white'>Transactions/Second</h6>
                    <div className='d-flex fs-1 text-white'> <span>$</span>
                    <CountUp start={0} end={2905} delay={0} duration={5}>
                        
                         {({ countUpRef }) => 
                          <div className='fs-1 text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="text-start">
                    <h6 className='text-white'>Total Transactions</h6>
                   <div className='d-flex fs-1 text-white'> <span>$</span>
                    <CountUp start={0} end={64540470129} delay={0} duration={5}>
                        
                         {({ countUpRef }) => 
                          <div className='fs-1 text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="">
                    <h6 className='text-white '>Avg. Cost/Transaction</h6>
                    <div className='d-flex fs-1 text-white'> <span>$0,000</span>
                    <CountUp start={0} end={25} delay={0} duration={4}>
                        
                         {({ countUpRef}) => 
                          <div className='fs-1 text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="">
                    <h6 className='text-white'>Validator Nodes</h6>
                    <div className='d-flex fs-1 text-white'> <span>$</span>
                    <CountUp start={0} end={1645} delay={0} duration={5}>
                        
                         {({ countUpRef }) => 
                          <div className='fs-1 text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                
            </div>
        </div>
    );
};

export default Timer;