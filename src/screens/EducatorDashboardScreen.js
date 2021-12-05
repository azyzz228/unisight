import React, { useState } from 'react'
import SideMenuItem from '../components/SideMenuItem'
import star from '../images/star.png'
import notification from '../images/notification.png'

import profilephoto from '../images/profilephoto.png'
import group156 from '../images/group156.png'
import FocusLine from '../images/FocusLine.png'
import Heart from '../images/Heart.png'
import interestLine from '../images/interestLine.png'
import Show from '../images/Show.png'
import logoWhiteBg from '../images/logoWhiteBg.png'
import hiJosh from '../images/hiJosh.png'



import { CircleProgress } from 'react-gradient-progress'
import GroupDarkIcon from '../icons/GroupDarkIcon'
import EditSquareIcon from '../icons/EditSquareIcon'
import Chaticon from '../icons/Chaticon'



function EducatorDashboardScreen() {


    return (
        <div className="flex flex-row  justify-center h-screen relative">



            <div className="w-2/12 h-full bg-gray-50 font-muller">

                <div className="flex flex-row items-center justify-center space-x-2 my-6">
                    <div className="w-10 h-10 rounded-full bg-black"></div>
                    <p className="font-bold">Brand name</p>
                </div>


                <div className="flex flex-col justify-start py-5 border-b border-gray-100">
                    <SideMenuItem active={true} title="Real-time analysis" icon="Play" />
                    <SideMenuItem active={false} title="Dashboard" icon="Dashboard" margin="pl-5" />
                    <SideMenuItem active={false} title="Helpful Resources" icon="Idea" margin="pl-5" space="space-x-4" />
                    <SideMenuItem active={false} title="Class agenda" icon="Group" iconSize="text-sm" margin="pl-5" space="space-x-4" />
                </div>


                <div className=" mt-10">
                    <SideMenuItem active={false} title="Settings" icon="Settings" />
                    <SideMenuItem active={false} title="Logout" icon="Logout" />
                </div>


            </div>


            <div className="w-7/12 bg-white pl-8  pr-12">

                <div className=" p-2 relative  mt-6">
                    <p className="text-3xl font-rfbold" style={{ color: '#4f4f4f' }}>Educator dashboard</p>
                    <img src={star} alt="" className="absolute top-0 left-80" />
                </div>

                <div className="flex flex-row items-center text-sm font-rfbold ">

                    <div className=" flex flex-row items-center space-x-2 rounded-md shadow-md" style={{ backgroundColor: '#f9f9fd' }}>
                        <p className="py-2 px-4 bg-white text-black rounded-lg">Last 7 days</p>
                        <p className="py-2 px-4">Months</p>
                        <p className="py-2 px-4">Years</p>
                    </div>

                    <div className=" flex flex-row ml-8 px-4 py-2 bg-white shadow-md rounded-md">
                        <p className="mr-4">Zoom</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>

                    <div className="py-1 px-2 ml-12 bg-white shadow-md rounded-full">
                        <i class="bi bi-plus text-lg"></i>
                    </div>

                </div>


                <div className="grid grid-cols-3 gap-4 mt-4">

                    <div className="flex flex-row font-rfregular items-center bg-green-darker text-white px-4 py-3 rounded-xl ">
                        <GroupDarkIcon />
                        <div className="flex flex-col justify-start ml-3">
                            <p className="text-xl">Participation</p>

                            <div className="flex flex-row justify-between items-center -my-3">
                                <img src={group156} alt="" />
                                <p className="text-xs font-muller tracking-wider"> 35%</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row font-rfregular items-center  text-green-darker px-4 py-3 rounded-xl border border-gray-400">
                        <img src={Heart} alt="" />
                        <div className="flex flex-col justify-start ml-3">
                            <p className="text-xl" style={{ color: "#828194" }}>Interest Level</p>

                            <div className="flex flex-row justify-between items-center -my-3">
                                <img src={interestLine} alt="" />
                                <p className="text-xs font-muller tracking-wider"> 35%</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row font-rfregular items-center px-4 py-3 rounded-xl border border-gray-400">
                        <img src={Show} alt="" />
                        <div className="flex flex-col justify-start ml-3">
                            <p className="text-xl" style={{ color: "#828194" }}>Focus level</p>

                            <div className="flex flex-row justify-between items-center -my-3">
                                <img src={FocusLine} alt="" />
                                <p className="text-xs font-muller tracking-wider" style={{ color: "#e3507a" }}> 35%</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className={`w-3/12  pl-2 pr-10 transform`}>

                <div className="flex flex-row items-center justify-around px-3  mt-6">
                    <i class="fas fa-search text-lg" style={{ color: '#979797' }}></i>
                    <img src={notification} alt="" />
                    <p className="text-xl font-muller font-thin">Your name</p>
                    <img src={profilephoto} alt="" />

                    <i class="bi bi-chevron-down" style={{ color: '#979797' }}></i>
                </div>



                <div className="flex flex-col space-y-3 mt-12 mb-8">
                    <div className="flex flex-row justify-between items-center px-2">
                        <p className="text-xl font-muller " style={{ color: '#4f4f4f' }}>Classes</p>
                        <p className="text-xs text-green-darker font-rfregular">See All</p>
                    </div>

                    <div className="flex flex-row justify-center items-center py-2 px-2">
                        <div className="bg-gray-100 p-2 rounded-full mr-4">
                            <EditSquareIcon />
                        </div>
                        <p className="text-xs font-rfbold flex-1" style={{ color: '#4f4f4f' }}>MATH 102-1</p>
                        <p className="text-xs text-gray-400">updated 5 mins ago</p>
                    </div>


                    <div className="flex flex-row justify-center items-center bg-gray-50 py-2 px-2 rounded-lg">
                        <div className=" p-2 rounded-full mr-4" style={{ backgroundColor: "#ecc3ad" }}>
                            <EditSquareIcon />
                        </div>
                        <p className="text-xs font-rfbold flex-1" style={{ color: '#4f4f4f' }}>MATH 102-2</p>
                        <p className="text-xs text-gray-400">updated 5 mins ago</p>
                    </div>



                    <div className="flex flex-row justify-center items-center py-2 px-2">
                        <div className=" p-2 rounded-full mr-4" style={{ backgroundColor: "#c0b8e9" }}>
                            <EditSquareIcon />
                        </div>
                        <p className="text-xs font-rfbold flex-1" style={{ color: '#4f4f4f' }}>CHEM 314</p>
                        <p className="text-xs text-gray-400">yesterday</p>
                    </div>


                    <div className="flex flex-row justify-center items-center py-2 px-2">
                        <div className=" p-2 rounded-full mr-4" style={{ backgroundColor: "#ced0be" }} >
                            <EditSquareIcon />
                        </div>
                        <p className="text-xs font-rfbold flex-1" style={{ color: '#4f4f4f' }}>CHEM 205</p>
                        <p className="text-xs text-gray-400">updated 16 hours ago</p>
                    </div>





                </div>

                <div className={`p-6 bg-black font-rfregular flex flex-col space-y-6 rounded-xl mt-4  $ `}>



                    <p className="text-white text-xs font-rfsemibold">Try 7-days premium to get <br />
                        communication expert feedback
                    </p>

                    <div className="flex flex-row items-center space-x-3">
                        <img src={logoWhiteBg} alt="" />
                        <img src={hiJosh} alt="" />
                    </div>


                    <div className=" bg-white py-3 rounded-lg grid place-content-center" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));' }}>
                        <p className="text-sm font-rfsemibold ">Start chatting</p>
                    </div>

                    <div className=" p-4 grid place-content-center rounded-xl bg-black absolute right-10 -bottom-10">
                        <Chaticon />
                    </div>


                </div>



            </div >

        </div >
    )
}

export default EducatorDashboardScreen
