import React from 'react';
import Coummunity from './Community/Coummunity';
import Details from './Details/Details';
import Introduction from './Introduction/Introduction';
import Learn from './Learn/Learn';
import Timer from './Timer/Timer';
import Wallet from './Wallet/Wallet';
const Home = () => {
    return (
        <div>
            <Introduction/>
            <Details/>
            <Wallet/>
            <Learn/>
            <Coummunity/>
            <Timer/>
            
        </div>
    );
};

export default Home;