import React, { useState } from 'react'
import SideMenuItem from '../components/SideMenuItem'
import star from '../images/star.png'
import notification from '../images/notification.png'

import profilephoto from '../images/profilephoto.png'
import blurredbg from '../images/blurredbg.png'
import zoom from '../images/zoom.png'
import logopopup from '../images/logopopup.png'
import arrowpopup from '../images/arrowpopup.png'

import { CircleProgress } from 'react-gradient-progress'
import LogoutIcon from '../icons/LogoutIcon'
import AllowRecordingPopup from '../components/AllowRecordingPopup'



function RealTimeAnalysisScreen() {

    const [showModal, setShowModal] = useState(true)

    const handleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className="flex flex-row  justify-center h-screen relative">
            {showModal && <AllowRecordingPopup handleModal={handleModal} />}


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


            <div className="w-7/12 bg-white pl-8  pr-7">


                <div className=" p-2 relative  mt-6">
                    <p className="text-3xl">Real-time analysis</p>
                    <img src={star} alt="" className="absolute top-0 left-64" />
                </div>



                <div className="bg-red-300  rounded-xl mt-4" id="affdex_elements"
                    style={{ width: '830px', height: '400px' }}
                >
                    .
                </div>

                <div className="px-8 bg-gray-50 flex flex-row items-baseline py-4 rounded-lg mt-6">

                    <div className="flex flex-row items-center justify-center space-x-1 mr-6">


                        <div className="w-1 h-4 rounded-full " style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className="w-1 h-6 rounded-full " style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className="w-1 h-2 rounded-full " style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className="w-1 h-5 rounded-full " style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className="w-1 h-6 rounded-full " style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                    </div>

                    <p className="text-lg font-rfbold" style={{ color: "#6e6eff" }}>Transcript:</p>
                    <p className="w-full px-6 font-rfbold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat vero officiis. Placeat suscipit laboriosam tempora ipsa labore sequi, ullam in illo blanditiis similique dolor qui aperiam dolore vitae cumque reiciendis porro esse cupiditate voluptatum soluta repellat rerum adipisci consequuntur! Reiciendis quia numquam hic pariatur debitis, quae repudiandae maxime voluptate?</p>
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





                <div className={`px-4 py-6 bg-black font-rfregular flex flex-col space-y-6 rounded-xl mt-4  ${showModal ? 'opacity-0' : 'opacity-100'} `}>
                    <div className="flex flex-row text-white items-center text-lg">
                        <p>Class sentiment</p>
                        <i class="bi bi-exclamation-circle text-sm ml-2 -mb-1" style={{ color: '#9ea9b4' }}></i>
                    </div>

                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">
                            <CircleProgress percentage={32} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />
                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Focus</p>
                        <p className="text-xs">+35%</p>
                    </div>


                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">
                            <CircleProgress percentage={32} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />
                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Interest</p>
                        <p className="text-xs">+35%</p>
                    </div>


                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">
                            <CircleProgress percentage={32} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />
                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Participation</p>
                        <p className="text-xs">+35%</p>


                    </div>



                    <div className="">

                    </div>

                </div>



            </div >

        </div >
    )
}

export default RealTimeAnalysisScreen
