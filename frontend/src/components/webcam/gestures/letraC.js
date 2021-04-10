import * as fp from "fingerpose";
//C
const letraCGesture = new fp.GestureDescription('letraC');

// thumb:
letraCGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
letraCGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);

// index:
letraCGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);
letraCGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);

// middle:
letraCGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);
letraCGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);

// ring:
letraCGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);
letraCGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);

// pinky:
letraCGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
letraCGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);
letraCGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraCGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

// give additional weight 
letraCGesture.setWeight(fp.Finger.Thumb, 1);
letraCGesture.setWeight(fp.Finger.Index, 1);
letraCGesture.setWeight(fp.Finger.Middle, 1);
letraCGesture.setWeight(fp.Finger.Ring, 1);
letraCGesture.setWeight(fp.Finger.Pinky, 1);

export default letraCGesture;