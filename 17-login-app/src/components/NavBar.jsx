import React from 'react';
import cblogo from '../assets/cblogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const NavBar = (props) => {

    let isLogedIn = props.isLogedIn;
    let setIsLogedIn = props.setIsLogedIn;
    const navigate = useNavigate();


    return (

        <div className='flex sticky top-0 justify-between items-center h-16 bg-gray-800 text-white font-semibold text-lg px-10'>

            {/* Create Logo */}

            <div>
                <Link to='/'>
                    <img className='h-14 w-14 rounded-full' src={cblogo} alt="pic" loding="lazy" />
                </Link>
            </div>

            {/* Create Nav Bar Links */}

            <nav>
                <ul className='flex space-x-8'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li>
                </ul>
            </nav>

            {/* Create Button Login, Sign up, Log Out, DashBprd buttons */}

            <div className='flex space-x-20'>

                {!isLogedIn &&
                    <Link to="/login">
                        <button className='bg-gray-600 px-4 py-1 rounded-lg' onClick={() => {

                        }}>
                            Login
                        </button>
                    </Link>
                }

                {!isLogedIn &&
                    <Link to="/signup">
                        <button className='bg-gray-600 px-4 py-1 rounded-lg'>
                            Sign up
                        </button>
                    </Link>
                }

                {isLogedIn &&
                    <Link to="/dashbord">
                        <button>
                            Dash Bord
                        </button>
                    </Link>
                }

                {isLogedIn &&
                    <Link to="/">
                        <button className='bg-gray-600 px-4 py-1 rounded-lg' onClick={() => {
                            setIsLogedIn(false)
                            toast.success("Log Out")
                            navigate('/');

                        }}>
                            Log Out
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default NavBar
