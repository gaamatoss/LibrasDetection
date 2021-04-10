import * as fp from "fingerpose";
//M
const letraMGesture = new fp.GestureDescription('letraM');


// thumb:
letraMGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
letraMGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
letraMGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraMGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);

// index:
letraMGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
letraMGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);
letraMGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraMGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);

// middle:
letraMGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
letraMGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDowb, 1.0);
letraMGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 0.5);
letraMGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownRight, 0.5);

// ring:
letraMGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
letraMGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDowb, 1.0);
letraMGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownLeft, 0.5);
letraMGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 0.5);

// pinky:
letraMGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
letraMGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalDowb, 1.0);
letraMGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 0.5);
letraMGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 0.5);

// give additional weight 
letraMGesture.setWeight(fp.Finger.Middle, 1);
letraMGesture.setWeight(fp.Finger.Ring, 1);
letraMGesture.setWeight(fp.Finger.Pinky, 1);

export default letraMGesture;