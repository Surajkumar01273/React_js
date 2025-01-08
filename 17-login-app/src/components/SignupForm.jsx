import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLogedIn }) => {
    // console.log(setIsLogedIn);
    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", conformPassword: ""
    })


    const [showPassword, setshowPassword] = useState(false)
    const [showConformPassword, setShowConformPassword] = useState(false)

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
        else {
            setIsLogedIn(true);
            toast.success("Account Created Successfully");
            navigate('/dashbord');
        }
    }


    return (
        <div className='flex items-center justify-center flex-col'>
            {/* student instructor tab */}

            <div className='text-white'>
                <button className='text-2xl py-2 mr-10 px-16 rounded-lg bg-slate-600'>
                    Student
                </button>
                <button className='text-2xl py-2 px-16 rounded-lg bg-slate-600'>
                    Instructor
                </button>
            </div>


            <form onSubmit={submitHandler} className='mt-6'>

                <div className=''>
                    <label className=''>
                        <p className='text-white font-semibold'>First Name <sup className='text-red-600'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            className='border-2 border-black w-[300px] p-1 rounded-md'
                        />
                    </label>

                    <label className=''>
                        <p className='text-white mt-4 font-semibold'>Last Name <sup className='text-red-600'>*</sup></p>
                        <input
                            type="text"
                            required
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler} 
                            className='border-2 border-black w-[300px] p-1 rounded-md'
                        />
                    </label>
                </div>

                <label>
                    <p className='text-white mt-4 font-semibold'>Email<sup className='text-red-600'>*</sup></p>

                    <input
                        type="email"
                        required
                        placeholder='Enter Email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='border-2 border-black w-[300px] p-1 rounded-md'
                    />
                </label>

                <div>

                    <label>
                        <p className='text-white font-semibold mt-4'>Create Password <sup className='text-red-600'>*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            required
                            autoComplete={formData.password}
                            placeholder='Enter Password'
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            className='border-2 border-black w-[300px] p-1 rounded-md'
                        />
                        <span onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>

                    <label>
                        <p className='text-white mt-4 font-semibold'>Conform Password <sup className='text-red-600'>*</sup></p>

                        <input
                            type={showConformPassword ? ("text") : ("password")}
                            required
                            autoComplete={formData.password}
                            placeholder='Enter conform passsword'
                            name='conformPassword'
                            value={formData.conformPassword}
                            onChange={changeHandler}
                            className='border-2 border-black w-[300px] p-1 rounded-md'
                        />
                        <span onClick={() => setShowConformPassword((prev) => !prev)}>
                            {showConformPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button className='py-2 px-20 text-white font-semibold mt-[20px] bg-yellow-700 rounded-md'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm
