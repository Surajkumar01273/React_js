import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLogedIn }) => {
    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", conformPassword: ""
    })

    const [showPassword, setshowPassword] = useState(false)
    const [showConformPassword, setShowConformPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")




    function changeHandler(e) {
        const { name, type, value } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.conformPassword) {
            toast.error("Password do not match")
            return;
        }
            setIsLogedIn(true);
            toast.success("Account Created Successfully");
            navigate('/dashbord');
            const accountData = {
                ...formData
            };
            const finalData = {
                ...accountData,
                accountType                
            }
            console.log("Final Account Data");
            
            console.log(finalData);

    }


    return (
        <div className=''>
            {/* student instructor tab */}

            <div className='flex rounded-full gap-x-3 bg-slate-800 my-6 max-w-max p-1'>
                <button 
                onClick={() => setAccountType("student")}
                className = {` ${accountType === "student" ?
                     "text-white bg-black rounded-full px-4 text-center py-2 transition-all ease-in-out duration-700" : "text-slate-400 px-4 text-center py-2"
                    }`}
                >
                    Student
                </button>
                <button 
                onClick={()=> setAccountType("instructor")}
                className={ `${accountType === "instructor" ? 
                    "text-white bg-black rounded-full px-4 text-center py-2 transition-all ease-in-out duration-700" : "text-slate-400 px-4 text-center py-2"
                }`}>
                    Instructor
                </button>
            </div>


            <form onSubmit={submitHandler} className='mt-6'>

                <div className='flex gap-14'>
                    <label className=''>
                        <p className='text-white font-semibold'>First Name<sup className='text-red-600'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            className='w-full mb-2 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                        />
                    </label>

                    <label className=''>
                        <p className='text-white font-semibold'>Last Name <sup className='text-red-600'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler} 
                            className='w-full mb-2 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                        />
                    </label>
                </div>

                <label>
                    <p className='text-white mt-2 font-semibold'>Email<sup className='text-red-600'>*</sup></p>

                    <input
                        type="email"
                        required
                        placeholder='Enter Email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='w-full mb-2 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                    />
                </label>

                <div className='flex gap-14'>

                    <label className='relative'>
                        <p className='text-white font-semibold mt-2'>Create Password <sup className='text-red-600'>*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            required
                            autoComplete={formData.password}
                            placeholder='Enter Password'
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            className='w-full mb-2 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                        />
                        <span className='text-gray-300 absolute right-3 top-[45px]' onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible size={18} />) : (<AiOutlineEye size={18} />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-white mt-2 font-semibold'>Conform Password <sup className='text-red-600'>*</sup></p>

                        <input
                            type={showConformPassword ? ("text") : ("password")}
                            required
                            autoComplete={formData.password}
                            placeholder='Conform passsword'
                            name='conformPassword'
                            value={formData.conformPassword}
                            onChange={changeHandler}
                            className='w-full mb-2 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                        />
                        <span className='text-gray-300 absolute right-2 top-[45px]' onClick={() => setShowConformPassword((prev) => !prev)}>
                            {showConformPassword ? (<AiOutlineEyeInvisible size={18} />) : (<AiOutlineEye size={18} />)}
                        </span>
                    </label>
                </div>
                <button className='w-full py-2 px-20 text-white font-semibold mt-[20px] bg-yellow-700 rounded-md'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm
