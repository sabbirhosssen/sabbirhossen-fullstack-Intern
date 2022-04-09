import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord, BsFacebook, BsGithub } from "react-icons/bs";
const Footer = () => {

    // styles 
    const header_icons={
        border: '4px solid #1f33d8',
        borderRadius: '100%',
        padding: '3px'
    }
    const style_title={
        fontStyle:'normal' ,
      fontFamily:' Lato',
      fontSize: '32px',
      lineHeight: '32px',
      color: '#1f33d8'
    }
    const style_titles={
        fontStyle:'normal' ,
      fontFamily:' Lato',
      fontSize: '32px',
      lineHeight: '32px',
    }
    const style_h5_color={
        color:'#0E133A',
        // fontSize:'28px',
        fontWeigth:'blod'
    }
    const style_a_color={
        color:'#5B5D6D',
        fontSize:'20px',
    }
    return (
        <div className='border-top border-warning border-5'>
            <div className="d-lg-flex flex-lg-row justify-content-around  align-items-stretch mt-3">
                <div className="mt-4 ">
                    <div >
                        <svg className='mb-2 ' style={header_icons} width="36" height="36" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M3.49691e-07 8L2.34315 2.34315L8 3.49691e-07L13.6569 2.34315L16 8L13.6569 13.6569L8 16L2.34315 13.6569L3.49691e-07 8Z" fill="#FFCD37"/>
                      </svg>
                       <span style= {style_title}>AkA</span>
                       <span style={style_titles}>.COIN</span>
                    </div>
                    <h5  className=' text-decoration-none text-dark mt-2' style={style_h5_color}>Living Ecosystem <br/> Decentralized Token</h5>

                    <div className="kk">
                        <a href="d" className='text-decoration-none fs-3  me-2' style={style_h5_color}>
                            <BsGithub/>
                        </a>
                        <a href="d"  className='text-decoration-none fs-3 me-2 ' style={style_h5_color}>
                            <BsDiscord/>
                        </a>
                        <a href="d"  className='text-decoration-none fs-3 me-2' style={style_h5_color}>
                            <BsFacebook/>
                        </a>
                        <a href="d"  className='text-decoration-none fs-3 ' style={style_h5_color}>
                            <AiOutlineInstagram/>
                        </a>
                    </div>

                </div>
                <div className="d-flex flex-row gap-5 justify-content-between align-items-stretch mt-4">
                    <div className='w-25 text-start d-flex  flex-column gap-3 ms-2 me-2'>
                        <h5 style={style_h5_color}>Pages</h5>
                        <a href='d' className='text-start text-decoration-none' style={style_a_color}>Network Statistic </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>What is AkaCoin </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Wallets </a>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Quick Start Guide </a>
                    </div>
                    <div  className='w-25 text-start d-flex  flex-column gap-3'>
                        <h5 style={style_h5_color}>Learn</h5>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Blog </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Video </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Podcast  </a>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Network states </a>
                    </div>
                    <div  className='w-25 text-start d-flex  flex-column gap-3'>
                        <h5 style={style_h5_color}>Support</h5>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Custommer Service </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}> FAQ </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Community </a>
                        
                    </div>
                    <div  className='w-25 text-start d-flex  flex-column gap-3'>
                        <h6 style={style_h5_color}>About AKA.coin</h6>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>About us  </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Privacy policy  </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Term of use  </a>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Quick start guide  </a>
                        <a href='d' className='text-start text-decoration-none ' style={style_a_color}>Language support  </a>
                        <a href='d' className='text-start text-decoration-none '  style={style_a_color}>Cookie policy  </a>
                        
                    </div>
                   
                </div>
            </div>
            <div className='text-black text-center mt-5 mb-3'>©2022 AKA.COIN. All right reserved</div>
        </div>
    );
};

export default Footer;