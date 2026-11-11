import React from 'react'
import { BsRobot } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { auth ,provider} from '../../utils/Firebase';
import { signInWithPopup } from "firebase/auth";


const Auth = () => {

  const handleGoogleAuth = async () => {
    try{

        const res = await signInWithPopup(auth,provider)
        console.log(res)

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full items-center min-h-screen flex justify-center
     bg-[#f3f3f3] px-6 py-20'>

      <div className='w-full max-w-md bg-white gap-3 shadow-2xl p-8 rounded-3xl'>

        <div className='text-center  flex flex-row items-center justify-center'>

          <div className='bg-black mb-6 mr-3 p-0.5 rounded-lg wifit h-fit '>
           <BsRobot className=' size-8   text-white rounded-sm inline' />
          </div>

          
          <h2 className=' font-semibold mb-6 text-center inline'>IntetrviewIQ.AI</h2>

          
          
          </div>
          
          <div className='flex flex-col items-center justify-center mt-1'>
            <h2 className=' text-xl font-semibold'> Continue with Google</h2>
            <div className='flex flex-row items-center justify-center px-2 gap-2 m-2 bg-blue-300 rounded-2xl
            '> 
               <GiStarsStack className=' size-8   text-blue-600 rounded-sm inline' />
               <p className='text-xl font-medium text-blue-600'>AI Smart Interview</p>
        
            </div>
            <p className='text-sm text-gray-400 mt-1'>By continuing, you agree to our Terms of Service and Privacy Policy and start Interviewing with AI , track your progress and get final feedback.</p>
          </div>

        <button className='flex flex-row items-center justify-center gap-2 w-full bg-black text-white
         rounded-3xl font-semibold py-2 px-4  shadow-md hover:bg-gray-800 transition duration-300
          ease-in-out mt-6 hover:px-5 ' onClick={handleGoogleAuth}>
          <FcGoogle className=' size-6' />
           <p className=''>Continue with Google</p>
        </button>
        
        
        </div> 
      
    </div>
  )
}

export default Auth
