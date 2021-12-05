import React, { useEffect, useState } from 'react'
import $ from 'jquery'

function Test() {
    {/* ATTENTION = FOCUS */ }
    const [focus, setFocus] = useState('')
    {/* ENJOYMENT = PARTICIPATION */ }
    const [participation, setParticipation] = useState('')
    {/* CONFUSION = INTEREST */ }
    const [interest, setInterest] = useState('')

    const affdex = window.affdex;





    const startDetector = () => {
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
                // log('#results', "Appearance: " + JSON.stringify(faces[0].appearance));
                // log('#results', "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
                //   return val.toFixed ? Number(val.toFixed(0)) : val;
                // }));

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

                    setParticipation('Low')
                    confused_times.push(timestamp.toFixed(2));
                } else if (jawDropped >= 20 || brow >= 20 || browR >= 20) {
                    mconf += 1;
                    setParticipation('Medium')
                } else {
                    lconf += 1;
                    setParticipation('High')

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

                    setParticipation("High")
                    enjoy_times.push(timestamp.toFixed(2));
                } else {
                    setParticipation("Medium")

                }

                //keeping track of student Attention
                if (faces[0].expressions['attention'].toFixed(0) <= 90) {
                    low_att += 1;
                } else {
                    low_att = 0;
                }

                if (low_att >= 90) {

                    setFocus("Low")
                    distracted_times.push(timestamp.toFixed(2));

                } else if (low_att >= 30) {
                    setFocus("Medium")

                } else {
                    setFocus("High")
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
    }

    return (
        <>
            <div className="" id="video" style={{ width: '650px', height: "500px" }}>

            </div>

            <button className="text-black bg-white border-2 px-6 py-2 rounded-xl" onClick={startDetector}>Start</button>


            <div className="flex flex-row w-2/4 justify-between items-center text-2xl mt-2">
                <p>Focus</p>
                <p>{focus}</p>
            </div>


            <div className="flex flex-row w-2/4 justify-between items-center text-2xl mt-2">
                <p>participation</p>
                <p>{participation}</p>
            </div>


            <div className="flex flex-row w-2/4 justify-between items-center text-2xl mt-2">
                <p>Interest</p>
                <p>{interest}</p>
            </div>



        </>
    )
}

export default Test
