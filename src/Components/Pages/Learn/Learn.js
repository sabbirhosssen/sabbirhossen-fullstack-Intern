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
             <h2 className='text-center py-3' style={detail_h}>Quick Start Guide</h2>
           <Row xs={1} md={2} className="g-4">
               <Learns
               id_='1'
               title='Create a wallet'
               text='Create a Wallet using either a desktop computer or an mobile device'
               img='https://i.ibb.co/Y0srWW0/Wallet.png'
               />
               <Learns
                id_='2'
                title=' Buy ETH'
                text='You can buy Ethereum (ETH) directly on MetaMask or transfer it'
                img='https://i.ibb.co/hWCq3Z7/Hand-Hold-Bitcoin.png'
               />
               <Learns
                id_='3'
                title='Connect your wallet'
                text='Access your wallet to AoaSwap by clicking ‘Connect to a wallet’'
                img='https://i.ibb.co/NYmNtT2/Laptop.png'
               />
               <Learns
                id_='4'
                title='Swap ETH to AKO'
                text='You can start swapping as you have ETH available! Press ‘Select a token’ '
                img='https://i.ibb.co/HTJzPkM/Machine.png'
               />
  
          </Row>
        </div>
    );
};

export default Learn;