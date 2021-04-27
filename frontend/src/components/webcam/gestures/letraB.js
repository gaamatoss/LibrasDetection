import * as fp from "fingerpose";
//B
const letraBGesture = new fp.GestureDescription('letraB');

// Thumb:
letraBGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
letraBGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
letraBGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraBGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);
letraBGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraBGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

// Index:
letraBGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letraBGesture.addDirection(fp.Finger.Index,fp.FingerDirection.VerticalUp, 0.75);
letraBGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraBGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);

// Middle:
letraBGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
letraBGesture.addDirection(fp.Finger.Middle,fp.FingerDirection.VerticalUp, 0.75);
letraBGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraBGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);

// Ring:
letraBGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
letraBGesture.addDirection(fp.Finger.Ring,fp.FingerDirection.VerticalUp, 0.75);
letraBGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraBGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);

// Pinky:
letraBGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
letraBGesture.addDirection(fp.Finger.Pinky,fp.FingerDirection.VerticalUp, 0.75);
letraBGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraBGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

// aumentar peso nos dedos 
letraBGesture.setWeight(fp.Finger.Thumb, 1);
letraBGesture.setWeight(fp.Finger.Index, 1);
letraBGesture.setWeight(fp.Finger.Middle, 1);
letraBGesture.setWeight(fp.Finger.Ring, 1);
letraBGesture.setWeight(fp.Finger.Pinky, 1);

export default letraBGesture;