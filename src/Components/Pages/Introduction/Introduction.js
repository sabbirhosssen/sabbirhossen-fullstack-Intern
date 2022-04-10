import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
const Introduction = () => {
    const styel_c={
        Color:"#0E133A",
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '72px',
        lineHeight: '100px'
    }
    const style_h={
        height:"100%",
        background: ' #F4F5FA'
    }   
    

    return (
        <div className='mt-3 p-3 text-start ' style={style_h }>
            <div className=' d-lg-flex flex-lg-row justify-content-center  align-items-center '>
                <div className="jf ">
                    <h6>Introducing <span>AKA</span><span>COIN</span> </h6>
                    <h1 style={styel_c}>
                        Living Ecosystem
                        <br/>
                        Decentralized Token
                    </h1>
                    <div>
                        <small>
                        Akacoin is a open
                        source peer-to-peer digital currency,community-run technology that <br/>
                        supports cryptocurrencies and thousands of decentralized applications.
                        </small>
                    </div>
                    <br/>
                    <Button className='rounded-pill'> Get Started</Button>
                    <Button className='bg-white ms-3 text-dark text-center rounded-pill'> <BsGithub/> Source</Button>
                </div>
                <div className='fh ' >
                   
                   <img src="https://i.ibb.co/Y2SkBDD/Plant-Bitcoin.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;