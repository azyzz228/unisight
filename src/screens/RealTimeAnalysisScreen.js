import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { CircleProgress } from 'react-gradient-progress'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Chart from "react-apexcharts";


import SideMenuItem from '../components/SideMenuItem'
import star from '../images/star.png'
import logo from '../images/logo.png'
import gif from '../images/hbz.gif'

import notification from '../images/notification.png'
import video from '../images/video.png'

import profilephoto from '../images/profilephoto.png'
import volume from '../images/volume.png'

import AllowRecordingPopup from '../components/AllowRecordingPopup'
import ResultsModel from '../components/ResultsModel';



function RealTimeAnalysisScreen() {

    const [showModal, setShowModal] = useState(true)

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [heartBeat, setheartBeat] = useState()
    const [seconds2, setSeconds2] = useState()
    const [showResults, setShowResults] = useState(false)



    var min = 59;
    var max = 87;
    var num = 0;

    function display() {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        setheartBeat(num)
        console.log(num);
    }


    useEffect(() => {
        let interval2 = null;
        if (isActive) {
            interval2 = setInterval(() => {
                setSeconds2((seconds2) => seconds2 + 1);
                setheartBeat(Math.floor(Math.random() * (max - min + 1)) + min)
            }, 3200);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval2);
        }
        return () => clearInterval(interval2);
    }, [isActive, seconds2]);


    function toggle() {
        setIsActive(!isActive);
    }
    function reset() {

        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleModal = () => {
        setShowModal(!showModal)
        toggle();
        SpeechRecognition.startListening({ continuous: true })

    }

    const resetHandler = () => {
        onStop();
        setShowResults(true)
        reset();
        SpeechRecognition.stopListening();
    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition()


    {/* ATTENTION = FOCUS */ }
    const [focus, setFocus] = useState(0)
    {/* ENJOYMENT = PARTICIPATION */ }
    const [participation, setParticipation] = useState(0)
    {/* CONFUSION = INTEREST */ }
    const [interest, setInterest] = useState(0)

    const affdex = window.affdex;

    const [joy, setJoy] = useState([])
    const [surprise, setSurprise] = useState([])
    const [attention, setAttention] = useState([])
    const [confusion, setConfusion] = useState([])


    const startDetector = () => {
        toggle();
        SpeechRecognition.startListening({ continuous: true })
        setShowModal(false)
        console.log('Clicked');
        var divRoot = document.getElementById("video")

        console.log(divRoot);
        console.log('Clicked');
        var width = 650;
        var height = 500;
        var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
        //Construct a CameraDetector and specify the image width / height and face detector mode.
        var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);

        //Enable detection of all Expressions, Emotions and Emojis classifiers.
        detector.detectAllEmotions();
        detector.detectAllExpressions();
        detector.detectAllEmojis();
        detector.detectAllAppearance();
        //Add a callback to notify when the detector is initialized and ready for runing.
        detector.addEventListener("onInitializeSuccess", function () {
            //Display canvas instead of video feed because we want to draw the feature points on it
            $("#face_video_canvas").css("display", "block");
            $("#face_video").css("display", "none");
        });

        if (detector && !detector.isRunning) {
            detector.start();
        }

        var joye = [];
        var sade = [];
        var feare = [];
        var surpe = [];
        var valene = [];
        var attene = [];
        var browe = [];
        var framenum = [];
        var confused_times = [];
        var distracted_times = [];
        var enjoy_times = [];

        var ind = 0;

        // Current consecutive fear/sadness levels
        var fearF = 0;
        var sadF = 0;


        //Lower Attention
        var low_att = 0;
        //Hugely distracted-not looking
        var distra = 0;


        var less_att = 0;
        var distracte = 0;

        //confusion
        var confusion = 0;
        var lconf = 0;
        var mconf = 0;
        var hconf = 0;

        //Misunderstanding
        var brow = 0;
        var browR = 0;
        var jawDropped = 0;
        var eyeWidened = 0;
        //Sleeping
        var eyeC = 0;


        var joy_count = 0

        detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {


            if (faces.length > 0) {


                ind += 1;
                confusion = 0;

                //keeping track of student's brow furrow
                if (faces[0].expressions['browFurrow'].toFixed(0) > 10) {
                    brow += 1;
                } else {
                    brow = 0;
                }
                //if student has been confused for over 3 seconds display that!
                // if (brow >= 30) {
                //   log('#drlogs', "The student may be struggling to understand this part\n Please make sure to re-iterate this part");
                // }
                //Checking if this would represent confusion
                if (faces[0].expressions['browFurrow'].toFixed(0) > confusion) {
                    confusion = faces[0].expressions['browFurrow'].toFixed(0);
                }


                //keeping track of student's brow Raise
                if (faces[0].expressions['browRaise'].toFixed(0) > 15) {
                    browR += 1;
                } else {
                    browR = 0;
                }
                //if student has been confused for over 3 seconds display that!
                // if (browR >= 30) {
                //   log('#drlogs', "The student may be struggling to understand this part\n Please make sure to re-iterate this part");
                // }
                //Checking if this would represent confusion
                if (faces[0].expressions['browRaise'].toFixed(0) > confusion) {
                    confusion = faces[0].expressions['browRaise'].toFixed(0);
                }


                //keeping track of patient's jaw dropping
                if (faces[0].expressions['jawDrop'].toFixed(0) > 30) {
                    jawDropped += 1;
                } else {
                    jawDropped = 0;
                }

                if (jawDropped >= 60 || brow >= 60 || browR >= 60) {
                    hconf += 1;

                    setParticipation(33)
                    confused_times.push(timestamp.toFixed(2));
                } else if (jawDropped >= 20 || brow >= 20 || browR >= 20) {
                    mconf += 1;
                    setParticipation(66)
                } else {
                    lconf += 1;
                    setParticipation(100)

                }
                //Checking if this would represent confusion
                if (faces[0].expressions['jawDrop'].toFixed(0) > confusion) {
                    confusion = faces[0].expressions['jawDrop'].toFixed(0);
                }

                if ((faces[0].expressions['attention'].toFixed(0) <= 90) && (faces[0].expressions['attention'].toFixed(0) > 60)) {
                    less_att += 1;
                }
                if (faces[0].expressions['attention'].toFixed(0) <= 60) {
                    distracte += 1;
                }

                //keeping track of joy
                if (faces[0].emotions['joy'].toFixed(0) > 30) {
                    joy_count += 1;
                } else {
                    joy_count = 0;
                }

                if (joy_count >= 20) {

                    setParticipation(100)
                    enjoy_times.push(timestamp.toFixed(2));
                } else {
                    setParticipation(66)

                }

                //keeping track of student Attention
                if (faces[0].expressions['attention'].toFixed(0) <= 90) {
                    low_att += 1;
                } else {
                    low_att = 0;
                }

                if (low_att >= 90) {

                    setFocus(30)
                    distracted_times.push(timestamp.toFixed(2));

                } else if (low_att >= 30) {
                    setFocus(72)

                } else {
                    setFocus(100)
                }

                //adding frame values to their respective arrays
                browe.push(confusion);
                attene.push(faces[0].expressions['attention'].toFixed(0));
                framenum.push(timestamp.toFixed(2));
                valene.push(faces[0].emotions['valence'].toFixed(0));
                joye.push(faces[0].emotions['joy'].toFixed(0));
                surpe.push(faces[0].emotions['surprise'].toFixed(0));


                if ($('#face_video_canvas')[0] != null)
                    drawFeaturePoints(image, faces[0].featurePoints);

            }


            function drawFeaturePoints(img, featurePoints) {
                var contxt = $('#face_video_canvas')[0].getContext('2d');

                var hRatio = contxt.canvas.width / img.width;
                var vRatio = contxt.canvas.height / img.height;
                var ratio = Math.min(hRatio, vRatio);

                contxt.strokeStyle = "#38e2f5";
                for (var id in featurePoints) {
                    contxt.beginPath();
                    contxt.arc(featurePoints[id].x,
                        featurePoints[id].y, 2, 0, 2 * Math.PI);
                    contxt.stroke();

                }
            }
        });
        function onStop() {
            if (detector && detector.isRunning) {
                detector.removeEventListener();
                detector.stop();
            }

            setJoy(joy_count)
            setAttention(attene)
            setConfusion(confusion)
            setSurprise(surpe)


        }



    }
    return (
        <div className="flex flex-row  justify-center h-screen relative">
            {showResults && <ResultsModel joy={joy} attention={attention} confusion={confusion} surprise={surprise} />}
            {showModal && <AllowRecordingPopup onClick={startDetector} />}


            <div className="w-2/12 h-full bg-gray-50 font-muller">

                <div className="flex flex-row items-center justify-center space-x-2 my-6">
                    <img src={logo} alt="" className="w-2/4 transform -translate-x-12" />
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



                <div className=" rounded-xl mt-4 overflow-hidden ml-28  relative " id="video"
                    style={{ width: '640px', height: '490px' }}
                >

                    <div className="px-8 py-4 w-10 h-10 top-10 absolute z-20 filter blur-md">
                        <p>STOP</p>
                    </div>

                </div>


                <div className={`flex flex-row items-center ml-24 transform scale-90 -mt-16 z-20 relative space-x-2 ${showModal ? 'opacity-0' : 'opacity-100'} `}>

                    <div className="grid place-content-center px-4 py-2 rounded-lg bg-black">
                        <img src={volume} alt="" />
                    </div>


                    <div className="grid place-content-center px-4 py-2 rounded-lg bg-black">
                        <img src={video} alt="" />
                    </div>

                    <div className="flex flex-row space-x-3 items-center text-white font-rfsemibold px-4 py-4 rounded-lg bg-black">
                        <div className={`w-2 h-2 bg-red-400 rounded-full  ${isActive ? 'animate-pulse' : 'animate-none'}`}></div>
                        <p className="">Record</p>
                        <p className="mr-2 font-mono">{seconds}</p>
                    </div>

                    <button className="grid place-content-center px-6 py-4 font-rfsemibold tracking-wide text-white rounded-lg bg-black" onClick={resetHandler}
                    >
                        End & Save
                    </button>

                    <div className="grid place-content-center px-6 py-4 font-rfsemibold tracking-wide text-white rounded-lg bg-black" >
                        Reset
                    </div>

                </div>

                <div className="px-8 bg-gray-50 flex flex-row items-baseline py-4 rounded-lg mt-6">

                    <div className="flex flex-row items-center justify-center space-x-1 mr-6">


                        <div className={`w-1 h-4 rounded-full ${listening ? 'animate-bounce' : 'animate-none'}`} style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className={`w-1 h-6 rounded-full ${listening ? 'animate-bounce' : 'animate-none'}`} style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className={`w-1 h-5 rounded-full ${listening ? 'animate-bounce' : 'animate-none'}`} style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className={`w-1 h-4 rounded-full ${listening ? 'animate-bounce' : 'animate-none'}`} style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                        <div className={`w-1 h-2 rounded-full ${listening ? 'animate-bounce' : 'animate-none'}`} style={{ backgroundColor: '#6e6eff', color: "#6e6eff" }}></div>

                    </div>

                    <p className="text-lg font-rfbold" style={{ color: "#6e6eff" }}>Transcript:</p>
                    <p className="w-full px-6 font-rfbold text-center">
                        {transcript}
                    </p>
                </div>

            </div>


            <div className={`w-3/12  pl-2 pr-10 transform`}>

                <div className="flex flex-row items-center justify-around px-3  mt-6">
                    <i class="fas fa-search text-lg" style={{ color: '#979797' }}></i>
                    <img src={notification} alt="" />
                    <p className="text-xl font-muller font-thin">Aziz</p>
                    <img src={profilephoto} alt="" />

                    <i class="bi bi-chevron-down" style={{ color: '#979797' }}></i>
                </div>





                <div className={`px-4 py-6 bg-black font-rfregular flex flex-col space-y-6 rounded-xl my-4  ${showModal ? 'opacity-0' : 'opacity-100'} `}>
                    <div className="flex flex-row text-white items-center text-lg">
                        <p>Class sentiment</p>
                        <i class="bi bi-exclamation-circle text-sm ml-2 -mb-1" style={{ color: '#9ea9b4' }}></i>
                    </div>

                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">
                            <CircleProgress percentage={focus} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />
                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Focus</p>
                        <p className="text-xs"></p>
                    </div>


                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">

                            <CircleProgress percentage={0} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />



                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Interest</p>
                        <p className="text-xs"></p>
                    </div>


                    <div className="flex flex-row items-center  px-4 bg-white text-gray-400 rounded-2xl h-20">
                        <div className="bg-white rounded-full">
                            <CircleProgress percentage={participation} strokeWidth={8} primaryColor={["#898BFA", "#54C4FE"]} secondaryColor="#f0f0f0" strokeWidth={7} width={90} />
                        </div>
                        <p className="ml-2 flex-1" style={{ color: '#8a8a8e' }}>Participation</p>
                        <p className="text-xs"></p>


                    </div>




                </div>



                <div className={` rounded-2xl px-5 py-5 border border-gray-300 ${showModal ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: '#b9efff' }}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-base font-muller">Heart rate</p>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <img src={gif} alt="" className="w-1/2" />
                        <p className="text-3xl font-muller text-red-500">{heartBeat}</p>
                    </div>
                </div>


            </div >

        </div >
    )
}

export default RealTimeAnalysisScreen
