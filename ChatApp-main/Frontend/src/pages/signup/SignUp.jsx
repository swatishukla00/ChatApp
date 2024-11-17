import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox.jsx'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullname:'',
    username:'',
    password:'',
    confirmpassword:'',
    gender:''
  });
  const {loading,signup} =useSignup();

const handleCheckboxChange =(gender)=>{
setInputs({...inputs,gender})
}

  const handleSubmit = async(e)=>{
 e.preventDefault();
  await signup(inputs)

  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
      SignUP
      <span className='text-blue-500'>ChatAPP</span>
      </h1>    
   <form onSubmit={handleSubmit}>
   <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>FullName</span>
    </label>
    <input type="text" placeholder='Enter Your FullName' className='w-full  input input-bordered h-10 border-cyan-700'
    value={inputs.fullname} onChange={(e)=>setInputs({...inputs,fullname:e.target.value})} />
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>UserName</span>
    </label>
    <input type="text" placeholder='Enter UserName' className='w-full  input input-bordered h-10 border-cyan-700' 
     value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>Password</span>
    </label>
    <input type="password" placeholder='Enter Password' className='w-full  input input-bordered h-10 border-cyan-700'
     value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>Confirm Password</span>
    </label>
    <input type="password" placeholder='Confirm Password' className='w-full  input input-bordered h-10 border-cyan-700'
     value={inputs.confirmpassword} onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})} />
    </div>
    
    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

    <Link to={"/login"} className='text-sm mt-2 text-violet-500 hover:underline  hover:text-blue-900 inline-block'> Already Have an Account? </Link>
    <div>
   <button className="btn btn-block btn-sm mt-2" disabled={loading}> 
    {loading ? <span className='loading loading-spinner'></span>:"SignUP" } 
    </button>
   </div>
    </form>
    </div>
    </div>
  )
}

export default SignUp



// STATER CODE FOR SIGNUP
// import GenderCheckbox from './GenderCheckbox.jsx'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <h1 className='text-3xl font-semibold text-center text-gray-300'>
//       SignUP
//       <span className='text-blue-500'>ChatAPP</span>
//       </h1>    
//    <form>
//    <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>FullName</span>
//     </label>
//     <input type="text" placeholder='Enter Your FullName' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>UserName</span>
//     </label>
//     <input type="text" placeholder='Enter UserName' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>Password</span>
//     </label>
//     <input type="password" placeholder='Enter Password' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>Confirm Password</span>
//     </label>
//     <input type="password" placeholder='Confirm Password' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
    
//     <GenderCheckbox/>

//     <a className='text-sm mt-2 text-violet-500 hover:underline  hover:text-blue-900 inline-block'>Already Have an Account?</a>
//     <div>
//    <button className="btn btn-block btn-sm mt-2">SignUP</button>
//    </div>
//     </form>
//     </div>
//     </div>
//   )
// }

// export default SignUp
