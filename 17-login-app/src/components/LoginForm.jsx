import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLogedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    function changehandler(e) {
        const { name, value, type } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLogedIn(true);
        toast.success('Login Successfully');
        navigate('/dashbord');
    }
    return (
        <>
            <div>
                <form onSubmit={submitHandler} className='mt-4'>
                    <label htmlFor="inputemail">
                        <p className='text-white text-lg'>Email address <sup className='text-red-600'>*</sup></p>
                    </label>

                    <input
                        type="email"
                        required
                        id='inputemail'
                        placeholder='Enter Email'
                        name='email'
                        value={formData.email}
                        onChange={changehandler}
                        className='w-full mb-4 p-2 outline-none hover:outline-blue-600 text-white rounded-md bg-gray-800'
                    />

                    <label htmlFor="inputpassword">
                        <p className='text-white text-lg mt-4'>Password <sup className='text-red-600'>*</sup></p>
                    </label>

                    <div className='relative'>
                        <input
                            type={showPassword ? ('text') : ('password')}
                            id='inputpassword'
                            required
                            value={formData.password}
                            placeholder="Enter Password"
                            autoComplete={formData.password}
                            name='password'
                            onChange={changehandler}
                            className='w-full p-2 outline-none hover:outline-blue-500 rounded-md bg-gray-800 text-white'
                        />

                        <span className='text-gray-300 absolute right-3 top-3' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible size={18} />) : (<AiOutlineEye size={18} />)}
                        </span>

                        <Link to="#">
                            <p className='text-blue-500 absolute right-0'>Forget Password</p>
                        </Link>

                    </div>

                    <button className='w-full text-white mt-12 bg-yellow-700 py-2 rounded-md text-xl font-semibold'>Login in</button>


                </form>
            </div>
        </>
    )
}

export default LoginForm
