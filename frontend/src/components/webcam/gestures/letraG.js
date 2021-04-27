import * as fp from "fingerpose";
//C
const letraCGesture = new fp.GestureDescription('letraC');

// thumb:
letraCGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
letraCGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
letraCGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);

// index:
letraCGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letraCGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

// middle:
letraIGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
letraCGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);

// Ring:
letraIGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0);
letraCGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 1.0);

// Pinky:
letraIGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
letraCGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);

// give additional weight 
letraCGesture.setWeight(fp.Finger.Thumb, 1);
letraCGesture.setWeight(fp.Finger.Index, 1);
letraCGesture.setWeight(fp.Finger.Middle, 1);
letraCGesture.setWeight(fp.Finger.Ring, 1);
letraCGesture.setWeight(fp.Finger.Pinky, 1);

export default letraCGesture;