import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/*imported images */

import image6 from '../assets/image6.jpg'


function Home(){
    const navigate = useNavigate()
    
    return(
        <>
        <Navbar/>
        
       <section className=' bg-black h-screen flex justify-center '>
        <div className='carousel flex justify-center items-center w-full overflow-hidden'>
         
           <img src={image6} className='w-full overflow-hidden'/>
       
        </div>
      </section>

       {/* trysection */}
        <section className='h-screen flex justify-center items-center flex-col bg-[#C3F3C0]'>
        <div className='max-w-3xl text-center  flex justify-center items-center flex-col gap-8'>
        <p className='text-3xl font-bold text-gray-900 leading-tight  text-shadow-gray-400 text-shadow-sm'>AI-Powered Waste Classification System for <br/> Sustainable Waste Management and<br/> Climate Change Mitigation</p>
        <div className='mt-8'>
            <button  onClick={() => navigate("/classification")} className="px-6 py-3 rounded-full text-2xl text-white font-semibold shadow-lg  bg-green-700 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer">Try the tool</button>
        </div>
        </div>
    </section>

    {/* our mission */}

        <section className='bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center '>
            <div className='gap-5'>
                <h2 className='text-5xl font-bold text-gray-900 pb-4'>OUR MISSION</h2>
                
                <p className='font-semibold mt-6 text-xl '>
                   Our goal is to create an intelligent and efficient waste classification system that empowers communities <br/>
                    to make sustainable choices at the point of disposal.
                    By integrating A.I into waste management, <br/>
                    we aim to minimize human error, encourage recycling accuracy, and actively support global climate action efforts.
                </p>

                <p className='leading-tight font-semibold mt-5 text-xl'>
                    Even a small improvement in correct waste sorting can have a massive environmental benefit.<br/>
                    With EcoSort’s smart recognition technology, reducing improper disposal by just 1% <br/> could help cut emissions on a scale comparable to removing millions of fuel-based vehicles from daily use.<br/>
                    Together, we can transform waste management into a key driver for a cleaner and more sustainable planet.
                </p>
               
            </div>
        </section>
       <Footer/>
        </>
    )
}

export default Home;