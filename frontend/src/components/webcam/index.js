import React, { useRef, useState, useEffect  } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./style.scss";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import thumbs_up from "./images/thumbs_up.png";
import victory from "./images/victory.png";
import letraL from "./images/letraL.png";
import letraM from "./images/letraM.png";
import letraC from "./images/letraC.png";
import letraMGesture from "./gestures/letraM";
import letraCGesture from "./gestures/letraC";
import letraLGesture from "./gestures/letraL";


function Detection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
 
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory, letraL: letraL, letraM: letraM, letraC: letraC };


  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
            fp.Gestures.ThumbsUpGesture,
            fp.Gestures.VictoryGesture,
            letraLGesture,
            letraMGesture,
            letraCGesture,
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          // console.log(emoji);
        }
      }
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
 
    
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: 100,
            marginRight: "auto",
            marginTop: 40,
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            audio: false,
            borderRadius: 10
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: 100,
            marginRight: "auto",
            marginTop: 40,
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 800,
              bottom: 220,
              right: 0,
              textAlign: "center",
              height: 300,
            }}
          />
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Detection;