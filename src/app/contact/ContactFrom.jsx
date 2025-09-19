"use client";
import { TbMailShare } from "react-icons/tb";
import Button from "../components/sheard/button/Button";
import Input from "../components/sheard/FormElement/Input";
import Textarea from "../components/sheard/FormElement/Textarea";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactFrom() {
         
    const handleInputData = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;
        const newConsoleValue = {firstName, lastName, email, number, message}
        console.log(newConsoleValue);
        toast('Thanks for connecting with us');
       
         form.reset()

    }

//  const notify = () => toast('Thanks for connecting with us');

    return (
       <form onSubmit={handleInputData}>
            <Toaster toastOptions={{
               style: {
                marginTop: '50px',
      background: '#111204',
      padding: '16px',
      color: 'white',
      border: '1px solid #B9FD50'
    },
            }}
  position="top-right"
  reverseOrder={false} 
/>
         <div  data-aos="fade-up" className=" xl:px-36 sm:mt-16 md:px-10 px-5 lg:w-10/12 2xl:w-9/12 mx-auto pt-10">
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input name="firstName" data-aos="fade-up" type='text' idFor='firstName' label='First name' placeholder='Enter your firstName' />
                <Input name="lastName" data-aos="fade-down" type='text' idFor='lastName' label='Last name' placeholder='Enter your lastName' />
            </div>
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input name="email" data-aos="fade-up" type='email' idFor='email' label='Email' placeholder='Enter your email' />
                <Input name="number" data-aos="fade-down" type='number' idFor='number' label='Phone number' placeholder='Enter your phone Number' />
            </div>
            <Textarea data-aos="fade-up" idFor='message' label='Your message' placeholder='Your message here . . .' />
            
               
                <div  className=' flex justify-end mt-10'>
                <Button   data-aos="fade-up" type='submit' text='Send' isFill={false} icon={<TbMailShare />} />
   {/* onClick={notify} */}
            </div> 
        </div>
       </form>
    )
}