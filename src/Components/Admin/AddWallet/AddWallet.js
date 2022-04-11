import React from 'react';
import { useForm } from 'react-hook-form';
import './AddWallet.css';
const AddWallet = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // axios.post('https://evening-ocean-40382.herokuapp.com/allCycle' ,data)
        // .then(res =>{
        //     if(res.data.insertedId){
        //         alert("Added successfully")
        //         reset();
        //     }
        //     console.log(res)
        // })
    }
    return (
        <div className='mt-5'>
        <div className='m-5'>
          <h3 className='text-center text-white'>Add Wallet Items</h3>
            <div className='add_book mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
              <input  {...register("img_icon")} placeholder="Wallet Icon img url" />
              <input {...register("title", { required: true, maxLength: 30 }) } placeholder="Wallet Title"/>
            
              
              <textarea {...register("description", )} placeholder="Description" />
             
             
              <input type="submit"  className='submit' />
              </form>
            </div>
        </div>
        </div>
    );
};

export default AddWallet;