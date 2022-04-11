import React from 'react';
import CountUp from 'react-countup';

const Timer = () => {

    window.addEventListener('scroll',()=>{
        const scrollable = document.documentElement.scrollHeight
        // console.log(scrollable);
        const scrolled =window.scrollY
        if (Math.ceil(scrolled)=== scrollable ){
            console.log('hi')
            
        }
    })


    // Style
    const f_style={
        fontSize:'220%'
    }
    const f_styleh={
        fontSize:'70%'
    }

    const style_bg ={
        backgroundColor:' #1F33D8',
        
        
    }
    return (
        <div style={style_bg} className="border-bottom border-warning border-5 py-4 px-3 w-100" >
            
            <div className='d-flex flex-row justify-content-between  align-items-center '>
                <div className="">
                    <div className='text-white' style={f_styleh}>Transactions/Second</div>
                    <div className='d-flex  text-white' style={ f_style}> <span>$</span>
                    <CountUp start={0} end={2905} delay={0} duration={1}>
                        
                         {({ countUpRef }) => 
                          <div className=' text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="text-start">
                    <div className='text-white' style={f_styleh}>Total Transactions</div>
                   <div className='d-flex  text-white' style={ f_style} > <span>$</span>
                    <CountUp start={0} end={64540470129} delay={0} duration={1}>
                        
                         {({ countUpRef }) => 
                          <div className=' text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="">
                    <div className='text-white ' style={f_styleh}>Avg. Cost/Transaction</div>
                    <div className='d-flex  text-white' style={ f_style}> $0,000
                    <CountUp start={0} end={25} delay={0} duration={1}>
                        
                         {({ countUpRef}) => 
                          <div className=' text-white'>
                            
                            <span ref={countUpRef} />
                          </div>
                        }
                    </CountUp></div>
                </div>
                <div className="">
                    <div className='text-white fs-lg-6' style={f_styleh}>Validator Nodes</div>
                    <div className='d-flex   text-white' style={ f_style}> <span>$</span>
                    <CountUp start={0} end={1645} delay={0} duration={1}>
                        
                         {({ countUpRef }) => 
                          <div className=' text-white'>
                            
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