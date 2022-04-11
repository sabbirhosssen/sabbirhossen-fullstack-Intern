import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddWallet from './AddWallet/AddWallet';
import './Admin.css';
const Admin = () => {
    return (
        <div>
             <div className='admin '>
          <div className='text-start add_nav bg-secondary '>
              <Link to='/admin/addwallet' className='link text-white'>Add Wallet</Link>
              <Link to='/admin/manageShop' className='link text-white' >Manage Wallet Data </Link>
              <Link to='/admin/manageReview' className='link text-white' >Manage Review Data </Link>
              
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='addwallet' element={<AddWallet/>}/>
                     <Route path='addwallet' element={<AddWallet/>}/>
                    
                 </Routes>
                  
                  </div>

            
        </div>
        </div>
    );
};

export default Admin;