import React from 'react'
import blurredbg from '../images/blurredbg.png'
import zoom from '../images/zoom.png'
import logopopup from '../images/logopopup.png'
import arrowpopup from '../images/arrowpopup.png'

function AllowRecordingPopup(props) {
    return (

        <div className="absolute z-10  w-10/12 right-0 top-20 h-5/6 overflow-hidden rounded-3xl pl-8 pr-14">
            <div className="relative w-full h-full">
                <img src={blurredbg} alt="" className="w-full h-full absolute z-10  " />

                <div className=" bg-white absolute z-30 self-center w-80 px-6 py-4 flex flex-col items-center rounded-lg  font-rfbold tracking-wide text-base left-80 top-20 " style={{ left: '370px' }}>
                    <div className="flex flex-row items-center justify-center mt-4 mx-auto ml-11 transform scale-75">
                        <img src={logopopup} alt="" />
                        <img src={arrowpopup} alt="" className="transform -translate-y-7" />
                        <img src={zoom} alt="" className="transform -translate-x-7" />
                    </div>

                    <p>Allow UNIsight to track your</p>
                    <p>activity onzoom meetings?</p>


                    <button className="w-full py-3 rounded-xl bg-black text-white text-sm font-rfsemibold  mt-8" onClick={props.onClick}>
                        Allow this site to track
                    </button>

                    <p className="text-green-darker text-sm font-rfsemibold mt-6 mb-6">Ask site not to track</p>
                </div>

            </div>


        </div>

    )
}

export default AllowRecordingPopup
