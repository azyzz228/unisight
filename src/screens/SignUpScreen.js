import React from 'react'
import group4 from '../images/group_4.png'
import vector from '../images/vector.png'
import { Link } from 'react-router-dom'
function SignUpScreen() {
    return (
        <div className="min-w-full h-full bg-green-light-bg">
            <div className="grid grid-cols-2 h-full">

                <div className=" w-full h-full grid place-content-center">
                    <div className=" -mr-10 " style={{ width: '380px' }}>

                        <div className=" bg-dark-gray-bg py-1 text-white rounded-xl w-full mb-6">
                            <div className="flex flex-row justify-center items-center">
                                <p className="p-1 px-4 rounded-xl bg-black w-1/2 text-center ">I am a teacher</p>
                                <p className="p-1 px-4 w-1/2 text-center">I am a student</p>
                            </div>
                        </div>


                        <div className="w-full bg-white flex flex-col px-6 py-8">

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 flex-none   bg-black rounded-full"></div>
                                <p className="text-gray-400 mt-2 " style={{ fontSize: '19px' }}>Brand name</p>
                                <p className="text-xl font-bold mt-6">Teacher Sign up</p>

                            </div>

                            <p className="text-gray-400 uppercase mt-4 text-xs">Organization name</p>
                            <input type="text" name="" id="" className="outline-none px-4 py-2 rounded-lg bg-gray-50 mb-4" />

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col " style={{ width: '47%' }}>
                                    <p className="text-gray-400 uppercase mt-4 text-xs">First name</p>
                                    <input type="text" name="" id="" className="outline-none px-4 py-2 rounded-lg bg-gray-50 mb-4" />
                                </div>

                                <div className="flex flex-col  " style={{ width: '47%' }}>
                                    <p className="text-gray-400 uppercase mt-4 text-xs">Last name</p>
                                    <input type="text" name="" id="" className="outline-none px-4 py-2 rounded-lg bg-gray-50 mb-4" />
                                </div>

                            </div>


                            <p className="text-gray-400 uppercase text-xs">school email address</p>
                            <input type="email" name="" id="" className="outline-none px-4 py-2 rounded-lg bg-gray-50 mb-4" placeholder="Organization or school email" />

                            <div className="flex flex-row justify-between text-gray-400 items-center">
                                <p>Password</p>
                                <p className="text-xs">Forgot your password?</p>
                            </div>

                            <input type="password" name="" id="" className="outline-none px-4 py-2 rounded-lg bg-gray-50 mb-6" placeholder="Enter your password" />

                            <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-700 mb-8">LOGIN</button>


                            <p className="text-gray-400 self-center ">Already have an account? <Link to="/login" className="text-blue-600">Login</Link> </p>
                        </div>
                    </div>
                </div>

                {/* END OF FORM */}

                <div className="text-green-darker h-full flex flex-col justify-center relative">
                    <div className=" p-6 font-bold relative">
                        <p className="text-xl">Build a more connected world through</p>
                        <p className="text-7xl mb-1">engaging</p>
                        <p className="text-7xl ">online learning</p>
                        <img src={group4} alt="" className="absolute -top-4 right-40" />
                        <img src={vector} alt="" className="absolute -bottom-8 right-36" />
                    </div>


                </div>



            </div>
        </div>
    )
}

export default SignUpScreen
